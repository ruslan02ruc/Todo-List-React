import './Badge.scss'

function Badge(props) {
	return (
		<>
			{
				props.badge.color
				? 
          <span onClick={props.onClick} className={`badge ${props.badge.color} ${props.className}`}></span>
				: 
          <span className="material-symbols-outlined">{props.badge.icon}</span>
			}
		</>
	);
}

export default Badge;