import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'路由模式',
	data:[
		{ keyword:'< Router >', pro:'所有路由器组件的通用底层接口',  code:[ {path:'react/router/Router/Router'} ]},
		{ keyword:'< BrowserRouter >', pro:'h5 路由',  code:[ {path:'react/router/Router/BrowserRouter'} ]},
		{ keyword:'< HashRouter >', pro:'hash 路由', code:[ {path:'react/router/Router/HashRouter'} ]},
		{ keyword:'< MemoryRouter >',pro:'将历史记录保存在内存中，不读写地址栏，在测试和非浏览器环境中非常有用', code:[ {path:'react/router/Router/MemoryRouter'} ]},
		{ keyword:'< StaticRouter >', pro:'静态路由，即一个从不改变位置的路由', code:[ {path:'react/router/Router/StaticRouter'} ]},
		{ keyword:'< NativeRouter >', pro:'react-native 路由'},
		
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }