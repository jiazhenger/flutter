/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== component
import Phone from '@cpt/phone.component'
// ===================================================================== images
import EmptyImage from '@images/empty/01.png'
import PhoneImage from '@images/phone.png'
// ===================================================================== 
export default ({show, src, text})=>(
	<div className='fxmc wh bcf'>
		<div className='tc w lh24 f15'>
			<div className='fxc mb15'><img style={{width:'30%'}} src={src || EmptyImage} alt='' /></div>
			<p className='g6'>{text}</p>
			<p className='c0 mt10 fxm'><img src={PhoneImage} alt='' /> <span>联系客服获取服务</span> <Phone /></p>
		</div>
	</div>
)
