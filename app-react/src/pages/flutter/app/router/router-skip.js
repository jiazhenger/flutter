import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由跳转',
	data:[
		{ keyword:'pushNamed( )', pro:'一般跳转, 可返回, 并获取返回参数', code:[ {path:'flutter/app/router/router-skip/router-pushNamed'} ], url:'router-pushNamed' },
		{ keyword:'pushReplacementNamed( )', pro:'清除历史记录, 不可返回', 
			code:[
				{path:'flutter/app/router/router-skip/router-push'},
				{title:'声明参数',path:'flutter/app/router/router-skip/router-param'},
				{title:'router-dart.dart 使用参数',path:'flutter/app/router/router-skip/router-param-use'}
			], 
			url:'router-push'
		},
		{ keyword:'push(MaterialPageRoute(builder: (BuildContext context){ })', pro:'跳转并传参数到新页面, 可返回, 并获取返回参数', code:[ {path:'flutter/app/router/router-skip/router-pushNamed'} ], url:'router-pushNamed' },
		{ keyword:'pop( )', pro:'返回上一个页面', code:[ {path:'flutter/app/router/router-skip/router-pop'} ], url:'router-pop' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }