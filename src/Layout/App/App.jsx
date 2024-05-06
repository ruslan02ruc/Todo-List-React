import {useEffect, useState } from 'react';
import TaskFolders from '../TaskFolders/TaskFolders.jsx'
import TaskInfo from '../TaskInfo/TaskInfo.jsx'
import './App.scss'
import { test as DB } from '../../store.js';
import { color as badgeColor } from '../../store';

function App() {
  const[listState, useListState] = useState(DB) // Начальные значения папок
  const[folderId, useFolderId] = useState(1) // ID папки
	const[visibleForm, setVisibleForm] = useState(false) // показ формы Папок
  const[showForm, setShowForm] = useState(false) // состояние формы показ формы

  useEffect(()=>{
    console.log('render');
    setVisibleForm(false)
    setShowForm(false)
  }, [folderId])

  const addFolderTaskHandler = (idx, inputText) => {
		useListState(
			[
				...listState,
				{
					id: listState.length+1,
					color: badgeColor[idx-1].color,
					name: inputText,
					tasks: [],
					active: false
			}]
    )
	}

  const removeFolderHandler = () => {
		useListState(listState.filter((item) => item.id !== folderId))
	}


  const addTaskHandler = (inputText) => {
		useListState(
			[
				...listState.slice(0, folderId-1),
				{
					id: listState[folderId-1].id,
					name: listState[folderId-1].name,
					tasks: [
						...listState[folderId-1].tasks,
            {
              id: listState[folderId-1].tasks.length+1,
							icon: 'check',
							name: inputText,
              done: false
						}
					],
					active: false,
					color: listState[folderId-1].color,
				},
				...listState.slice(folderId)
			]
		)

	}

  const taskDoneHandler = (taskId) => {
    console.log('click: '+folderId+'' +taskId);

    useListState(
      [
        ...listState.slice(0, folderId-1),
        {
          id: listState[folderId-1].id,
          name: listState[folderId-1].name,
          tasks: [
            ...listState[folderId-1].tasks.slice(0, taskId-1),
            {
              id: listState[folderId-1].tasks[taskId-1].id,
              icon: 'check',
              name: listState[folderId-1].tasks[taskId-1].name,
              done: !listState[folderId-1].tasks[taskId-1].done
            },
            ...listState[folderId-1].tasks.slice(taskId),
          ],
          active: false,
          color: listState[folderId-1].color,
        },
        ...listState.slice(folderId)
      ]
    )
  }
  console.log(listState);

  return (
    <>
      <div className='app'>
        <TaskFolders props={{listState, useListState, folderId, useFolderId}} removeFolderHandler={removeFolderHandler} addFolderTaskHandler={addFolderTaskHandler} visibleForm={{visibleForm, setVisibleForm}}/>
        <TaskInfo props={{folderId, listState, useListState}} addTaskHandler={addTaskHandler} showForm={{showForm, setShowForm}} taskDoneHandler={taskDoneHandler}/>
      </div>
    </>
  )
}

export default App
