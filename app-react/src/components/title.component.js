/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import { Icon } from 'antd'
// ===================================================================== 
export default ({children,hasArrow,show,order,onClick})=> (
	<div className={`f14 bbor1 ptb10 fxmj ${hasArrow?'cp':''}`} onClick={onClick}>
		<div className='fxm'>
			{
				order ? <span>{order}、</span> : <Icon className='f14' type='share-alt'/>
			}
			<span className='ml10'>{children}</span>
		</div>
		{hasArrow && <span className='c0'><Icon className='f24' type={show?'up-circle':'down-circle'} /></span>}
	</div>
)
