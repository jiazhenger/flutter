import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Stream',
	isGroup:true,
	data:[
		{ title:'空', keyword:'Stream.empty( )', type:'Stream' },
		{
			title:'', keyword:'Stream.fromIterable( )',type:'Stream',
			data:[
				{ keyword:'elements', type:'Iterable<T> ', pro:'任意可迭代的数据类型', isValue:true },
			]
		},
		{
			title:'错误', keyword:'Stream.error( )',type:'Stream',
			data:[
				{ keyword:'error', type:'Object', pro:'任意 dart 数据类型', isValue:true },
				{ keyword:'stackTrace', type:'StackTrace', pro:'', isValue:true, link:'/flutter/style/StackTrace' },
			]
		},
		{
			title:'', keyword:'Stream.castFrom( )',type:'Stream',
			data:[
				{ keyword:'source', type:'Stream<S>', pro:'', isValue:true },
			]
		},
		{
			title:'', keyword:'Stream.eventTransformed( )',type:'Stream',
			data:[
				{ keyword:'source', type:'Stream<dynamic>', pro:'', isValue:true },
				{ keyword:'mapSink', type:'EventSink<dynamic> Function(EventSink<T>)', pro:'', isValue:true},
			]
		},
		{
			title:'', keyword:'Stream.fromFuture( )',type:'Stream',
			data:[
				{ keyword:'future', type:'Future<T>', pro:'单个 Future', isValue:true, link:'/flutter/style/Future' },
			]
		},
		{
			title:'', keyword:'Stream.fromFutures( )',type:'Stream',
			data:[
				{ keyword:'future', type:'Iterable<Future<T>>', pro:'多个 Future 组成的列表', isValue:true, link:'/flutter/style/Future' },
			]
		},
		{
			title:'', keyword:'Stream.value( )',type:'Stream',
			data:[
				{ keyword:'value', type:'T', pro:'任意数据类型', isValue:true, link:'/flutter/style/Future' },
			]
		},
		{
			title:'', keyword:'Stream.periodic( )',type:'Stream',
			data:[
				{ keyword:'period', type:'Duration', pro:'一段时间', isValue:true, link:'/flutter/time/Duration' },
				{ keyword:'computation', type:'T Function( int )', pro:'计算，返回任意数据类型', isValue:true },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }