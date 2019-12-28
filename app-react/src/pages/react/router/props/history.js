import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'history',
	data:[
		{ deviceTitle:'路由跳转',keyword:"push('/pathname/10?id=10',{ id:10 })", pro:'一般跳转',  code:[ {path:'react/router/props/push'} ]},
		{ keyword:"replace('/pathname/10?id=10',{ id:10 })", pro:'无历史跳转',  code:[ {path:'react/router/props/replace'} ]},
		{ keyword:'goForward( )', pro:'前进',  code:[ {path:'react/router/props/goForward'} ]},
		{ keyword:'goBack( )', pro:'后退',  code:[ {path:'react/router/props/goBack'} ]},
		{ keyword:'go(n)', pro:'前进或后退',  code:[ {path:'react/router/props/go'} ]},
		
		{ deviceTitle:'路由监听', keyword:'listen( location, action )', pro:'路由监听',  code:[ {path:'react/router/props/listen'} ]},
		{ keyword:'block( location, action )', pro:'路由监听',  code:[ {path:'react/router/props/listen'} ]},
		
		{ deviceTitle:'创建路由', keyword:"createHref( { pathname:'', search:'', hash:'', state:'' } )", pro:'创建一个路由字符串',  code:[ {path:'react/router/props/createHref'} ]},
		
		
		{ deviceTitle:'获取路由信息', keyword:'action', pro:'获取路由跳转动作',  code:[ {path:'react/router/props/action'} ]},
		{ keyword:'location', pro:'获取路由location',  code:[ {path:'react/router/props/location'} ]},
		{ keyword:'length', pro:'获取路由长度' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }