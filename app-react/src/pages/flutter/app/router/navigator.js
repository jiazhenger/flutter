import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由监听信息', 
	keyword:'Route.navigator.x', 
	type:'NavigatorState',
	data:[
		{ keyword:'userGestureInProgress', type:'bool',  pro:'' },
		{ keyword:'mounted', type:'bool',  pro:'' },
		
		{ deviceTitle:'更多', keyword:'widget', type:'Navigator',  pro:'获取控件' },
		{ keyword:'context', type:'BuildContext',  pro:'获取上下文' },
		{ keyword:'focusScopeNode', type:'FocusScopeNode',  pro:'' },
		{ keyword:'overlay', type:'OverlayState',  pro:'' },
		
		
		{ deviceTitle:'路由跳转', keyword:'pushNamed( )', type:'Future<Object> Function(String routeName, {arguments: Object})',  pro:'路由跳转 => pushNamed( )', link:'/flutter/app/router/router-skip' },
		{ keyword:'push( )', type:'Future<dynamic> Function( Route<dynamic> route )',  pro:'路由跳转 => push( )', link:'/flutter/app/router/router-skip' },
		{ keyword:'canPop( )', type:'bool',  pro:'是否可以返回' },
		{ keyword:'pop( )', type:'bool Function( [Object result] )',  pro:'路由跳转 => pop( )', link:'/flutter/app/router/router-skip' },
		{ keyword:'popAndPushNamed( )', type:'Future<Object> Function( String routeName, {result: Object, arguments: Object} )',  pro:''},
		{ keyword:'popUntil( )', type:'void Function( bool Function(Route<dynamic> predicate) )',  pro:''},
		{ keyword:'pushAndRemoveUntil( )', type:'Future<Object> Function( Route<Object> newRoute, bool Function(Route<dynamic>) predicate )',  pro:''},
		{ keyword:'pushNamedAndRemoveUntil( )', type:'Future<Object> Function( String newRouteName, bool Function(Route<dynamic>) predicate, {arguments: Object} )',  pro:''},
		{ keyword:'pushReplacement( )', type:'Future<Object> Function( Route<Object> newRoute, {result: Object} )',  pro:''},
		{ keyword:'pushReplacementNamed( )', type:'Future<Object> Function( String routeName, {result: Object, arguments: Object} )',  pro:''},
		
		{ deviceTitle:'方法', keyword:'dispose( )', type:'void Function( )',  pro:'清除' },
		{ keyword:'deactivate( )', type:'void Function( )',  pro:'在打开新的 widget、回到当前 widget 时会执行' },
		{ keyword:'build( )', type:'Widget Function(BuildContext context)',  pro:'创建上下文控件' },
		{ keyword:'createTicker( )', type:'Ticker Function(void Function( Duration ) onTick)',  pro:'创建时计器' },
		{ keyword:'didChangeDependencies( )', type:'void Function( )',  pro:'' },
		{ keyword:'didStartUserGesture( )', type:'void Function( )',  pro:'' },
		{ keyword:'didStopUserGesture( )', type:'void Function( )',  pro:'' },
		{ keyword:'didUpdateWidget( )', type:'void Function( Navigator oldWidget )',  pro:'' },
		{ keyword:'finalizeRoute( )', type:'void Function( Route<dynamic> route )',  pro:'' },
		{ keyword:'initState( )', type:'void Function( )',  pro:'' },
		{ keyword:'maybePop( )', type:'Future<bool> Function( [Object result] )',  pro:'' },
		{ keyword:'reassemble( )', type:'void Function( )',  pro:'' },
		{ keyword:'removeRoute( )', type:'void Function( Route<dynamic> route )',  pro:'移除路由' },
		{ keyword:'removeRouteBelow( )', type:'void Function( Route<dynamic> anchorRoute )',  pro:'' },
		{ keyword:'replace( )', type:'void Function( {oldRoute: Route<dynamic>, newRoute: Route<Object>} )',  pro:'' },
		{ keyword:'replaceRouteBelow( )', type:'void Function( {anchorRoute: Route<dynamic>, newRoute: Route<Object>} )',  pro:'' },
		{ keyword:'setState( )', type:'void Function( void Function( ) )',  pro:'改变数据' },
		{ keyword:'toDiagnosticsNode( )', type:'DiagnosticsNode Function({name: String, style: DiagnosticsTreeStyle})',  pro:'' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }