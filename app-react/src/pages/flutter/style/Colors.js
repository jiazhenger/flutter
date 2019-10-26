import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'颜色样式',
	data:[
		{ keyword:'Colors.red', pro:'内置颜色', code:[ {path:'flutter/style/Colors/Colors'} ], url:'Colors' },
		{ keyword:'Color(0xffffff)', pro:'十六进制颜色', code:[ {path:'flutter/style/Colors/color16'} ], url:'Color16' },
		{ keyword:'Color.fromRGBO()', pro:'rgba颜色', code:[ {path:'flutter/style/Colors/fromRGBO'} ], url:'Rgba' },
		{ keyword:'Color.fromARGB()', pro:'argb颜色', code:[ {path:'flutter/style/Colors/fromARGB'} ], url:'Rgba' },
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }