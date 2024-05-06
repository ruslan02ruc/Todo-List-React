import AddFolderForm from '../../Components/AddFolderForm/AddFolderForm';
import Task from '../../Components/Task/Task';
import './TaskFolders.scss'


function TaskFolders({props, removeFolderHandler, addFolderTaskHandler, visibleForm}) {
	const visibleFormHandler = () => {
		visibleForm.setVisibleForm(!visibleForm.visibleForm)
	}
	
	let listStateFilter = props.listState.map((item, index) => {
		item.id === props.folderId ? item.active = true : item.active = false
		return item
	})

	return (
		<div className='task-folders'>
			<div className='tasks'>

				{
					props.listState.length !== 0 && (
						<Task 
							onClick={()=> props.useFolderId('all')} 
							className='task' 
							item={{
								icon: 'list', 
								name: 'Все задачи', 
								active: props.folderId === 'all' ? true : false
							}} 
							key={'f1'}
						/>
					)
				}
				{
					listStateFilter.map((item, index) => {
						return (
							<Task 
								onClick={()=>props.useFolderId(item.id)}
								removeFolderHandler={()=>removeFolderHandler(item.id)}
								className='task' 
								item={item} 
								key={index} 
							/>
						)
					})
				}
				<Task 
					className='task grey' 
					item={{
						icon: 'add',
						name: 'Добавить папку'
					}} 
					key={'f2'} 
					onClick={visibleFormHandler}
				/>
			</div>
			<AddFolderForm 
				visibleForm={visibleForm.visibleForm} 
				visibleFormHandler={visibleFormHandler}
				addFolderTaskHandler={addFolderTaskHandler}
			/>
		
    </div>
	);
}

export default TaskFolders;

