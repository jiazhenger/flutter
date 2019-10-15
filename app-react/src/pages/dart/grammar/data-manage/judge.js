import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'判断数据类型',
	data:[
		{ keyword:'is', pro:'判断对象是否是指定数据类型', code:[ {path:'dart/grammar/data-manage/judage/is'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }