export default [
	{
		title: 'render', 
		children: [
			{ title: '模板渲染', path:'/react/render/render' },
			{ title: '模板插值', path:'/react/render/bind' },
			{ title: '模板样式', path:'/react/render/style' },
			{ title: '模板循环', path:'/react/render/for' },
			{ title: '模板判断', path:'/react/render/if' },
			{ title: '模板事件', path:'/react/render/event' },
		]
	},
	{
		title: 'component', 
		children: [
			{
				title: '有状态组件',
				children: [
					{ title: '创建方式', path:'/react/component/state/create' },
					{ title: '生命周期', path:'/react/component/state/lifeCycle' },
					{ title: 'state', path:'/react/component/state/state' },
					{ title: 'props', path:'/react/component/state/props' },
					{ title: 'ref', path:'/react/component/state/ref' },
				]
			},
			{
				title: '无状态组件',
				children: [
					{ title: '创建方式', path:'/react/component/noState/create' },
					{ title: 'Hook', path:'/react/component/noState/hook' },
					{ title: 'props', path:'/react/component/noState/props' },
					{ title: 'ref', path:'/react/component/noState/ref' },
				]
			},
			{ title: '组件封装', path:'/react/component/packaging' }
		]
	},
	{
		title: 'WrappedComponent', 
		children: [
			{ title: '基本格式', path:'/react/WrappedComponent/base' },
			{ title: '参数传递', path:'/react/WrappedComponent/param' },
		]
	},
	{
		title: 'Router', 
		children: [
			{ title: '路由模式', path:'/react/router/Router' },
			{ title: '路由配置', path:'/react/router/config' },
			{ 
				title: '路由 props',
				children: [
					{ title: 'history', path:'/react/router/props/history' },
					{ title: 'location', path:'/react/router/props/location' },
					{ title: 'match', path:'/react/router/props/match' },
					{ title: 'staticContext', path:'/react/router/props/staticContext' },
				]
			},
		]
	},
	{
		title: 'ReactDOM', 
		children: [
			{ title: '弹窗', path:'/react/ReactDOM/pop' },
		]
	},
	{
		title: 'Hook', 
		children: [
			{ title: '基础 Hook', path:'/react/hook/base' },
		]
	},
	
]