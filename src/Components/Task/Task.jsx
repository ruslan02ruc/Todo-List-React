import Badge from '../Badge/Badge';
import './Task.scss'

function Task(props) {
	return <>
		<p className={`${props.className}${props.item.active ? ' active' : ''}`} onClick={props.onClick}>
			<Badge badge={props.item}/>
			<span className={`${props.item.done ? 'done' : ''}`}>{props.item.name}</span>
			{
				props.item.active && <button className='close-folder' onClick={props.removeFolderHandler}><span className="material-symbols-outlined">close</span></button>
			}
		</p>
	</>;
}

export default Task;