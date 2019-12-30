import React from 'react'
import AddLast from './add-last.component'
// ===================================================================== toast
export default () => (
	<AddLast name='toast'>
		<div id='ubToast' className='ub-toast fix_lt wh tc dn' style={{zIndex:2000}}>
				<div className='fxmc wh xplr'>
					<p className='ub-toast r5px cf p10 f13' style={{background:'rgba(0,0,0,0.6)'}}></p>
				</div>
			</div>
	</AddLast>
)
