import React from 'react'
import ReactDOM from 'react-dom'
// ===================================================================== toast
export default class index extends React.Component{
	
	componentDidMount(){
		if(!this.props.isUpdate){ this.renderSubtree() }
	}
	
	componentDidUpdate(){
		if(this.props.isUpdate){ this.renderSubtree() }
	}
	
	componentWillUnmount(){
		this.popNode && document.body.removeChild(this.popNode)
	}
	
	renderSubtree = () => {
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			this.retContent(),
			this.retContainer(),
		)
	}
	
	retContainer = () =>{
		if(!this.popNode){
			const popNode = document.createElement('div')
			popNode.setAttribute(this.props.name,new Date().getTime())
			this.popNode = popNode
			document.body.appendChild(this.popNode)
		}
		return this.popNode
	}
	
	retContent = () => {
		return <>{this.props.children}</>
	}
	
	render(){
		return null
	}
}