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