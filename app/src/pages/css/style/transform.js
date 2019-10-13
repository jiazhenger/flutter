import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		translate:'translate(0)',
		scale:'scale(1)',
		rotate:'rotate(0)',
		skew:'skew(0)',
		matrix:''
	}
	componentDidMount(){
		$fn.setTitle('变形')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='transform' pro='应用于元素的2D或3D转换' code={[ {path:'css/style/transform/transform'} ]}/>
				<BoxComponent keyword='transform-origin' pro='允许更改转换元素的位置' code={[ {path:'css/style/transform/transform-origin'} ]}/>
				<BoxComponent keyword='transform-style' pro='使被转换的子元素保留其 3D 转换' code={[ {path:'css/style/transform/transform-style'} ]}/>
				<BoxComponent keyword='perspective-origin' pro='允许改变 3D 元素的底部位置' code={[ {path:'css/style/transform/perspective-origin'} ]}/>
				<BoxComponent keyword='backface-visibility' pro='指定嵌套元素是怎样在三维空间中呈现' code={[ {path:'css/style/transform/backface-visibility'} ]}/>
				<BoxComponent pro='用例'>
					<div style={{background:'yellow',margin:'0 50px'}}>
						<div style={{
							width:'50px',
							height:'50px',
							lineHeight:'50px',
							textAlign:'center',
							color:'#fff',
							background:'red',
							transform: this.state.matrix.indexOf('matrix') >= 0 ? this.state.matrix : this.state.translate + ' ' + this.state.scale + ' ' + this.state.rotate + ' ' + this.state.skew + ' ',
							transformOrigin: this.state.transformOrigin,
							perspectiveOrigin: this.state.perspectiveOrigin,
							transformStyle: this.state.transformStyle,
							backfaceVisibility: this.state.backfaceVisibility
						}}>test</div>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ translate: v }) }
						data={{
							radio:['translate(0,0)','translate(100px,20px)','translate(100px)','translate(10px,20px,30px)','translateX(200px)','translateY(10px)','translateZ(10px)']
						}}>
						<b className='c1 mr10'>transform:translate():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ scale: v }) }
						data={{
							radio:['scale(1)','scale(.5)','scale(.5,2)','scale3d(2,3,4)','scaleX(2)','scaleY(2)','scaleZ(2)']
						}}>
						<b className='c1 mr10'>transform:scale():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ rotate: v }) }
						data={{
							radio:['rotate(0)','rotate(45deg)','rotate3d(10px,20px,30px,45deg)','rotateX(200deg)','rotateY(45deg)','rotateZ(45deg)']
						}}>
						<b className='c1 mr10'>transform:rotate():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ skew: v }) }
						data={{
							radio:['skew(0)','skew(45deg,-45deg)','skewX(200deg)','skewY(45deg)']
						}}>
						<b className='c1 mr10'>transform:skew():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ matrix: v }) }
						data={{
							radio:['none','matrix(0,0,0,0,0,0)','matrix(0.75, 0.8, -0.8, 1.2, 10, 20)']
						}}>
						<b className='c1 mr10'>transform:matrix():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ perspective: v }) }
						data={{
							radio:['perspective(0) ','perspective(10px) ','perspective(50px) ']
						}}>
						<b className='c1 mr10'>transform:perspective():</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ transformOrigin: v }) }
						data={{
							radio:['50% 50% 10px','center center 20px','left bottom 10px','right top 10px','right bottom 10px','left top 10px','0 0 10px']
						}}>
						<b className='c1 mr10'>transform-origin:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ perspectiveOrigin: v }) }
						data={{
							radio:['50% 50%','center center','left bottom','right top','right bottom','left top','0 0']
						}}>
						<b className='c1 mr10'>perspective-origin:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ transformStyle: v }) }
						data={{
							radio:['flat','preserve-3d']
						}}>
						<b className='c1 mr10'>transform-style:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ backfaceVisibility: v }) }
						data={{
							radio:['visible','hidden']
						}}>
						<b className='c1 mr10'>backface-visibility:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
