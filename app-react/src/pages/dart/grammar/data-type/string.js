import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字符串类型')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent pro='字符串类型声明' code={[ {path:'dart/grammar/var/type/string'} ]} />
				<BoxComponent pro='字符串拼接的4种方式' code={[ {path:'dart/grammar/data-type/string/joint'} ]} />
				<BoxComponent pro='字符串插值的2种方式' code={[ {path:'dart/grammar/data-type/string/insert-value'} ]} />
				<BoxComponent pro='转义字符串' code={[ {path:'dart/grammar/data-type/string/unicode'} ]} />
				<BoxComponent pro='属性' code={[ {path:'dart/grammar/data-type/string/property'} ]} />
				<BoxComponent pro='方法' code={[ {path:'dart/grammar/data-type/string/method'} ]} />
			</UbContent>
		)
	}
}
