export default [
	{ 
		title: '公共',
		children: [
			{ title: 'Widget 状态', path:'/flutter/com/widget-state' },
			{ title: '生命周期', path:'/flutter/com/life' },
			{ title: 'key', path:'/flutter/com/key' },
		]
	},
	{
		title: '入口',
		children: [
			{ title: 'MaterialApp( )', path:'/flutter/app/MaterialApp' },
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
					{ title: 'AlignmentDirectional', path:'/flutter/style/align/AlignmentDirectional' },
				]
			},
			{ 
				title: '边框',
				children:[
					{ title: 'BorderSide', path:'/flutter/style/border/BorderSide' },
					{ title: 'Border', path:'/flutter/style/border/Border' },
					{ title: 'OutlineInputBorder( )', path:'/flutter/style/border/OutlineInputBorder' },
					{ title: 'UnderlineInputBorder( )', path:'/flutter/style/border/UnderlineInputBorder' },
					{ title: 'TableBorder( )', path:'/flutter/style/border/TableBorder' },
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
					{ title: 'InputDecoration( )', path:'/flutter/style/decoration/InputDecoration' },
				]
			},
			{ 
				title: 'Matrix4 矩阵',
				children:[
					{ title: '旋转', path:'/flutter/style/rotation' },
					{ title: '缩放', path:'/flutter/style/scale' },
					{ title: '位移', path:'/flutter/style/translation' },
					{ title: '扭曲', path:'/flutter/style/skew' },
					{ title: 'solve', path:'/flutter/style/solve' },
					{ title: '其它', path:'/flutter/style/other' },
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
			{ title: 'RaisedButton( )', path:'/flutter/button/RaisedButton' },
			{ title: 'FlatButton( )', path:'/flutter/button/FlatButton' },
			{ title: 'OutlineButton( )', path:'/flutter/button/OutlineButton' },
			{ title: 'FloatingActionButton( )', path:'/flutter/button/FloatingActionButton' },
			{ title: 'DropdownButton( )', path:'/flutter/button/DropdownButton' },
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
		title: 'Icon Widget',
		children:[
			{ title: 'Icon( )', path:'/flutter/icon/Icon' },
			{ title: 'ImageIcon( )', path:'/flutter/icon/ImageIcon' },
			{ title: 'IconButton( )', path:'/flutter/icon/IconButton' },
		]
	},
	{
		title: '表格 Widget',
		children:[
			{ title: 'Table', path:'/flutter/table/Table' },
			{ title: 'TableRow', path:'/flutter/table/TableRow' },
			{ title: 'TableCell', path:'/flutter/table/TableCell' },
			{ 
				title: 'style',
				children: [
					{ title: 'FixedColumnWidth( )', path:'/flutter/table/FixedColumnWidth' },
				]
			},
		]
	},
	{
		title: '表单 Widget',
		children:[
			{ title: 'Form', path:'/flutter/form/Form' },
			{ title: 'TextFormField', path:'/flutter/form/TextFormField' },
			{ title: 'TextField', path:'/flutter/form/TextField' },
			{ 
				title: 'style',
				children: [
					{ title: 'TextEditingValue( )', path:'/flutter/form/TextEditingValue' },
					{ title: 'TextRange( )', path:'/flutter/form/TextRange' },
					{ title: 'TextSelection( )', path:'/flutter/form/TextSelection' },
					{ title: 'TextPosition( )', path:'/flutter/form/TextPosition' },
					{ title: 'ToolbarOptions( )', path:'/flutter/form/ToolbarOptions' },
					{ title: 'ScrollController( )', path:'/flutter/form/ScrollController' },
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
				title: '样式',
				children: [
					{ title: 'Container( )', path:'/flutter/layout/Container' },
					{ title: 'Padding( )', path:'/flutter/layout/Padding' },
					{ title: 'Center( )', path:'/flutter/layout/Center' },
					{ title: 'Align( )', path:'/flutter/layout/Align' },
					{ title: 'Opacity( )', path:'/flutter/layout/Opacity' },
					{ title: 'FittedBox( )', path:'/flutter/layout/FittedBox' },
					{ title: 'LayoutBuilder( )', path:'/flutter/layout/LayoutBuilder' },
					{ title: 'Transform( )', path:'/flutter/layout/Transform' },
				]
			},
			{ 
				title: '列表',
				children: [
					{ title: 'Wrap( )', path:'/flutter/layout/Wrap' },
					{ title: 'Flow( )', path:'/flutter/layout/Flow' },
					{ title: 'ListBody( )', path:'/flutter/layout/ListBody' },
				]
			},
			{ 
				title: '定位',
				children: [
					{ title: 'Stack( )', path:'/flutter/layout/Stack' },
					{ title: 'Positioned( )', path:'/flutter/layout/Positioned' },
				]
			},
			{ 
				title: '弹性',
				children: [
					{ title: 'Flex( )', path:'/flutter/layout/Flex' },
					{ title: 'Row( )', path:'/flutter/layout/Row' },
					{ title: 'Column( )', path:'/flutter/layout/Column' },
				]
			},
			{ 
				title: '标题',
				children: [
					{ title: 'ListTile( )', path:'/flutter/layout/ListTile' },
					{ title: 'ExpansionTile( )', path:'/flutter/layout/ExpansionTile' },
				]
			},
			{ 
				title: '自定义控件',
				children: [
					{ title: 'CustomSingleChildLayout( )', path:'/flutter/layout/CustomSingleChildLayout' },
					{ title: 'CustomMultiChildLayout( )', path:'/flutter/layout/CustomMultiChildLayout' },
				]
			},
			
			{ title: 'AspectRatio( )' },
			{ title: 'ConstrainedBox( )' },
			{ title: 'Baseline( )' },
			{ title: 'FractionallySizedBox( )' },
			{ title: 'IntrinsicHeight( )' },
			{ title: 'IntrinsicWidth( )' },
			{ title: 'LimitedBox( )' },
			{ title: 'Offstage( )' },
			{ title: 'OverflowBox( )' },
			{ title: 'SizedBox( )' },
			{ title: 'SizedOverflowBox( )' },
		]
	},
	{ 
		title: '滚动 Widget',
		children: [
			{ title: 'ListView( )', path:'/flutter/scroll/ListView' },
			{ title: 'GridView( )', path:'/flutter/scroll/GridView' },
			{ title: 'CustomScrollView( )', path:'/flutter/scroll/CustomScrollView' },
			{
				title:'style',
				children:[
					{ title: 'SliverPadding( )', path:'/flutter/scroll/SliverPadding' },
					{ title: 'SliverList( )', path:'/flutter/scroll/SliverList' },
					{ title: 'SliverChildListDelegate( )', path:'/flutter/scroll/SliverChildListDelegate' },
				]
			}
		]
	},
	{
		title: '其它 Widget',
		children:[
			{ title: 'DropdownMenuItem( )', path:'/flutter/widget-other/DropdownMenuItem' },
		]
	},
	{
		title: 'UI Widget',
		children:[
			{ title: 'Card( )', path:'/flutter/ui/Card' },
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
			{ title: 'HttpClient( )', path:'/flutter/http/http-client' },
		]
	},
	{
		title: 'v Object',
		children:[
			{ title: 'v.Vector2( )', path:'/flutter/v/Vector2' },
			{ title: 'v.Vector3( )', path:'/flutter/v/Vector3' },
			{ title: 'v.Vector4( )', path:'/flutter/v/Vector4' },
			{ title: 'v.Quaternion( )', path:'/flutter/v/Quaternion' },
		]
	},
]
