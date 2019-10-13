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
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('背景')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='background-color' pro='背景颜色' code={[ {path:'css/style/background/base/background-color'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundColor: v }) }
						data={{
							radio:['transparent','rgba(0,0,0,.5)','red','#ffff00']
						}}>
						<div className='rel'>
							<img src={TestImage} style={{height:'60px'}} alt='' />
							<div className='p10 abs_lt wh' style={{backgroundColor:this.state.backgroundColor}}>
								内容正文
							</div> 
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={2} keyword='background-image' pro='背景图片' code={[ {path:'css/style/background/base/background-image'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundImage: v === 'none' ? 'none' :  'url(' + TestImage + ')'}) }
						data={{
							radio:['none','./assets/images/test.png']
						}}>
						<div className='p10' style={{height:'108px',backgroundImage: this.state.backgroundImage }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={3} keyword='background-repeat' pro='背景图片平铺' code={[ {path:'css/style/background/base/background-repeat'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundRepeat: v }) }
						data={{
							radio:['repeat','repeat-x','repeat-y','no-repeat']
						}}>
						<div className='p10' style={{height:'200px',backgroundImage:'url(' + TestImage + ')',backgroundRepeat:this.state.backgroundRepeat }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={4} keyword='background-position' pro='背景图片位置' code={[ {path:'css/style/background/base/background-position'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundPosition: v }) }
						data={{
							radio:['0% 0%','center','top left','top center','top right','center left','center center','center right','bottom left','bottom center','bottom right','50px','80px 80px','50% 50%',]
						}}>
						<div style={{height:'200px',backgroundImage:'url(' + TestImage + ')',backgroundRepeat:'no-repeat',backgroundPosition:this.state.backgroundPosition }}>内容正文</div> 
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundPositionX: v }) }
						data={{
							radio:['0%','left','center','right','50px','50%']
						}}>
						<div style={{height:'108px',backgroundImage:'url(' + TestImage + ')',backgroundRepeat:'no-repeat',backgroundPositionX:this.state.backgroundPositionX }}>内容正文</div> 
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundPositionY: v }) }
						data={{
							radio:['0%','top','center','bottom','50px','50%']
						}}>
						<div style={{height:'150px',backgroundImage:'url(' + TestImage + ')',backgroundRepeat:'no-repeat',backgroundPositionY:this.state.backgroundPositionY }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={5} keyword='background-attachment' pro='背景滚动' code={[ {path:'css/style/background/base/background-attachment'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundAttachment: v }) }
						data={{
							radio:['scroll','fixed']
						}}>
						<div className='p10 oys' style={{height:'200px',backgroundAttachment:this.state.backgroundAttachment,backgroundImage:'url(' + TestImage + ')' }}>
							<p>设置或检索背景图像是随对象内容滚动还是固定的1</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的2</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的3</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的4</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的5</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的6</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的7</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的8</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的9</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的1</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的2</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的3</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的4</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的5</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的6</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的7</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的8</p>
							<p>设置或检索背景图像是随对象内容滚动还是固定的9</p>
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={6} keyword='background-size' pro='背景图片大小' code={[ {path:'css/style/background/promote/background-size'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundSize: v }) }
						data={{
							radio:['auto','cover','contain','50%','50% 50%','300px', '300px 100px']
						}}>
						<div style={{height:'200px',background:'url(' + TestImage + ') no-repeat center',backgroundSize:this.state.backgroundSize }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={7} keyword='background-clip' isGray pro='指定对象的背景图像向外裁剪的区域' code={[ {path:'css/style/background/promote/background-clip'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundClip: v }) }
						data={{
							radio:['border-box','padding-box','content-box']
						}}>
						<div style={{padding:'30px',border:'10px solid rgba(0,0,0,.2)',height:'200px',background:'url(' + TestImage + ') no-repeat',backgroundClip:this.state.backgroundClip }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent order={8} keyword='background-origin' isGray pro='指定对象的背景图像向外裁剪的区域' code={[ {path:'css/style/background/promote/background-origin'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ backgroundOrigin: v }) }
						data={{
							radio:['border-box','padding-box','content-box']
						}}>
						<div style={{padding:'30px',border:'10px solid rgba(0,0,0,.2)',height:'200px',background:'url(' + TestImage + ') no-repeat',backgroundClip:this.state.backgroundClip,backgroundOrigin:this.state.backgroundOrigin }}>内容正文</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='background' 
					pro='[background-color] background-image] [background-repeat] [background-position] [background-attachment] [background-clip] [background-origin]/[background-size]'
					code={[ {path:'css/style/background/background'} ]} 
				/>
			</UbContent>
		)
	}
}