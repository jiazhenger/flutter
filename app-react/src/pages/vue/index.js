import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	data:[
		{ pro:'环境安装', code:[ {path:'vue/install/npm'} ]},
		{ pro:'打包优化', code:[ { path:'vue/install/pack' } ]},
		{ pro:'学习地址', code:[ { path:'vue/install/link' } ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }