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
			{ title: '颜色', path:'/flutter/style/Colors' },
			{ title: '文本', path:'/flutter/style/TextStyle' },
			{ 
				title: '偏移',
				children:[
					{ title: 'EdgeInsets', path:'/flutter/style/offset/EdgeInsets' },
					{ title: 'Offset', path:'/flutter/style/offset/Offset' },
				]
			},
			{ 
				title: '对齐',
				children:[
					{ title: 'Alignment', path:'/flutter/style/align/Alignment' },
					{ title: 'FractionalOffset', path:'/flutter/style/align/FractionalOffset' },
				]
			},
			{ 
				title: '边框',
				children:[
					{ title: 'BorderSide', path:'/flutter/style/border/BorderSide' },
					{ title: 'Border', path:'/flutter/style/border/Border' },
				]
			},
			{ 
				title: '圆角',
				children:[
					{ title: 'Radius', path:'/flutter/style/borderRadius/Radius' },
					{ title: 'BorderRadius( )', path:'/flutter/style/borderRadius/BorderRadius' },
				]
			},
			{ 
				title: '阴影',
				children:[
					{ title: 'Shadow( )', path:'/flutter/style/shadow/Shadow' },
					{ title: 'BoxShadow( )', path:'/flutter/style/shadow/BoxShadow' },
				]
			},
			{ 
				title: '渐变',
				children:[
					{ title: 'LinearGradient( )', path:'/flutter/style/gradient/LinearGradient' },
					{ title: 'RadialGradient( )', path:'/flutter/style/gradient/RadialGradient' },
					{ title: 'SweepGradient( )', path:'/flutter/style/gradient/SweepGradient' },
				]
			},
			{ 
				title: '形状',
				children:[
					{ title: 'BeveledRectangleBorder( )', path:'/flutter/style/shape/BeveledRectangleBorder' },
					{ title: 'CircleBorder( )', path:'/flutter/style/shape/CircleBorder' },
					{ title: 'RoundedRectangleBorder( )', path:'/flutter/style/shape/RoundedRectangleBorder' },
					{ title: 'StadiumBorder( )', path:'/flutter/style/shape/StadiumBorder' },
					{ title: 'UnderlineInputBorder( )', path:'/flutter/style/shape/UnderlineInputBorder' },
				]
			},
			{ 
				title: '装饰',
				children:[
					{ title: 'BoxDecoration( )', path:'/flutter/style/decoration/BoxDecoration' },
					{ title: 'ShapeDecoration( )', path:'/flutter/style/decoration/ShapeDecoration' },
					{ title: 'UnderlineTabIndicator( )', path:'/flutter/style/decoration/UnderlineTabIndicator' },
				]
			},
			{ title: 'Rect', path:'/flutter/style/Rect' },
			{ title: 'Size', path:'/flutter/style/Size' },
		]
	},
	{ 
		title: '图片',
		children: [
			{ 
				title: 'widget',
				children: [
					{ title:'Image', path:'/flutter/image/Image' },
				]
			},
			
			{ 
				title: 'style',
				children: [
					{ title: 'DecorationImage( )', path:'/flutter/image/DecorationImage' },
					{ title:'BoxFit', path:'/flutter/image/BoxFit' },
					{ title:'ImageRepeat', path:'/flutter/image/ImageRepeat' },
					{ title:'BlendMode', path:'/flutter/image/BlendMode' },
					{ title:'ColorFilter', path:'/flutter/image/ColorFilter' },
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
