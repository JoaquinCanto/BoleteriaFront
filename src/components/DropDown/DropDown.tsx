import { Link } from 'react-router-dom'
import { useState } from "react"
import './DropDown.css'

export default function DropDown({classname, text, img, imgClass, options}:{classname:string, text:string, img:string, imgClass:string, options:string[]}) {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<>
			<button 
				className={classname}
				onClick={() => setIsExpanded(!isExpanded)}>
				{text}
				<img className={imgClass} src={img}></img>
			</button>
			{isExpanded && 
			<div 
				className="panel"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{options.map(option => (
					<span className="option" key={option}><Link to={option}>{option}</Link></span>
				))}
			</div>
			}
		</>
	)
}
