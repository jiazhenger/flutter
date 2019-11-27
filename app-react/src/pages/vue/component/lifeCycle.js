import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	data:[
		{ keyword:'beforeCreate( )', pro:'在对象初始化之前执行', code:[ {path:'vue/component/lifeCycle/beforeCreate'} ] },
		{ keyword:'created( )', pro:'在对象创建完成时执行', code:[ {path:'vue/component/lifeCycle/created'} ] },
		{ keyword:'beforeMount( )', pro:'挂载更新前执行' },
		{ keyword:'mounted( )', pro:'被创建时执行' },
		{ keyword:'beforeUpdate( )', pro:'数据更新前执行' },
		{ keyword:'updated( )', pro:'被更新后执行' },
		{ keyword:'beforeDestroy( )', pro:'销毁之前执行' },
		{ keyword:'destroyed( )', pro:'销毁之后' },
		{ keyword:'activated( )', pro:'keep-alive组件激活时调用' },
		{ keyword:'deactivated( )', pro:'keep-alive组件停用时调用' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }