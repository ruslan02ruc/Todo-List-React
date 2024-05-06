import './AddFolderForm.scss'
import Badge from '../Badge/Badge.jsx'
import { useState } from 'react';
import { color as badgeColor } from '../../store';

function AddFolderForm({visibleForm, visibleFormHandler, addFolderTaskHandler}) {
	const [badgeId, setBadgeId] = useState(1) // id кружка в форме добавления папки
	const [inputText, setinputText] = useState('') // input Text

	return (
		<>
			<form className={`add-folder-form${visibleForm ? ' active': ''}`} >
				<input className='add-task-form__input' type="text" placeholder='Название папки' value={inputText} onChange={(e)=>setinputText(e.target.value)}/>
				<div className='badge-form'>
					{
						badgeColor.map((item, index) => {
							return <Badge 
                className={badgeId === item.id ? 'active' : ''} 
                badge={item} key={index} 
                onClick={()=>setBadgeId(item.id)}
              />
						})
					}
				</div>
				<input className='add-folder-form__btn' type="button" value="Добавить" onClick={()=>{addFolderTaskHandler(badgeId, inputText), setinputText(''), visibleFormHandler() }} />
				<span className='add-folder-form__close' onClick={visibleFormHandler}>
					<span className='material-symbols-outlined'>close</span>
				</span>
			</form>
		</>
	);
}

export default AddFolderForm;