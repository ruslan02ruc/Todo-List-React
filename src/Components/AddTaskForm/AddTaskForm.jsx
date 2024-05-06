import './AddTaskForm.scss'
import { useState } from 'react';

function AddTaskForm({showForm, showAddTaskHandler, addTaskHandler}) {
	const [inputText, setinputText] = useState('')

	return (
		<>
			<form className={`add-task-form${showForm.showForm ? ' active': ''}`} >
				<input className='add-task-form__input' type="text" placeholder='Текст задачи' value={inputText} onChange={(e)=>setinputText(e.target.value)}/>
				<div className='add-task-form__buttons'>
					<input className='add-task-form__btn add' type="button" value="Добавить задачу" onClick={()=> {addTaskHandler(inputText), setinputText(''), showAddTaskHandler()}}/>
					<input className='add-task-form__btn cancel' type="button" value="Отмена" onClick={()=>showAddTaskHandler()}/>
				</div>
			</form>
		</>
	);
}

export default AddTaskForm;