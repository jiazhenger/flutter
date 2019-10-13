import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('文本样式')
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='color' pro='颜色' code={[ {path:'flutter/style/TextStyle/color'} ]} link='/flutter/style/Colors' {...this.props} />
				<h2 className='sub-title ptb10 c1 bbor1'>字体设置:</h2>
				<BoxComponent keyword='fontFamily、fontFamilyFallback' pro='字体' code={[ {path:'flutter/style/TextStyle/fontFamily'} ]} {...this.props} />
				<BoxComponent keyword='fontSize' pro='字体大小' code={[ {path:'flutter/style/TextStyle/fontSize'} ]} {...this.props} />
				<BoxComponent keyword='fontWeight' pro='加粗' code={[ {path:'flutter/style/TextStyle/fontWeight'} ]} {...this.props} />
				<BoxComponent keyword='fontStyle' pro='倾斜' code={[ {path:'flutter/style/TextStyle/fontStyle'} ]} {...this.props} />
				<h2 className='sub-title ptb10 c1 bbor1'>字体间距:</h2>
				<BoxComponent keyword='letterSpacing' pro='字符间距' code={[ {path:'flutter/style/TextStyle/letterSpacing'} ]} {...this.props} />
				<BoxComponent keyword='wordSpacing' pro='单词间距' code={[ {path:'flutter/style/TextStyle/wordSpacing'} ]} {...this.props} />
				<h2 className='sub-title ptb10 c1 bbor1'>装饰:</h2>
				<BoxComponent keyword='decoration' pro='装饰' code={[ {path:'flutter/style/TextStyle/decoration'} ]} {...this.props} />
			</UbContent>
		)
	}
}
