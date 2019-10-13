import React from 'react'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import BoxComponent from '@cpt/box.component'
import CaseComponent from '@cpt/case-css.component'
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		
	}
	componentDidMount(){
		$fn.setTitle('字体样式')
		$fn.hidePhone()
	}
	render(){
		return (
			<UbContent className='page-content'>
				<BoxComponent keyword='color' pro='颜色' code={[ {path:'css/style/text/color'} ]} />
				
				<BoxComponent keyword='text-decoration' pro='文本的装饰' code={[ {path:'css/style/text/text-decoration'} ]} />
				
				
				<BoxComponent keyword='text-transform' pro='字母文本的大小写' code={[ {path:'css/style/text/text-transform'} ]}>
					<CaseComponent
						styleName='textTransform'
						data={{
							radio:['none','capitalize','uppercase','lowercase']
						}}>
						测试样例  none capitalize UPPERCASE lowercase
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='letter-spacing' pro='文字之间的间距' code={[ {path:'css/style/text/letter-spacing'} ]} />
				
				<BoxComponent keyword='word-spacing' pro='单词之间的间距' code={[ {path:'css/style/text/word-spacing'} ]} />
				
				<BoxComponent keyword='text-shadow' pro='文字阴影' code={[ {path:'css/style/text/text-shadow'} ]} />
				
				<BoxComponent keyword='text-indent' pro='首行缩进' code={[ {path:'css/style/text/text-indent'} ]}>
					<CaseComponent
						styleName='textIndent'
						data={{
							radio:['2em','50px','4em','6em','8em']
						}}>
						<p>检索或设置对象中的文本的缩进</p>
						<p>在被另一个对象（如）断开的对象内不能应用本属性</p>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='text-align' pro='水平对齐方式' code={[ {path:'css/style/text/text-align'} ]}>
					<CaseComponent
						styleName='textAlign'
						data={{
							radio:['left','center','right','justify']
						}}>
						设置或检索对象中文本的对齐方式,设置或检索对象中文本的对齐方式,设置或检索对象中文本的对齐方式,设置或检索对象中文本的对齐方式
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='vertical-align' pro='垂直对齐方式' code={[ {path:'css/style/text/vertical-align'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ verticalAlign: v }) }
						data={{
							radio:['baseline','super','sub','top','middle','bottom','text-top','text-bottom','20px','-20px','50%','-50%']
						}}>
						<span className='f24'>垂直对齐方式</span><span style={{verticalAlign:this.state.verticalAlign}}>只设此元素</span>
					</CaseComponent>
					<CaseComponent
						getValue={ v=>this.setState({ verticalAlign2: v }) }
						data={{
							radio:['baseline','super','sub','top','middle','bottom','text-top','text-bottom','20px','-20px','50%','-50%']
						}}>
						<span className='f24' style={{verticalAlign:this.state.verticalAlign2}}>垂直对齐方式</span><span style={{verticalAlign:this.state.verticalAlign2}}>两个元素都设</span>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='white-space' pro='空格处理方式' code={[ {path:'css/style/text/white-space'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ whiteSpace: v }) }
						data={{
							radio:['normal','pre(受框架影响,不准确)','nowrap']
						}}>
						<div className='p10' style={{width:'300px',background:'yellow',whiteSpace:this.state.whiteSpace}}>
							function()｛
								var a = 0;
								var b = [];
								b.forEach(function(value,index)=>｛
								
								｝)
							｝
						</div>
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='word-wrap' pro='自动换行' code={[ {path:'css/style/text/word-wrap'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ wordWrap: v }) }
						data={{
							radio:['normal','break-word']
						}}>
						<div className='p10' style={{width:'300px',background:'yellow',wordWrap:this.state.wordWrap}}>
							<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
							<p>222222222222222222222222222222222222222222222222222</p>
						</div>
						<div className='p10 pt' style={{width:'300px',background:'yellow',wordWrap:this.state.wordWrap}}>
							内容如果是汉字,有效的单词,则不起作用;允许长单词或 URL 地址自动换行
						</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='text-overflow' pro='溢出显示( ... )' code={[ {path:'css/style/text/text-overflow'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ textOverflow: v }) }
						data={{
							radio:['clip','ellipsis']
						}}>
						<div className='p10' style={{width:'300px',background:'yellow',overflow:'hidden',whiteSpace:'nowrap',textOverflow:this.state.textOverflow}}>
							设置或检索是否使用一个省略标记（...）标示对象内文本的溢出
						</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='-webkit-line-clamp' pro='第几行溢出显示( ... )' code={[ {path:'css/style/text/-webkit-line-clamp'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ WebkitLineClamp: v }) }
						data={{
							radio:['0','1','2','3']
						}}>
						<div style={{width:'300px',background:'yellow',overflow:'hidden',WebkitLineClamp:this.state.WebkitLineClamp,textOverflow:'ellipsis',display:'-webkit-box',WebkitBoxOrient:'vertical'}}>
							设置第几行使用一个省略标记标示对象内文本的溢出设置第几行使用一个省略标记标示对象内文本的溢出设置第几行使用一个省略标记标示
						</div> 
					</CaseComponent>
				</BoxComponent>
				
				<BoxComponent keyword='direction' isGray pro='文本流的方向'  code={[ {path:'css/style/text/direction'} ]}>
					<CaseComponent
						getValue={ v=>this.setState({ textOverflow: v }) }
						styleName='direction'
						data={{
							radio:['ltr','rtl']
						}}>
					</CaseComponent>
				</BoxComponent>
			</UbContent>
		)
	}
}
