import React from 'react'
import { HashRouter } from 'react-router-dom'
// ===================================================================== router
import AppRouter from './router'
import ToastComponent from '@cpx/toast.component'
//import DataLoadingComponent from '@cpx/data-loading.component'
// ===================================================================== 二级路由
class App extends React.Component{
	render(){
		return (
			<>
				<HashRouter>
					<AppRouter />
				</HashRouter>
				<ToastComponent/>
				{/*<DataLoadingComponent/>*/}
			</>
		)
	}
}
export default App