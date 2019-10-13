import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'其它选择器',
	data:[
		{ keyword:':link{ }、:visited{ }、:hover{ }、:active{ }', pro:'锚伪类', code:[ {path:'css/selector/pseudo/link'} ] },
		{ keyword:':first-child{ }', pro:'指向元素在父级中的第一个子节点', code:[ {path:'css/selector/pseudo/first-child'} ] },
		{ keyword:':last-child{ }', pro:'指向元素在父级中的最后一个子节点', code:[ {path:'css/selector/pseudo/last-child'} ] },
		{ keyword:':first-letter{ }', pro:'指向标签元素内的第一个字符', code:[ {path:'css/selector/pseudo/first-letter'} ] },
		{ keyword:':first-line{ }', pro:'指向标签元素内的第一行字符', code:[ {path:'css/selector/pseudo/first-line'} ] },
		{ keyword:':root{ }', pro:'选择根元素 html', code:[ {path:'css/selector/pseudo/root'} ] },
		{ keyword:':only-child{ }', pro:'匹配属于父元素中唯一子元素', code:[ {path:'css/selector/pseudo/only-child'} ] },
		{ keyword:':empty{ }', pro:'匹配没有任何子元素的元素, 包括文本、空格', code:[ {path:'css/selector/pseudo/empty'} ] },
		{ keyword:':not(.class/#id/html){ }', pro:'匹配所有不匹配简单选择符的元素', code:[ {path:'css/selector/pseudo/not'} ] },
		{ keyword:'::selection{ }', pro:'匹配元素中被用户选中或处于高亮状态的部分', code:[ {path:'css/selector/pseudo/selection'} ] },
		
		{ deviceTitle:'设置元素内容，常用于字体图标', keyword:':before{ }', pro:'设置元素前的内容', code:[ {path:'css/selector/pseudo/before'} ] },
		{ keyword:':after{ }', pro:'设置元素后的内容', code:[ {path:'css/selector/pseudo/after'} ] },
		
		{ deviceTitle:'位置按父级中的所有元素计算', keyword:':nth-child(n){ }', pro:'匹配父级元素中的第 n 个子元素', code:[ {path:'css/selector/pseudo/nth-child'} ] },
		{ keyword:':nth-last-child(n){ }', pro:'匹配父级元素中的倒数第 n 个子元素', code:[ {path:'css/selector/pseudo/nth-last-child'} ] },
		
		{ deviceTitle:'位置按同类型兄弟元素来计算。同类型：即标签必须一样', keyword:':nth-of-type(n){ }', pro:'匹配同类型中的第 n 个同级兄弟元素', code:[ {path:'css/selector/pseudo/nth-of-type'} ] },
		{ keyword:':nth-last-of-type(n){ }', pro:'匹配同类型中的倒数第 n 个同级兄弟元素', code:[ {path:'css/selector/pseudo/nth-last-of-type'} ] },
		{ keyword:':first-of-type(n){ }', pro:'匹配同级兄弟元素中的第一个元素', code:[ {path:'css/selector/pseudo/first-of-type'} ] },
		{ keyword:':only-of-type(n){ }', pro:'匹配属于同类型中唯一兄弟元素', code:[ {path:'css/selector/pseudo/only-of-type'} ] },
		
		{ deviceTitle:'匹配表单元素', keyword:':focus{ }', pro:'表单元素聚焦', code:[ {path:'css/selector/pseudo/focus'} ] },
		{ keyword:':checked{ }', pro:'匹配表单中处于选中状态的元素', code:[ {path:'css/selector/pseudo/checked'} ] },
		{ keyword:':enabled{ }', pro:'匹配表单中处于可用状态的元素', code:[ {path:'css/selector/pseudo/enabled'} ] },
		{ keyword:':disabled{ }', pro:'匹配表单中处于不可用状态的元素', code:[ {path:'css/selector/pseudo/disabled'} ] },
		
		{ deviceTitle:'特殊选择器', keyword:'#id:target{ }', pro:'匹配相关URL指向的元素', code:[ {path:'css/selector/pseudo/target'} ] },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }