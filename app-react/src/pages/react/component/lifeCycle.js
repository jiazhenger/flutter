import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'组合的生命周期函数',
	data:[
		{ keyword:'constructor( )', pro:'构造函数', code:[ {path:'react/component/lifeCycle/constructor'} ]},
		{ keyword:'componentDidMount( )', pro:'组件挂载后调用', code:[ {path:'react/component/lifeCycle/componentDidMount'} ]},
		{ keyword:'getDerivedStateFromProps( )', pro:'在初始化和 `update` 时被调用', code:[ {path:'react/component/lifeCycle/getDerivedStateFromProps'} ]},
		{ keyword:'shouldComponentUpdate( )', pro:'判断是否需要更新组件，多用于组件性能优化', code:[ {path:'react/component/lifeCycle/shouldComponentUpdate'} ]},
		{ keyword:'getSnapshotBeforeUpdate( )', pro:'用于获得最新的 DOM 数据', code:[ {path:'react/component/lifeCycle/getSnapshotBeforeUpdate'} ]},
		{ keyword:'componentWillUnmount( )', pro:'组件即将销毁执行', code:[ {path:'react/component/lifeCycle/componentWillUnmount'} ]},
		{ keyword:'componentDidUnMount( )', pro:'组件销毁后调用', code:[ {path:'react/component/lifeCycle/componentDidUnMount'} ]},
		{ keyword:'componentDidUpdate( )', pro:'组件更新后调用', code:[ {path:'react/component/lifeCycle/componentDidUpdate'} ]},
		{ keyword:'render( )', pro:'渲染组件函数', code:[ {path:'react/component/lifeCycle/render'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }