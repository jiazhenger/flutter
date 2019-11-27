import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'',
	data:[
		{ pro:'npm 环境安装', code:[ {path:'react/install/npm'} ]},
		{ pro:'yarn 环境安装', code:[ {path:'react/install/yarn'} ]},
		{ 
			pro:'重写 webpack 配置', 
			code:[
				{ title:'1、安装依赖包', path:'react/install/overrides/install-dev'},
				{ title:'2、package.json', path:'react/install/overrides/package'},
				{ title:'3、在项目根目录新建文件 config-overrides.js', path:'react/install/overrides/config-overrides'}
			]
		},
		{ pro:'打包配置', code:[ { title:'package.json', path:'react/install/build/package' } ]},
		{ pro:'学习地址', code:[ { path:'react/install/link' } ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }