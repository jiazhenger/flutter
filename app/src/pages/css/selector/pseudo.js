import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('伪类选择器')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword=':link{ }、:visited{ }、:hover{ }、:active{ }' pro='锚伪类' code={[ {path:'css/selector/pseudo/link'} ]} />
				<BoxComponent keyword=':first-child{ }' pro='指向元素在父级中的第一个子节点' code={[ {path:'css/selector/pseudo/first-child'} ]} />
				<BoxComponent keyword=':last-child{ }' pro='指向元素在父级中的最后一个子节点' code={[ {path:'css/selector/pseudo/last-child'} ]} />
				<BoxComponent keyword=':first-letter{ }' pro='指向标签元素内的第一个字符' code={[ {path:'css/selector/pseudo/first-letter'} ]} />
				<BoxComponent keyword=':first-line{ }' pro='指向标签元素内的第一行字符' code={[ {path:'css/selector/pseudo/first-line'} ]} />
				
				
				<BoxComponent keyword=':root{ }' pro='选择根元素 html' code={[ {path:'css/selector/pseudo/root'} ]} />
				<BoxComponent keyword=':only-child{ }' pro='匹配属于父元素中唯一子元素' code={[ {path:'css/selector/pseudo/only-child'} ]} />
				<BoxComponent keyword=':empty{ }' pro='匹配没有任何子元素的元素, 包括文本、空格' code={[ {path:'css/selector/pseudo/empty'} ]} />
				<BoxComponent keyword=':not(.class/#id/html){ }' pro='匹配所有不匹配简单选择符的元素' code={[ {path:'css/selector/pseudo/not'} ]} />
				<BoxComponent keyword='::selection{ }' pro='匹配元素中被用户选中或处于高亮状态的部分' code={[ {path:'css/selector/pseudo/selection'} ]} />
				
				<h2 className='sub-title ptb10 c1 bbor1'>设置元素内容，常用于字体图标</h2>
				
				<BoxComponent keyword=':before{ }' pro='设置元素前的内容' code={[ {path:'css/selector/pseudo/before'} ]} />
				<BoxComponent keyword=':after{ }' pro='设置元素后的内容' code={[ {path:'css/selector/pseudo/after'} ]} />
				
				<h2 className='sub-title ptb10 c1 bbor1'>位置按父级中的所有元素计算</h2>
				
				<BoxComponent keyword=':nth-child(n){ }' pro='匹配父级元素中的第n个子元素' code={[ {path:'css/selector/pseudo/nth-child'} ]} />
				<BoxComponent keyword=':nth-last-child(n){ }' pro='匹配父级元素中的倒数第n个子元素' code={[ {path:'css/selector/pseudo/nth-last-child'} ]} />
				
				<h2 className='sub-title ptb10 c1 bbor1'>位置按同类型兄弟元素来计算。同类型：即标签必须一样</h2>
				
				<BoxComponent keyword=':nth-of-type(n){ }' pro='匹配同类型中的第 n 个同级兄弟元素' code={[ {path:'css/selector/pseudo/nth-of-type'} ]} />
				<BoxComponent keyword=':first-of-type(n){ }' pro='匹配同类型中的倒数第 n 个同级兄弟元素' code={[ {path:'css/selector/pseudo/nth-last-of-type'} ]} />
				<BoxComponent keyword=':first-of-type{ }' pro='匹配同级兄弟元素中的第一个元素' code={[ {path:'css/selector/pseudo/first-of-type'} ]} />
				<BoxComponent keyword=':only-of-type{ }' pro='匹配属于同类型中唯一兄弟元素' code={[ {path:'css/selector/pseudo/only-of-type'} ]} />
				<h2 className='sub-title ptb10 c1 bbor1'>匹配表单元素</h2>
				<BoxComponent keyword=':focus{ }' pro='表单元素聚焦' code={[ {path:'css/selector/pseudo/focus'} ]} />
				<BoxComponent keyword=':checked{ }' pro='匹配表单中处于选中状态的元素' code={[ {path:'css/selector/pseudo/checked'} ]} />
				<BoxComponent keyword=':enabled{ }' pro='匹配表单中处于可用状态的元素' code={[ {path:'css/selector/pseudo/enabled'} ]} />
				<BoxComponent keyword=':disabled{ }' pro='匹配表单中处于不可用状态的元素' code={[ {path:'css/selector/pseudo/disabled'} ]} />
				<h2 className='sub-title ptb10 c1 bbor1'>特殊选择器</h2>
				<BoxComponent keyword='#id:target{ }' pro='匹配相关URL指向的元素' code={[ {path:'css/selector/pseudo/target'} ]} />
			</UbContent>
		)
	}
}