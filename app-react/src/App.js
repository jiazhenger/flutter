import React from 'react'
import { HashRouter } from 'react-router-dom'
// ===================================================================== router
import AppRouter from './router'
import ToastComponent from '@cpx/toast.component'
import DataLoadingComponent from '@cpx/data-loading.component'
// ===================================================================== 路由
export default () => (
	<>
		<HashRouter>
			<AppRouter/>
		</HashRouter>
		<ToastComponent/>
		<DataLoadingComponent/>
	</>
)
