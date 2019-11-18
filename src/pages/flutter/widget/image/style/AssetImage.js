import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'加载asset项目资源中的文件',
	keyword:'AssetImage( )',
	type:'AssetImage',
	data:[
		{ keyword:'assetName', type:'String', pro:'图片地址', isValue:true, code:[ {path:'flutter/widget/image/style/AssetImage/name'} ] },
		{ keyword:'bundle', type:'AssetBundle', pro:'' },
		{ keyword:'package', type:'String', pro:'加载包' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }