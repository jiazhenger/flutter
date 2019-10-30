import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'填充方式',
	isGroup:true,
	data:[
		{
			title:'填充方式',
			keyword:'BoxFit.x',
			type:'BoxFit',
			url:'BoxFitPage',
			data:[
				{ keyword:'scaleDown', 		type:'BoxFit', pro:'图片不超过源图片大小， 默认' },
				{ keyword:'contain', 		type:'BoxFit', pro:'全图显示，显示原比例，不需充满'  },
				{ keyword:'cover', 			type:'BoxFit', pro:'可能拉伸，可能裁剪，充满'  },
				{ keyword:'fill', 			type:'BoxFit', pro:'全图显示，可能拉伸，充满，变形'  },
				{ keyword:'fitWidth', 		type:'BoxFit', pro:'可能拉伸，可能裁剪，宽度充满'  },
				{ keyword:'fitHeight ', 	type:'BoxFit', pro:'可能拉伸，可能裁剪，高度充满'  },
				{ keyword:'none', 			type:'BoxFit', pro:'无'  },
				{ noOrder:true, pro:'示例', code:[ {path:'flutter/image/style/x/fit'} ] },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }