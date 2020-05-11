import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn

export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('判断语句')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent deviceTitle='if 判断' order={1} keyword='if( )' pro='真判断' code={[ {path:'js/grammar/if/if'} ]} />
				<BoxComponent order={2} keyword='if( ){ }else{ }' pro='非真即假判断' code={[ {path:'js/grammar/if/if-else'} ]} />
				<BoxComponent order={3} keyword='if( ){ }else if(){ }else{ }' pro='选择判断' code={[ {path:'js/grammar/if/if-elseif-else'} ]} />
				<BoxComponent deviceTitle='swtich 判断' order={1} keyword='swtich( )' pro='选择判断' code={[ {path:'js/grammar/if/switch'} ]} />
			</UbContent>
		)
	}
}