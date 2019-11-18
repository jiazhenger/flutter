import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'缩放',
	isGroup:true,
	data:[
		{ title:'0 矩阵', keyword:'Matrix4.zero( )',type:'Matrix4' },
		{ title:'初始状态,4*4的单位矩阵', keyword:'Matrix4.identity( )',type:'Matrix4' },
		{
			title:'取相反的矩阵', keyword:'Matrix4.inverted( )',type:'Matrix4',
			data:[
				{ keyword:'other', type:'Matrix4', isValue:true, pro:'任意 Matrix4' },
			]
		},
		{
			title:'复制矩阵', keyword:'Matrix4.copy( )',type:'Matrix4',
			data:[
				{ keyword:'other', type:'Matrix4', isValue:true, pro:'任意 Matrix4' },
			]
		},
		{
			title:'合并矩阵', keyword:'Matrix4.outer( )',type:'Matrix4',
			data:[
				{ keyword:'u', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
				{ keyword:'v', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
			]
		},
		{
			title:'16位数组转4*4矩阵', keyword:'Matrix4.fromList( )',type:'Matrix4',
			data:[
				{ keyword:'values', type:'List<double>', isValue:true, pro:'16 位数' },
			]
		},
		{
			title:'', keyword:'Matrix4.tryInvert( )',type:'Matrix4',
			data:[
				{ keyword:'other', type:'Matrix4', isValue:true, pro:'任意 Matrix4' },
			]
		},
		{
			title:'', keyword:'Matrix4.columns( )',type:'Matrix4',
			data:[
				{ keyword:'arg1', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
				{ keyword:'arg2', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
				{ keyword:'arg3', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
				{ keyword:'arg4', type:'Vector4', isValue:true, link:'/flutter/v/Vector4' },
			]
		},
		{
			title:'复合平移、旋转、缩放，形成新的状态', keyword:'Matrix4.compose( )',type:'Matrix4',
			data:[
				{ keyword:'translation', type:'Vector3', isValue:true, pro:'位移', link:'/flutter/v/Vector3' },
				{ keyword:'rotation', type:'Quaternion', isValue:true, pro:'旋转', link:'/flutter/v/Quaternion' },
				{ keyword:'scale', type:'Vector3', isValue:true, pro:'缩放', link:'/flutter/v/Vector3' },
			]
		},
		{
			title:'', keyword:'Matrix4.fromBuffer( )',type:'Quaternion',
			data:[
				{ keyword:'buffer', type:'ByteBuffer', isValue:true, pro:'' },
				{ keyword:'offset', type:'int', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'Matrix4.fromFloat64List( )',type:'Quaternion',
			data:[
				{ keyword:'_qStorage', type:'Float64List', isValue:true, pro:'' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }