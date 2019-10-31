import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'Curves.x',
	isGroup:true,
	data:[
		{
			title:'过渡效果',
			keyword:'Curves.x( )',
			type:'Curves',
			url:'CurvesPage',
			data:[
				{ keyword:'bounceIn', 			type:'Curves' },
				{ keyword:'bounceOut',	 		type:'Curves' },
				{ keyword:'bounceInOut', 		type:'Curves' },
				{ keyword:'decelerate', 		type:'Curves' },
				{ keyword:'ease', 				type:'Curves' },
				{ keyword:'easeIn', 			type:'Curves' },
				{ keyword:'easeInToLinear', 	type:'Curves' },
				{ keyword:'easeInSine', 		type:'Curves' },
				{ keyword:'easeInQuad', 		type:'Curves' },
				{ keyword:'easeInCubic', 		type:'Curves' },
				{ keyword:'easeInQuart', 		type:'Curves' },
				{ keyword:'easeInQuint', 		type:'Curves' },
				{ keyword:'easeInExpo', 		type:'Curves' },
				{ keyword:'easeInCirc', 		type:'Curves' },
				{ keyword:'easeInBack', 		type:'Curves' },
				{ keyword:'easeOut', 			type:'Curves' },
				{ keyword:'easeOutSine', 		type:'Curves' },
				{ keyword:'easeOutQuad', 		type:'Curves' },
				{ keyword:'easeOutCubic', 		type:'Curves' },
				{ keyword:'easeOutQuart', 		type:'Curves' },
				{ keyword:'easeOutQuint', 		type:'Curves' },
				{ keyword:'easeOutExpo', 		type:'Curves' },
				{ keyword:'easeOutCirc', 		type:'Curves' },
				{ keyword:'easeOutBack', 		type:'Curves' },
				{ keyword:'easeInOut', 			type:'Curves' },
				{ keyword:'easeInOutSine', 		type:'Curves' },
				{ keyword:'easeInOutQuad', 		type:'Curves' },
				{ keyword:'easeInOutCubic', 	type:'Curves' },
				{ keyword:'easeInOutQuart', 	type:'Curves' },
				{ keyword:'easeInOutQuint', 	type:'Curves' },
				{ keyword:'easeInOutExpo', 		type:'Curves' },
				{ keyword:'easeInOutCirc', 		type:'Curves' },
				{ keyword:'easeInOutBack', 		type:'Curves' },
				{ keyword:'elasticIn', 			type:'Curves' },
				{ keyword:'elasticOut', 		type:'Curves' },
				{ keyword:'elasticInOut', 		type:'Curves' },
				{ keyword:'fastLinearToSlowEaseIn', type:'Curves' },
				{ keyword:'fastOutSlowIn', 		type:'Curves' },
				{ keyword:'linear', 			type:'Curves' },
				{ keyword:'linearToEaseOut', 	type:'Curves' },
			]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }