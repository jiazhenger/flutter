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
			{ title: '支撑', path:'/flutter/style/StrutStyle' },
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
			{ title: 'Clip', path:'/flutter/style/Clip' },
			{ title: 'BoxConstraints', path:'/flutter/style/BoxConstraints' },
		]
	},
	{
		title: '文本 Widget',
		children:[
			{ title: 'Text( )', path:'/flutter/text/Text' },
			{ title: 'Text.rich( )', path:'/flutter/text/TextRich' },
			{ title: 'RichText( )', path:'/flutter/text/RichText' },
			{ title: 'Baseline( )', path:'/flutter/text/Baseline' },
			{ 
				title: 'style',
				children: [
					{ title: 'TextSpan( )', path:'/flutter/text/TextSpan' },
				]
			},
		]
	},
	{
		title: '按钮 Widget',
		children:[
			{ title: 'MaterialButton( )', path:'/flutter/button/MaterialButton' },
			{ 
				title: 'style',
				children: [
					{ title: 'TextSpan( )', path:'/flutter/text/TextSpan' },
				]
			},
		]
	},
	{ 
		title: '图片 Widget',
		children: [
			{ 
				title: 'Image Widget',
				children: [
					{ title: 'Image( )', path:'/flutter/image/Image' },
					{ title: 'Image.asset( )', path:'/flutter/image/ImageAsset' },
					{ title: 'Image.network( )', path:'/flutter/image/ImageNetwork' },
					{ title: 'Image.file( )', path:'/flutter/image/ImageFile' },
					{ title: 'Image.memory( )', path:'/flutter/image/ImageMemory' },
				]
			},
			{ 
				title: 'FadeInImage Widget',
				children: [
					{ title: 'FadeInImage( )', path:'/flutter/image/FadeInImage' },
					{ title: 'FadeInImage.assetNetwork( )', path:'/flutter/image/FadeInImageAssetNetwork' },
					{ title: 'FadeInImage.memoryNetwork( )', path:'/flutter/image/FadeInImageMemoryNetwork' },
				]
			},
			{ 
				title: 'style',
				children: [
					{ title: 'DecorationImage( )', path:'/flutter/image/DecorationImage' },
					{ title: 'AssetImage( )', path:'/flutter/image/AssetImage' },
					{ title: 'NetworkImage( )', path:'/flutter/image/NetworkImage' },
					{ title: 'BoxFit', path:'/flutter/image/BoxFit' },
					{ title: 'ImageRepeat', path:'/flutter/image/ImageRepeat' },
					{ title: 'BlendMode', path:'/flutter/image/BlendMode' },
					{ title: 'ColorFilter', path:'/flutter/image/ColorFilter' },
					{ title: 'FilterQuality', path:'/flutter/image/FilterQuality' },
				]
			},
		]
	},
	{
		title: '形状 Widget',
		children:[
			{ title: 'CircleAvatar( )', path:'/flutter/circle/CircleAvatar' },
			{ title: 'ClipOval( )', path:'/flutter/circle/ClipOval' },
			{ title: 'ClipRRect( )', path:'/flutter/circle/ClipRRect' },
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
		title: '表格 Widget',
		children:[
			{ title: 'Table' },
			{ title: 'TableRow' },
			{ title: 'TableCell' },
		]
	},
	{
		title: '表单 Widget',
		children:[
			{ title: 'Form' },
			{ title: 'TextFormField' },
			{ title: 'TextField' },
		]
	},
	{
		title: '时间',
		children:[
			{ title: 'Duration( )',  path:'/flutter/time/Duration' },
		]
	},
	{
		title: '事件',
		children:[
			{ title: 'TapGestureRecognizer( )',  path:'/flutter/event/TapGestureRecognizer' },
			{ title: 'FocusNode( )',  path:'/flutter/event/FocusNode' },
		]
	},
	{
		title: '动画',
		children:[
			{ 
				title: 'x',
				children: [
					{ title: 'Curves.x', path:'/flutter/animation/Curves' },
				]
			},
		]
	},
	{ 
		title: 'http',
		children: [
			{ title: 'HttpClient()', path:'/flutter/http/http-client' },
		]
	},
]
