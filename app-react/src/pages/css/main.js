import React from 'react'
// ===================================================================== public component
import FrameComponent from '@cpt/frame.component'
import Data from '@pages/data-css'
import Router from './router'
// ===================================================================== image
import Logo from '@images/logo-css.png'
// ===================================================================== component
export default class Index extends React.Component{
	render(){
		return <FrameComponent title='Css 教程' logo={Logo} logoWidth='75px' data={Data} Router={Router} {...this.props} />
	}
}
