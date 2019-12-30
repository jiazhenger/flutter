/* ====================================== 页面加载效果  ====================================== */
import React from 'react'
import AddLast from './add-last.component'
// ===================================================================== 
export default ()=>(
	<AddLast name='loading-wraper'>
		<div className='loading-wraper'>
			<div>
				<dl className='loading-circle'>
					<dd><i></i><i></i><i></i><i></i></dd>
					<dd><i></i><i></i><i></i><i></i></dd>
					<dd><i></i><i></i><i></i><i></i></dd>
				</dl>
			</div>
		</div>
	</AddLast>
)