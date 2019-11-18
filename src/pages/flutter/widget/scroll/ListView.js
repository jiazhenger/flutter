import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'滚动列表',
	isGroup:true,
	data:[
		{
			title:'滚动列表',
			keyword:'ListView()',
			type:'ListView',
			url:'ListViewPage',
			data:[
				{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
				{ deviceTitle:'公共属性', keyword:'scrollDirection', type:'Axis', pro:'排列方向，垂直', code:[ {path:'flutter/widget/layout/list/Wrap/Axis'} ] },
				{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
				{ keyword:'itemExtent', type:'double', pro:'children 高度值' },
				{ keyword:'cacheExtent', type:'double', pro:'缓存高度' },
				{ keyword:'shrinkWrap', type:'bool', pro:'重新计算滚动长度' },
				{ keyword:'reverse', type:'bool', pro:'倒序' },
				{ keyword:'primary', type:'bool', pro:'滚动视图不够时是否可滚动' },
				{ keyword:'addAutomaticKeepAlives', type:'bool', pro:'' },
				{ keyword:'addRepaintBoundaries', type:'bool', pro:'' },
				{ keyword:'addSemanticIndexes', type:'bool', pro:'' },
				{ keyword:'semanticChildCount', type:'int', pro:'提供语义信息的子元素的数量(盲用)' },
				{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
				{ keyword:'physics', type:'ScrollPhysics', pro:'响应用户输入', code:[{ path:'flutter/public/ScrollPhysics'}] },
				{ 
					keyword:'controller', type:'ScrollController', pro:'滚动控件器', 
					code:[{ path:'flutter/public/ScrollController'}],
					link:[{ title:'ScrollController', url:'/flutter/form/ScrollController'}]
				},
			]
		},
		{
			title:'动态创建滚动列表',
			keyword:'ListView.builder( )',
			type:'ListView',
			data:[
				{ keyword:'itemCount', type:'int', pro:'列表数量' },
				{ keyword:'itemBuilder', type:'Widget Function(BuildContext, int)', pro:'返回一个 widget', code:[ {path:'flutter/widget/scroll/ListView/itemBuilder'} ]  },
				{ noOrder:true, pro:'ListView( ) 公共属性' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }