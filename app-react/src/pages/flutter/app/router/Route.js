import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由监听信息', 
	keyword:'Route.x', 
	type:'Route',
	data:[
		{ keyword:'currentResult', type:'dynamic',  pro:'获取返回内容' },
		{ deviceTitle:'判断', keyword:'isCurrent', type:'bool',  pro:'是否是初始始路由' },
		{ keyword:'isActive', type:'bool',  pro:'是否是活动路由' },
		{ keyword:'isFirst', type:'bool',  pro:'是否是入口路由' },
		{ keyword:'willHandlePopInternally', type:'bool',  pro:'' },
		
		{ deviceTitle:'更多', keyword:'settings', type:'RouteSettings',  pro:'获取路由相关内容', link:'/flutter/app/router/settings' },
		{ keyword:'navigator', type:'NavigatorState',  pro:'导航状态', link:'/flutter/app/router/navigator' },
		{ keyword:'navigator', type:'List<OverlayEntry>',  pro:'', link:'/flutter/app/router/overlayEntries' },
		{ keyword:'popped', type:'Future<dynamic>',  pro:'', link:'/flutter/app/router/popped' },
		
		{ deviceTitle:'方法', keyword:'changedExternalState( )', type:'void Function( )',  pro:'' },
		{ keyword:'changedInternalState( )', type:'void Function( )',  pro:'' },
		{ keyword:'dispose( )', type:'void Function( )',  pro:'清除' },
		{ keyword:'didChangeNext( )', type:'void Function( Route<dynamic> nextRoute )',  pro:'' },
		{ keyword:'didChangePrevious( )', type:'void Function( Route<dynamic> previousRoute )',  pro:'' },
		{ keyword:'didComplete( )', type:'void Function( dynamic result )',  pro:'' },
		{ keyword:'didPop( )', type:'void Function( dynamic result )',  pro:'' },
		{ keyword:'didPopNext( )', type:'void Function( Route<dynamic> nextRoute )',  pro:'' },
		{ keyword:'didPush( )', type:'void Function( )',  pro:'' },
		{ keyword:'didReplace( )', type:'void Function( Route<dynamic> oldRoute )',  pro:'' },
		{ keyword:'didPopNext( )', type:'void Function( Route<dynamic> nextRoute )',  pro:'' },
		{ keyword:'install( )', type:'void Function( OverlayEntry insertionPoint )',  pro:'' },
		{ keyword:'willPop( )', type:'Future<RoutePopDisposition> Function()',  pro:'' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }