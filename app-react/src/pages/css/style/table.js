import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		borderCollapse:'separate',
		borderSpacing:'5px',
		captionSide:'top'
	}
	componentDidMount(){
		$fn.setTitle('显示及隐藏')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent order={1} keyword='border-collapse' pro='边框独立与合并' code={[ {path:'css/style/table/border-collapse'} ]} />
				<BoxComponent order={2} keyword='border-spacing' pro='相邻单元格的边框间的距离' code={[ {path:'css/style/table/border-spacing'} ]} />
				<BoxComponent order={3} keyword='caption-side' isGray pro='相邻单元格的边框间的距离' code={[ {path:'css/style/table/caption-side'} ]} />
				<BoxComponent pro='示例'>
					<div>
						<table className='test-table' style={{borderCollapse:this.state.borderCollapse,borderSpacing:this.state.borderSpacing}}>
							<caption className='nowrap' style={{captionSide:this.state.captionSide}}>表格标题</caption>
							<thead>
								<tr>
									<th>标题</th>
									<th>标题</th>
									<th>标题</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>内容</td>
									<td>内容</td>
									<td>内容</td>
								</tr>
							</tbody>
						</table>
					</div>
					<CaseComponent
						getValue={ v=>this.setState({ borderCollapse: v }) }
						data={{
							radio:['separate','collapse']
						}}>
						<b className='c1'>border-collapse:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ borderSpacing: v }) }
						data={{
							radio:['10px','20px','10px 20px']
						}}>
						<b className='c1'>border-spacing:</b>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ captionSide: v }) }
						data={{
							radio:['top','left','right','bottom']
						}}>
						<b className='c1'>caption-side:</b>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
