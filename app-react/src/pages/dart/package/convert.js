import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'json 包',
	data:[
		{ keyword:'jsonEncode( )', pro:'将数据转为 json 字符串', code:[ {path:'dart/package/convert/jsonEncode'} ]},
		{ keyword:'jsonDecode( )', pro:'字符串转换为 json 对象', code:[ {path:'dart/package/convert/jsonDecode'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }