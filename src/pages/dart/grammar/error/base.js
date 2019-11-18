import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'错误处理',
	data:[
		{ keyword:'throw', pro:'抛出异常', code:[ {path:'dart/grammar/error/throw'} ]},
		{ keyword:'try/catch', pro:'监听并处理异常', code:[ {path:'dart/grammar/error/try'} ]},
		{ keyword:'rethrow', pro:'允许嵌套抛出异常', code:[ {path:'dart/grammar/error/rethrow'} ]},
		{ keyword:'finally', pro:'有无异常都最后执行', code:[ {path:'dart/grammar/error/finally'} ]},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }