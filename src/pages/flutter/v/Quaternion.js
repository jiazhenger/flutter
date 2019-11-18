import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Quaternion',
	isGroup:true,
	data:[
		{
			title:'', keyword:'v.Quaternion( )',type:'Quaternion',
			data:[
				{ keyword:'x', type:'double', isValue:true, pro:'x 轴' },
				{ keyword:'y', type:'double', isValue:true, pro:'y 轴' },
				{ keyword:'z', type:'double', isValue:true, pro:'z 轴' },
				{ keyword:'w', type:'double', isValue:true, pro:'宽度' },
			]
		},
		{ title:'', keyword:'v.Quaternion.identity()( )',type:'Quaternion' },
		{
			title:'复制', keyword:'v.Quaternion.copy( )',type:'Quaternion',
			data:[
				{ keyword:'original', type:'Quaternion', isValue:true, pro:'x 轴' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.axisAngle( )',type:'Quaternion',
			data:[
				{ keyword:'axis', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
				{ keyword:'angle', type:'double', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.dq( )',type:'Quaternion',
			data:[
				{ keyword:'q', type:'Quaternion', isValue:true, pro:''},
				{ keyword:'omega', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.euler( )',type:'Quaternion',
			data:[
				{ keyword:'yaw', type:'double', isValue:true, pro:'' },
				{ keyword:'pitch', type:'double', isValue:true, pro:'' },
				{ keyword:'roll', type:'double', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.fromBuffer( )',type:'Quaternion',
			data:[
				{ keyword:'buffer', type:'ByteBuffer', isValue:true, pro:'' },
				{ keyword:'offset', type:'int', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.fromFloat64List( )',type:'Quaternion',
			data:[
				{ keyword:'_qStorage', type:'Float64List', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.fromRotation( )',type:'Quaternion',
			data:[
				{ keyword:'rotationMatrix', type:'Matrix3', isValue:true, pro:'' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.fromTwoVectors( )',type:'Quaternion',
			data:[
				{ keyword:'a', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
				{ keyword:'b', type:'Vector3', isValue:true, pro:'', link:'/flutter/v/Vector3' },
			]
		},
		{
			title:'', keyword:'v.Quaternion.random( )',type:'Quaternion',
			data:[
				{ keyword:'rn', type:'Random', isValue:true, pro:'' },
			]
		},
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }