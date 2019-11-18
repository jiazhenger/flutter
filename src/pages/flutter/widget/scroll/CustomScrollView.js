import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'自定义滚动',
	keyword:'CustomScrollView( )',
	type:'CustomScrollView',
	url:'CustomScrollViewPage',
	data:[
		{ keyword:'slivers', type:'List<Widget>', pro:'多个碎片', code:[ {path:'flutter/widget/scroll/CustomScrollView/slivers'} ] },
		{ keyword:'center', type:'Key', pro:'key 值', code:[ {path:'flutter/widget/scroll/CustomScrollView/center'} ] },
		{ keyword:'scrollDirection', type:'Axis', pro:'排列方向，垂直', code:[ {path:'flutter/widget/list/Wrap/Axis'} ] },
		{ keyword:'cacheExtent', type:'double', pro:'缓存高度' },
		{ keyword:'anchor', type:'double', pro:'距离顶部距离' },
		{ keyword:'shrinkWrap', type:'bool', pro:'重新计算滚动长度' },
		{ keyword:'reverse', type:'bool', pro:'倒序' },
		{ keyword:'primary', type:'bool', pro:'滚动视图不够时是否可滚动' },
		{ keyword:'semanticChildCount', type:'int', pro:'提供语义信息的子元素的数量(盲用)' },
		{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
		{ keyword:'physics', type:'ScrollPhysics', pro:'响应用户输入', code:[{ path:'flutter/public/ScrollPhysics'}] },
		{ 
			keyword:'controller', type:'ScrollController', pro:'滚动控件器', 
			code:[{ path:'flutter/public/ScrollController'}],
			link:[{ title:'ScrollController', url:'/flutter/form/ScrollController'}]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }