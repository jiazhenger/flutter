import React from 'react'
// ===================================================================== public component
import FrameComponent from '@cpt/frame.component'
import Data from '@pages/data-dart'
import Router from './router'
// ===================================================================== image
import Logo from '@images/logo-dart.png'
// ===================================================================== component
export default class Index extends React.Component{
	render(){
		return <FrameComponent title='Dart 教程' logo={Logo} logoWidth='75px' data={Data} Router={Router} {...this.props} />
	}
}
