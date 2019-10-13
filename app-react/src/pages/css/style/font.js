import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	componentDidMount(){
		$fn.setTitle('字体样式')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='font-family' pro='字体名称' code={[ {path:'css/style/font/font-family'} ]}>
					<CaseComponent
						styleName='fontFamily'
						data={{
							radio:['SimSum','SimHei','Microsoft YaHei','Arial','Tahoma,Verdana,Arial,sans-serif']
						}}>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='font-size' pro='字体大小' code={[ {path:'css/style/font/font-size'} ]} />
				
				<BoxComponent keyword='font-style' pro='倾斜' code={[ {path:'css/style/font/font-style'} ]} />
				
				<BoxComponent keyword='font-weight' pro='加粗' code={[ {path:'css/style/font/font-weight'} ]}>
					<CaseComponent
						styleName='fontWeight'
						data={{
							radio:['normal','bold','bolder','lighter','100','200','300','400','500','600','700','800','900']
						}}>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='font-variant' pro='将小写字母转为大写' code={[ {path:'css/style/font/font-variant'} ]}>
					<CaseComponent
						styleName='fontVariant'
						data={{
							radio:['normal','small-caps']
						}}>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='line-height' pro='行高' code={[ {path:'css/style/font/line-height'} ]}>
					<CaseComponent
						styleName='lineHeight'
						data={{
							radio:['normal','30px','50px','1em','2em','100%','200%']
						}}>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='font' pro='[font-weight] [font-style] [font-variant] [font-size]/[line-height] [font-family]'
					code={[ {path:'css/style/font/font'} ]}
				/>
			</UbContent>
		)
	}
}
