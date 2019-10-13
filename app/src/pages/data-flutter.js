export default [
	{ 
		title: 'app 总配置',
		children: [
			{ title: 'MaterialApp()', path:'/flutter/app/MaterialApp' },
			{ 
				title: 'routes: 路由',
				children: [
					{ title: '挂载路由', path:'/flutter/app/router/base-router' },
					{ title: '路由跳转', path:'/flutter/app/router/router-skip' }
				]
			},
			{ title: 'theme: 主题', path:'/flutter/app/theme' },
		]
	},
	{ 
		title: '样式',
		children: [
			{ title: '颜色', path:'/flutter/style/color' },
			{ title: '文本样式', path:'/flutter/style/text' },
			{ title: 'padding/margin' },
			{ title: '对齐方式' },
			{ title: '边框样式' },
			{ title: '圆角' },
			{ title: '阴影' },
			{ 
				title: '渐变',
				children:[
					{ title: '线性渐变' },
					{ title: '扫描式渐变' },
					{ title: '环形渲染' },
				]
			},
		]
	},
	{ 
		title: '布局  Widget',
		children:[
			{ 
				title: 'child:widget',
				children: [
					{ title: 'Container()' },
					{ title: 'Padding()' },
					{ title: 'Center()' },
					{ title: 'Align()' },
					{ title: 'FittedBox()' },
					{ title: 'AspectRatio()' },
					{ title: 'ConstrainedBox()' },
					{ title: 'Baseline()' },
					{ title: 'FractionallySizedBox()' },
					{ title: 'IntrinsicHeight()' },
					{ title: 'IntrinsicWidth()' },
					{ title: 'LimitedBox()' },
					{ title: 'Offstage()' },
					{ title: 'OverflowBox()' },
					{ title: 'SizedBox()' },
					{ title: 'SizedOverflowBox()' },
					{ title: 'Transform()' },
					{ title: 'CustomSingleChildLayout()' },
				]
			},
			{ 
				title: 'children:<Widget>[]',
				children: [
					{ title: 'Row' },
					{ title: 'Column' },
					{ title: 'Stack' },
					{ title: 'IndexedStack' },
					{ title: 'Flow' },
					{ title: 'Wrap' },
					{ title: 'Flow' },
					{ title: 'ListBody' },
					{ title: 'ListView' },
					{ title: 'CustomMultiChildLayout' },
				]
			},
		]
	},
	{
		title: '文本 widget',
		children:[
			{ title: 'Text()' },
			{ title: 'Text.rich()' },
			{ title: 'RichText()' },
			{ title: 'TextSpan()' },
			{ title: 'Baseline()' },
		]
	},
	{
		title: '表格',
		children:[
			{ title: 'Table' },
			{ title: 'TableRow' },
			{ title: 'TableCell' },
		]
	},
	{
		title: '表单',
		children:[
			{ title: 'Form' },
			{ title: 'TextFormField' },
			{ title: 'TextField' },
		]
	},
	{ 
		title: 'http',
		children: [
			{ title: 'HttpClient()', path:'/flutter/http/http-client' },
		]
	},
]
