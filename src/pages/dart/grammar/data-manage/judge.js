import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'判断数据类型',
	data:[
		{ keyword:'runtimeType', pro:'获取对象数据类型', code:[ {path:'dart/grammar/data-manage/judage/runtimeType'} ]},
		{ keyword:'is', pro:'判断对象数据类型，返回 true', code:[ {path:'dart/grammar/data-manage/judage/is'} ]},
		{ keyword:'is!', pro:'判断对象数据类型，返回 false', code:[ {path:'dart/grammar/data-manage/judage/isNo'} ]},
		{ keyword:'as', pro:'类型转换', code:[ {path:'dart/grammar/data-manage/judage/as'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }