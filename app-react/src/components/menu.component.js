/* ====================================== 滚动条  ====================================== */
import React from 'react'
// ===================================================================== antd
import { MenuOutlined } from '@ant-design/icons'
// ===================================================================== 
export default ({ onClick })=> (
	<div onClick={onClick} className='c0 cp h fxmc r5px' style={{width:'40px',height:'40px',marginRight:'15px',border:'1px solid #4da1ff'}}><MenuOutlined /></div>
)
