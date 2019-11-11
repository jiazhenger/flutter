import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	keyword:'生命周期',
	data:[
		{ keyword:'构造函数', type:'void Function( )', pro:'只执行一次', code:[{path:'flutter/com/life/Page'}] },
		{ keyword:'initState( )', type:'void Function( )', pro:'初始化时执行', code:[{path:'flutter/com/life/initState'}] },
		{ keyword:'didChangeDependencies( )', type:'void Function( )', pro:'在初始化 initState 后执行', code:[{path:'flutter/com/life/didChangeDependencies'}] },
		{ keyword:'didUpdateWidget( )', type:'void Function( value )', pro:'上级组件状态发生变化时会触发子 widget 执行 didUpdateWidget', code:[{path:'flutter/com/life/didUpdateWidget'}] },
		{ keyword:'deactivate( )', type:'void Function( )', pro:'在打开新的 widget 或回到当前 widget 时会执行', code:[{path:'flutter/com/life/deactivate'}] },
		{ keyword:'reassemble( )', type:'void Function( )', pro:'点击闪电会执行', code:[{path:'flutter/com/life/reassemble'}] },
		{ keyword:'dispose( )', type:'void Function( )', pro:'卸载、销毁 widget 时执行', code:[{path:'flutter/com/life/dispose'}] },
		{ keyword:'didChangeAppLifecycleState( )', type:'void Function(AppLifecycleState state)', pro:'监听生命周期', code:[{path:'flutter/com/life/didChangeAppLifecycleState'}] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }