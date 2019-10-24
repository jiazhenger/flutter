export default [
	{ 
		title: '基础语法',
		children: [
			{ title: '基础', path:'/dart/grammar/main' },
			{ title: '测试输出', path:'/dart/grammar/test' },
			{
				title: '声明变量',
				children:[
					{ title: '变量声明', path:'/dart/grammar/var/var' },
					{ title: '数据类型', path:'/dart/grammar/var/type' },
					{ title: '泛类型', path:'/dart/grammar/var/generic' },
					{ title: '混合声明', path:'/dart/grammar/var/mix' },
				]
			},
			{
				title: '9种数据类型',
				children:[
					{ title: '数字 num', path:'/dart/grammar/data-type/num' },
					{ title: '字符串 String', path:'/dart/grammar/data-type/string' },
					{ title: '布尔 bool', path:'/dart/grammar/data-type/bool' },
					{ title: '列表 List', path:'/dart/grammar/data-type/list' },
					{ title: '集合 Set', path:'/dart/grammar/data-type/set' },
					{ title: '映射 Map', path:'/dart/grammar/data-type/map' },
					{ title: '通用 Object', path:'/dart/grammar/data-type/object' },
					{ title: '无类型 dynamic', path:'/dart/grammar/data-type/dynamic' },
					{ title: '符号 symbols', path:'/dart/grammar/data-type/symbols' },
				]
			},
			{
				title: '数据类型管理',
				children:[
					{ title: '类型测试操作符', path:'/dart/grammar/data-manage/judge' },
				]
			},
			{ title: '操作符', path:'/dart/grammar/operator' },
			{
				title: '语句',
				children:[
					{ title: '判断语句', path:'/dart/grammar/statement/if' },
					{ title: '循环语句', path:'/dart/grammar/statement/for' },
				]
			},
			{
				title: '函数',
				children:[
					{ title: '函数基础', path:'/dart/grammar/function/base' },
					{ title: '内置函数', path:'/dart/grammar/function/inner' },
				]
			},
			{
				title: '类',
				children:[
					{ title: '类基础', path:'/dart/grammar/class/base' },
					{ title: '构造函数', path:'/dart/grammar/class/constructor' },
					{ title: '重写对象', path:'/dart/grammar/class/get-set' },
					{ title: '继承', path:'/dart/grammar/class/extends' },
					{ title: '重写成员', path:'/dart/grammar/class/override' },
					{ title: '接口', path:'/dart/grammar/class/interface' },
					{ title: '重载操作符', path:'/dart/grammar/class/operator' },
					{ title: '枚举类', path:'/dart/grammar/class/enum' },
				]
			},
			{ title: '错误处理', path:'/dart/grammar/error' },
			{ title: '异步', path:'/dart/grammar/async' },
			{ title: '元数据', path:'/dart/grammar/metadata' },
		]
	},
	{
		title: '时间',
		children:[
			{ title: 'DateTime', path:'/dart/time/DateTime' },
			{ title: 'Duration', path:'/dart/time/Duration' },
		]
	},
	{
		title: '内置包',
		children:[
			{ title: 'convert', path:'/dart/package/convert' },
			{ title: 'html', path:'/dart/package/html' },
			{ title: 'math', path:'/dart/package/math' },
		]
	},
	{
		title: 'document',
		children:[
			{ title: 'dom 操作', path:'/dart/document/dom' },
		]
	}
]
