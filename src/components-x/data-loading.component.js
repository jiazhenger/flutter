/* ====================================== 页面加载效果  ====================================== */
import React from 'react'
export default class Index extends React.Component{
	render(){
		return (
			<div id='ubLoading' className='fix_lt wh tc dn' style={{zIndex:100}}>
				<div className='fxmc wh'>
					<div className='r8px' style={{background:'rgba(0,0,0,.8)',minWidth:'90px',padding:'8px 0'}}>
						<div className='fxmc'><i className='ico-data-loading'></i></div>
						<div className='cf f12 lh20 mt5 ub-loading-msg'></div>
					</div>
				</div>
			</div>
		)
	}
}