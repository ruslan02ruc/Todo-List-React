import AddTaskForm from '../../Components/AddTaskForm/AddTaskForm'
import Task from '../../Components/Task/Task'
import {ThemeProvider} from '../../ThemeProvider.jsx'
import './TaskInfo.scss'
import { useContext } from 'react'

function TaskInfo({props, addTaskHandler, showForm, taskDoneHandler}) {

  const showAddTaskHandler = () => { // показ формы
    showForm.setShowForm(!showForm.showForm)
  }

  let testFilter = props.listState.filter(item => {
    return props.folderId === 'all' ? item.id : item.id === props.folderId
  })

  const value2 = useContext(ThemeProvider)
  console.log(value2);
  return (
    <>
      <div className='task-info'>
      {
        testFilter.length !== 0 
        ?
          testFilter.map((item, index) => 
            <div className='task-info__item' key={index}>
              <p className={`task-info__title ${item.color}`}>{item.name}</p>
              <span className='line'></span>
              <div className='task-info__list'>
                {
                  item.tasks.map((task, index)=>{
                    return <Task className='task-info__text' item={task} key={index} onClick={()=>taskDoneHandler(task.id)}/>
                  })
                }
                {
                  testFilter.length === 1 && (
                    <div>
                      {
                        !showForm.showForm
                        ? <Task 
                          className='new--task' 
                          item={{icon: 'add',name: 'Добавить задачу'}} 
                          key={'f3'} 
                          onClick={showAddTaskHandler}
                        />
                        : <AddTaskForm 
                          showForm={showForm} 
                          showAddTaskHandler={showAddTaskHandler}
                          addTaskHandler={addTaskHandler}
                        />
                      }
                    </div>
                  )
                }
              </div>
            </div>
          )
        :
        <p className='no-task'>Задачи отсутствуют</p>
      }
    </div>
    </>
    
  );
}

export default TaskInfo;