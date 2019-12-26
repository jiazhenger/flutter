import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'模板渲染',
	data:[
		{ pro:'一般渲染，必须用 html 元素包裹', keyword:'( )', code:[ {path:'react/render/template/base'} ]},
		{ pro:'数组渲染，必须设key值', keyword:'[ ]', code:[ {path:'react/render/template/array'} ]},
		{ pro:'无额外节点渲染，可有 key 值', keyword:'<React.Fragment></React.Fragment>', code:[ {path:'react/render/template/fragment'} ]},
		{ pro:'无额外节点渲染简写，不能接受键值或属性', keyword:'<></>', code:[ {path:'react/render/template/fragment-short'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }