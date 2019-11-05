import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'图片质量',
	isGroup:true,
	data:[
		{
			title:'图片质量',
			keyword:'FilterQuality.x',
			type:'FilterQuality',
			url:'FilterQualityPage',
			data:[
				{ keyword:'low', 		type:'ImageRepeat', pro:'低， 默认' },
				{ keyword:'medium', 	type:'ImageRepeat', pro:'中'  },
				{ keyword:'high', 		type:'ImageRepeat', pro:'高'  },
				{ keyword:'none', 		type:'ImageRepeat', pro:'无'  },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/widget/image/style/x/filterQuality'} ] },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }