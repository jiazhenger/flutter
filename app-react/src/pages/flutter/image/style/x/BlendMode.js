import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'混合模式',
	isGroup:true,
	data:[
		{
			title:'混合模式',
			keyword:'BlendMode.x',
			type:'BlendMode',
			url:'BlendModePage',
			data:[
				{ keyword:'color', 			type:'BlendMode' },
				{ keyword:'clear', 			type:'BlendMode' },
				{ keyword:'colorBurn', 		type:'BlendMode' },
				{ keyword:'colorDodge', 	type:'BlendMode' },
				{ keyword:'darken', 		type:'BlendMode' },
				{ keyword:'difference', 	type:'BlendMode' },
				{ keyword:'dst', 			type:'BlendMode' },
				{ keyword:'dstATop', 		type:'BlendMode' },
				{ keyword:'dstIn', 			type:'BlendMode' },
				{ keyword:'dstOut', 		type:'BlendMode' },
				{ keyword:'dstOver', 		type:'BlendMode' },
				{ keyword:'exclusion', 		type:'BlendMode' },
				{ keyword:'hardLight', 		type:'BlendMode' },
				{ keyword:'hue', 			type:'BlendMode' },
				{ keyword:'lighten', 		type:'BlendMode' },
				{ keyword:'luminosity', 	type:'BlendMode' },
				{ keyword:'modulate', 		type:'BlendMode' },
				{ keyword:'multiply', 		type:'BlendMode' },
				{ keyword:'overlay', 		type:'BlendMode' },
				{ keyword:'plus', 			type:'BlendMode' },
				{ keyword:'srcOver', 		type:'BlendMode' },
				{ keyword:'src', 			type:'BlendMode' },
				{ keyword:'saturation', 	type:'BlendMode' },
				{ keyword:'screen', 		type:'BlendMode' },
				{ keyword:'softLight', 		type:'BlendMode' },
				{ keyword:'srcATop', 		type:'BlendMode' },
				{ keyword:'srcIn', 			type:'BlendMode' },
				{ keyword:'srcOut', 		type:'BlendMode' },
				{ keyword:'xor', 			type:'BlendMode' },
			],
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }