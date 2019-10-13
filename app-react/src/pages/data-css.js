export default [
	{ 
		title: '基础语法',
		children: [
			{ title: '书写格式',path:'/css/base/grammar' },
			{ title: '引入样式表的3种方式',path:'/css/base/import' },
			{ title: 'css 判断浏览器',path:'/css/base/browser' }
		]
	},
	{ 
		title: 'css 样式',
		children: [
			{ title: '字体样式',path:'/css/style/font' },
			{ title: '文本样式',path:'/css/style/text' },
			{ title: '尺寸',path:'/css/style/size' },
			{ title: '背景', path:'/css/style/background' },
			{ 
				title: '边框与轮廓',
				children:[
					{ title: '边框',path:'/css/style/border/border' },
					{ title: '边框图片',path:'/css/style/border/border-image' },
					{ title: '轮廓',path:'/css/style/border/outline' },
					{ title: '圆角',path:'/css/style/border/border-radius' },
				]
			},
			{ title: '透明',path:'/css/style/opacity' },
			{ title: '外补丁',path:'/css/style/margin' },
			{ title: '内补丁',path:'/css/style/padding' },
			{ title: '浮动',path:'/css/style/float' },
			{ title: '定位',path:'/css/style/position' },
			{ title: '显示及隐藏',path:'/css/style/hidden' },
			{ title: '列表',path:'/css/style/list' },
			{ title: '表格',path:'/css/style/table' },
			{ title: '光标',path:'/css/style/cursor' },
			{ title: '滤镜',path:'/css/style/filter' },
			{ title: '弹性盒子布局',path:'/css/style/flex' },
			{ title: '2D/3D转换',path:'/css/style/transform' },
			{ title: '过渡',path:'/css/style/transition' },
			{ title: '动画',path:'/css/style/animation' },
			{ title: '其它',path:'/css/style/other' }
		]
	},
	{ 
		title: '选择器',
		children: [
			{ title: '基础选择器',path:'/css/selector/base' },
			{ title: '伪类选择器',path:'/css/selector/pseudo' },
			{ title: '其它',path:'/css/selector/other' },
		]
	},
	{ 
		title: '响应试布局',
		children: [
			{ title: '媒体查询器',path:'/css/responsive-layout/media' },
		]
	},
]
