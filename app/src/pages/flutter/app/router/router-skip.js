import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('路由跳转')
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='pushNamed( )' pro='一般跳转, 可返回, 并获取返回参数' code={[ {path:'flutter/app/router/router-skip/router-pushNamed'} ]} url='router-pushNamed' />
				<BoxComponent keyword='pushReplacementNamed( )' pro='清除历史记录, 不可返回' code={[ {path:'flutter/app/router/router-skip/router-pushReplacementNamed'} ]} url='router-pushReplacementNamed' />
				
				<BoxComponent keyword='push(MaterialPageRoute(builder: (BuildContext context){ })' pro='跳转并传参数到新页面, 可返回, 并获取返回参数' code={[
					{path:'flutter/app/router/router-skip/router-push'},
					{title:'声明参数',path:'flutter/app/router/router-skip/router-param'},
					{title:'router-dart.dart 使用参数',path:'flutter/app/router/router-skip/router-param-use'}
				]} url='router-push' />
				
				<BoxComponent keyword='pop()' pro='返回上一个页面' code={[ {path:'flutter/app/router/router-skip/router-pop'} ]} url='router-pop' />
			</UbContent>
		)
	}
}
