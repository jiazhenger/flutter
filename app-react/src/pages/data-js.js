export default [
	{ 
		title: '基础语法',
		children: [
			{
				title: '声明变量',path:'/js/grammar/var'
			},
			{
				title: '语句',
				children:[
					{ title: '循环语句', path:'/js/statement/circulation' },
					{ title: '判断语句', path:'/js/statement/judge' },
				]
			},
		]
	},
	{
		title:'数据类型',
		children: [
			{
				title: '6种基本数据类型',
				children:[
					{ title: '数字 Number', path:'/js/grammar/data-type/number' },
					{ title: '字符串 String', path:'/js/grammar/data-type/string' },
					{ title: '布尔 Boolean', path:'/js/grammar/data-type/boolean' },
					{ title: '空 Null', path:'/js/grammar/data-type/dynamic' },
					{ title: '未定义 Undefined', path:'/js/grammar/data-type/undefined' },
					{ title: '原始数据类型 Symbol', path:'/js/grammar/data-type/Symbol' },
				]
			},
			{
				title: '3种引用数据类型',
				children:[
					{ title: '对象 Object', path:'/js/grammar/data-type/object' },
					{ title: '数组 Array', path:'/js/grammar/data-type/array' },
					{ title: '函数 Function', path:'/js/grammar/data-type/function' },
				]
			},
			{ title: '判断数据类型', path:'/js/grammar/data-type/type' },
		]
	},
	{
		title: '对象',
		children: [
			{
				title:'Number',
				children: [
					{ title:'属性', path:'/js/object/number/property' },
					{ title:'方法', path:'/js/object/number/method' },
				]
			},
			{
				title:'String',
				children: [
					{ title:'属性', path:'/js/object/string/property' },
					{ title:'方法', path:'/js/object/string/method' },
				]
			},
			{
				title:'Boolean',
				children: [
					{ title:'属性', path:'/js/object/boolean/property' },
					{ title:'方法', path:'/js/object/boolean/method' },
				]
			},
			{
				title:'Function',
				children: [
					{ title:'属性', path:'/js/object/function/property' },
					{ title:'方法', path:'/js/object/function/method' },
					{ title:'Arguments 对象', path:'/js/object/function/arguments' },
					{ title:'Function 对象的属性', path:'/js/object/function/function-property' },
					{ title:'Function 原型对象的方法', path:'/js/object/function/function-method' },
				]
			},
			{
				title:'Object',
				children: [
					{ title:'构造函数的属性', path:'/js/object/object/property' },
					{ title:'构造函数的方法', path:'/js/object/object/method' },
					{ title:'原型对象的属性', path:'/js/object/object/prototype-property' },
					{ title:'原型对象的方法', path:'/js/object/object/prototype-method' },
				]
			}
		]
	}
]
