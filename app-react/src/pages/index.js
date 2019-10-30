import React from 'react'
// ===================================================================== public component
import FrameComponent from '@cpt/frame.component'
import Data from '@pages/data-index'
//import Router from './router'
// ===================================================================== image
import Logo from '@images/logo-web.png'
import { Menu, Icon } from 'antd'
// ===================================================================== a
const { SubMenu } = Menu
// ===================================================================== component
export default class Index extends React.Component{
	componentDidMount(){
		sessionStorage.removeItem('selectedKeys')
		sessionStorage.removeItem('defaultOpenKeys')
	}
	render(){
		return (
			<FrameComponent title='前端教程' logoWidth='150px' logo={Logo} {...this.props}>
				{
					window.$fn.hasArray(Data) && Data.map((v,i)=>(
						<SubMenu key={i} title={<span><Icon type='appstore' /><span>{v.title}</span></span>} onTitleClick={()=>{this.props.history.push(v.path)}}></SubMenu>
					))
				}
			</FrameComponent>
		)
	}
}