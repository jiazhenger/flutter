import React from 'react'
// ===================================================================== antd
import { Result, Button } from 'antd'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
// ===================================================================== page component
export default ({ history }) => {
	return (
		<UbContent>
			<Result
				status='404'
				title='404'
				subTitle='哦呵, 页面未找到'
				extra={<Button onClick={()=>history.push('/')} size='large' type='primary' style={{width:'120px'}}>返回</Button>}
			/>
		</UbContent>
	)
}