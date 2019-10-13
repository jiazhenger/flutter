import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
export default class Index extends React.Component{
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='Flutter sdk 安装' code={[ {title:'Windows',path:'flutter/install/windows-flutter'} ]} />
				<BoxComponent pro='flutter 项目创建' code={[ {title:'Android',path:'flutter/install/windows-flutter-project'},{title:'pubspec.yaml 依赖配置', path:'flutter/install/pubspec-yaml'} ]} />
				<BoxComponent pro='flutter 项目打包' code={[ {title:'Android',path:'flutter/install/windows-flutter-build'} ]} />
				<BoxComponent pro='flutter 命令' code={[ {path:'flutter/install/flutter-order'} ]} />
				<BoxComponent pro='flutter web 安装' code={[ {path:'flutter/install/flutter-web'} ]} />
			</UbContent>
		)
	}
}
