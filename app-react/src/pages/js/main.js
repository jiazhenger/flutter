import React from 'react'
// ===================================================================== public component
import FrameComponent from '@cpt/frame.component'
import Data from '@pages/data-js'
import Router from './router'
// ===================================================================== image
import Logo from '@images/logo-js.png'
// ===================================================================== component
export default class Index extends React.Component{
	render(){
		return <FrameComponent title='JavaScript 教程' logo={Logo} logoWidth='45px' data={Data} Router={Router} {...this.props} />
	}
}