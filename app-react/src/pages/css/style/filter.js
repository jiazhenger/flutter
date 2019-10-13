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
		$fn.setTitle('滤镜')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<h2 className='sub-title ptb10 c1 bbor1'>阴影:</h2>
				
				<BoxComponent keyword='box-shadow' pro='盒子阴影' code={[ {path:'css/style/filter/box-shadow'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ boxShadow: v }) }
						data={{
							radio:['5px 2px 6px #666','5px 5px 5px red,10px 10px 10px blue','5px 5px 5px red,10px 10px 10px blue,-5px -5px 3px green,-15px 15px 3px black']
						}}>
						<div>
							<img src={TestImage} style={{boxShadow:this.state.boxShadow}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<h2 className='sub-title ptb10 c1 bbor1'>渐变:</h2>
				
				<BoxComponent keyword='background-image:linear-gradient()' pro='线性渐变' code={[ {path:'css/style/filter/linear-gradient'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ linearGradient: 'linear-gradient(' + v + ')' }) }
						data={{
							radio:['red, yellow, blue','to right,red,blue','to left,red,blue','to top,red,blue','to bottom,red,blue',
								'to top left,red,blue','to top right,red,blue','to bottom left,red,blue','to bottom right,red,blue',
								'45deg,red,blue','185deg,red,blue',
								'146deg, red 0%, blue 50%','146deg, red 50%, blue 50%','146deg, red 100px, blue 50%'
							]
						}}>
						<div style={{height:'50px',backgroundImage:this.state.linearGradient}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='background-image:radial-gradient()' pro='放射性渐变' code={[ {path:'css/style/filter/radial-gradient'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ radialGradient: 'radial-gradient(' + v + ')' }) }
						data={{
							radio:[
								'red,yellow,blue',
								'circle,red,yellow,green',
								'red 5%,green 15%,yellow 60%',
								'closest-side,blue,green,yellow,black',
								'farthest-side,blue,green,yellow,black',
								'closest-corner,blue,green,yellow,black',
								'farthest-corner,blue,green,yellow,black'
							]
						}}>
						<div style={{height:'50px',backgroundImage:this.state.radialGradient}}></div>
					</CaseComponent>
				</BoxComponent>
				
				<h2 className='sub-title ptb10 c1 bbor1'>滤镜 filter:</h2>
				
				<BoxComponent keyword='filter:drop-shadow()' pro='阴影' code={[ {path:'css/style/filter/drop-shadow'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ dropShadow: 'drop-shadow(' + v + ')' }) }
						data={{
							radio:['5px 2px 6px #666','-5px -5px 5px red']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.dropShadow}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:opacity()' pro='透明度' code={[ {path:'css/style/filter/opacity'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ opacity: 'opacity(' + v + ')' }) }
						data={{
							radio:['0','1','20%','0.5','50%','80%','100%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.opacity}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:blur()' pro='模糊' code={[ {path:'css/style/filter/blur'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ blur: 'blur(' + v + ')' }) }
						data={{
							radio:['0','5px','10px','20px','50px','100px']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.blur}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:grayscale()' pro='置灰' code={[ {path:'css/style/filter/grayscale'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ grayscale: 'grayscale(' + v + ')' }) }
						data={{
							radio:['10%','20%','50%','80%','100%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.grayscale}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:brightness()' isGray pro='变暗' code={[ {path:'css/style/filter/brightness'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ brightness: 'brightness(' + v + ')' }) }
						data={{
							radio:['1','0','0%','50%','0.5', '80%','100%','150%','200%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.brightness}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:contrast()' isGray pro='对比度' code={[ {path:'css/style/filter/contrast'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ contrast: 'contrast(' + v + ')' }) }
						data={{
							radio:['1','0%','50%','0.5','80%','100%','150%','200%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.contrast}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:hue-rotate()' isGray pro='给图像应用色相旋转' code={[ {path:'css/style/filter/hue-rotate'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ hueRotate: 'hue-rotate(' + v + ')' }) }
						data={{
							radio:['0','45deg','90deg','135deg','180deg','360deg','700deg']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.hueRotate}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:invert()' isGray pro='反转图像' code={[ {path:'css/style/filter/invert'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ invert: 'invert(' + v + ')' }) }
						data={{
							radio:['0','1','20%','0.5','50%','80%','100%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.invert}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:saturate()' isGray pro='转换图像饱和度' code={[ {path:'css/style/filter/saturate'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ saturate: 'saturate(' + v + ')' }) }
						data={{
							radio:['1','0','0%','20%','50%','80%','100%','200%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.saturate}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:sepia()' isGray pro='将图像转换为深褐色' code={[ {path:'css/style/filter/sepia'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ sepia: 'sepia(' + v + ')' }) }
						data={{
							radio:['0','0%','1','20%','50%','0.5','80%','100%']
						}}>
						<div>
							<img src={TestImage} style={{filter:this.state.sepia}} alt='' />
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='filter:url()' isGray pro='SVG滤镜' code={[ {path:'css/style/filter/url'} ]}/>
			</UbContent>
		)
	}
}
