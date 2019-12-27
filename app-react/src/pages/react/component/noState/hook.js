import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Hook',
	data:[
		{ keyword:'useState( )', pro:'声明一个 state 变量与 this.setState( ) 类似', code:[ {path:'react/hook/useState'} ]},
		{ keyword:'useEffect( )', pro:'函数组件增加了操作副作用的能力, 与生命周期函数类似', code:[ {path:'react/hook/useEffect'} ]},
		{ keyword:'useCallback( )', pro:'把匿名回调“存”起来', code:[ {path:'react/hook/useCallback'} ]},
		{ keyword:'useRef( )', pro:'获取元素上的 dom 对象或 props 对象', code:[ {path:'react/hook/useRef'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }