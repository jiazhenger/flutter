import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'栅格化滚动',
	isGroup:true,
	data:[
		{
			title:'栅格化滚动',
			keyword:'GridView()',
			type:'GridView',
			url:'GridViewPage',
			data:[
				{ keyword:'cacheExtent', type:'double', pro:'缓存高度' },
				{ keyword:'gridDelegate', type:'SliverGridDelegate', pro:'控制GridView参数', code:[ {path:'flutter/widget/scroll/GridView/SliverGridDelegate'} ] },
				{ deviceTitle:'公共属性', keyword:'scrollDirection', type:'Axis', pro:'排列方向，垂直', code:[ {path:'flutter/widget/layout/list/Wrap/Axis'} ] },
				{ keyword:'padding', type:'EdgeInsetsGeometry', pro:'补白', link:'/flutter/style/offset/EdgeInsets' },
				{ keyword:'shrinkWrap', type:'bool', pro:'重新计算滚动长度' },
				{ keyword:'reverse', type:'bool', pro:'倒序' },
				{ keyword:'primary', type:'bool', pro:'滚动视图不够时是否可滚动' },
				{ keyword:'addAutomaticKeepAlives', type:'bool', pro:'' },
				{ keyword:'addRepaintBoundaries', type:'bool', pro:'' },
				{ keyword:'addSemanticIndexes', type:'bool', pro:'' },
				{ keyword:'semanticChildCount', type:'int', pro:'提供语义信息的子元素的数量(盲用)' },
				{ keyword:'physics', type:'ScrollPhysics', pro:'响应用户输入', code:[{ path:'flutter/public/ScrollPhysics'}] },
				{ 
					keyword:'controller', type:'ScrollController', pro:'滚动控件器', 
					code:[{ path:'flutter/public/ScrollController'}],
					link:[{ title:'ScrollController', url:'/flutter/form/ScrollController'}]
				},
				{ keyword:'children', type:'List<Widget>', pro:'列表控件', code:[ {path:'flutter/public/widget-children'} ]  },
			]
		},
		{
			title:'动态创建栅格化滚动',
			keyword:'GridView.count( )',
			type:'GridView',
			url:'GridViewCountPage',
			data:[
				{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
				{ keyword:'cacheExtent', type:'double', pro:'缓存高度' },
				{ deviceTitle:'SliverGridDelegateWithFixedCrossAxisCount( ) 配置', keyword:'crossAxisCount', type:'double', pro:'列数或行数' },
				{ keyword:'mainAxisSpacing', type:'double', pro:'主轴间隔' },
				{ keyword:'crossAxisSpacing', type:'double', pro:'副轴间隔' },
				{ keyword:'childAspectRatio', type:'int', pro:'子元素屏幕高宽比' },
				{ noOrder:true, pro:'GridView( ) 公共属性' },
			]
		},
		{
			title:'动态创建栅格化滚动',
			keyword:'GridView.extent( )',
			type:'GridView',
			url:'GridViewExtendPage',
			data:[
				{ keyword:'dragStartBehavior', type:'DragStartBehavior', pro:'拖动行为', code:[{ path:'flutter/public/DragStartBehavior'}] },
				{ deviceTitle:'SliverGridDelegateWithMaxCrossAxisExtent( ) 配置', keyword:'maxCrossAxisExtent', type:'double', pro:'子元素高度' },
				{ keyword:'mainAxisSpacing', type:'double', pro:'主轴间隔' },
				{ keyword:'crossAxisSpacing', type:'double', pro:'副轴间隔' },
				{ keyword:'childAspectRatio', type:'int', pro:'子元素屏幕高宽比' },
				{ noOrder:true, pro:'GridView( ) 公共属性' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }