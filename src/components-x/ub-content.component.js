/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== 
export default class UbContent extends React.Component{
	componentDidMount(){
		document.querySelector('.ub-content').addEventListener('touchmove',e=>e.stopPropagation())
	}
	
	render(){
		const { id, className, style, children, onClick, scrollY, scrollX, scrollXY } = this.props
		return (
			<div id={id} className={`ub-content ${scrollY===false?'':'oys'} ${scrollX?'oxs':''} ${scrollXY?'oxys':''} ${className ? className:''}`} style={style} onClick={onClick}>
				{children}
			</div>
		)
	}
}