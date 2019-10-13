import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== image
import TestImage from '@images/test.png'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {}
	componentDidMount(){
		$fn.setTitle('边框')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='border-image-source' pro='边框图片' isGray code={[ {path:'css/style/border/border-image/border-image-source'} ]}/>
				<BoxComponent order={2} keyword='border-image-width' pro='图像边界的宽度' isGray code={[ {path:'css/style/border/border-image/border-image-width'} ]}/>
				<BoxComponent order={3} keyword='border-image-repeat' pro='图像平铺方式' isGray code={[ {path:'css/style/border/border-image/border-image-repeat'} ]}/>
				<BoxComponent order={4} keyword='border-image-slice' pro='用于指定在边框外部绘制 border-image-area 的量' isGray code={[ {path:'css/style/border/border-image/border-image-slice'} ]}/>
				<BoxComponent order={5} keyword='border-image-outset' pro='图像边界向内偏移' isGray code={[ {path:'css/style/border/border-image/border-image-outset'} ]}/>
				<BoxComponent keyword='border-image' isGray pro='[border-image-width] [border-image-source] [border-image-repeat] [border-image-slice] [border-image-outset]' code={[ {path:'css/style/border/border-image/border-image'} ]} />
				
				<BoxComponent pro='示例'>
					<div style={{padding:'30px',border:'1px solid #666'}}>
						<div style={{
							border:'20px solid yellow',
							height:'100px',
							borderImageSource: this.state.borderImageSource,
							borderImageWidth: this.state.borderImageWidth,
							borderImageRepeat: this.state.borderImageRepeat,
							borderImageSlice: this.state.borderImageSlice,
							borderImageOutset: this.state.borderImageOutset
						}}></div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ borderImageSource: v === 'none' ? 'none' :  'url(' + TestImage + ')'}) }
						data={{
							radio:['none','./assets/images/test.png']
						}}>
						<b className='c1'>border-image-source:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ borderImageWidth: v }) }
						data={{
							radio:['1','2','2 10','20%','50% 80%']
						}}>
						<b className='c1'>border-image-width:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ borderImageRepeat: v }) }
						data={{
							radio:['stretch','repeat','round','space']
						}}>
						<b className='c1'>border-image-repeat:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ borderImageSlice: v }) }
						data={{
							radio:['100%','2','2 10','20%','20% 50%','fill']
						}}>
						<b className='c1'>border-image-slice:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ borderImageOutset: v }) }
						data={{
							radio:['0','1','1 2']
						}}>
						<b className='c1'>border-image-outset:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
