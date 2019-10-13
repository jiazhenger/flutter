import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CodeComponent from '@cpt/code.component'
// ===================================================================== component
export default class Index extends React.Component{
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent title='Dart sdk 安装' show={true}>
					<h2 className='sub-title pb10'>Windows: </h2>
					<CodeComponent type='text' url='dart/install/windows-dart' />
				</BoxComponent>
			</UbContent>
		)
	}
}
