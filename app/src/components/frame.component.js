import React from 'react'
import { Link } from 'react-router-dom'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import { Image } from '@cpx/image.component'
import MenuIcon from '@cpt/menu.component'
// ===================================================================== Image
import IPhone from '@images/iphone.png'
// ===================================================================== antd component
import { Menu, Icon } from 'antd'
const { SubMenu, Item } = Menu
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		defaultOpenKeys:[],
		selectedKeys:[]
	}
	componentDidMount(){
		$fn.setTitle(this.props.title)
	}

 	handleClick = e => {
    	sessionStorage.setItem('selectedKeys',e.key)
    	sessionStorage.setItem('defaultOpenKeys',e.keyPath)
  	}
	go = (path) => {
		if(path){
//			document.querySelector('#nav').style.display = 'none'
			this.props.history.push(path);
		}
	}
	onShow = () => {
		let nav = document.querySelector('#nav')
		if(nav.style.display === 'none'){
			nav.style.display = 'block'
		}else{
			nav.style.display = 'none'
		}
	}
	render(){
		const { children, data, Router, logo, logoWidth  } = this.props
		let selectedKeys = sessionStorage.getItem('selectedKeys')			// 选中 key
		let defaultOpenKeys =  sessionStorage.getItem('defaultOpenKeys')	// 默认打开 key
		if(selectedKeys){ selectedKeys = [selectedKeys] }
		if(defaultOpenKeys){ defaultOpenKeys = defaultOpenKeys.split(',') }
		return (
			<UbContent scrollY={false} className='fv'>
				<header className='bbor1 fxmj' style={{padding:'5px 0 5px 20px'}}>
					<h1 className='logo'><Link to='/'><Image style={{width:logoWidth}} src={logo}/></Link></h1>
					<MenuIcon onClick={this.onShow} />
				</header>
				
				<section className='fx ex'>
					<aside className='h rel' style={{width:'200px'}} id='nav'>
						<UbContent>
							{
								children ? <Menu className='h' mode='vertical'>{ children }</Menu> : (
									<Menu mode='inline' className='h' onClick={this.handleClick} selectedKeys={selectedKeys} defaultOpenKeys={defaultOpenKeys}>
										{
											$fn.hasArray(data) && data.map((v,i)=>(
												<SubMenu key={i} title={<span><Icon type='appstore' /><span>{v.title}</span></span>}>
													{
														$fn.hasArray(v.children) ? v.children.map((p,k)=>{
															return $fn.hasArray(p.children) ? (
																<SubMenu key={i + '-' + k } title={p.title}>
																	{
																		$fn.hasArray(p.children) ? p.children.map((m,j)=> <Item key={i + '-' + k + '-' + j} onClick={e=>{this.go(m.path)}}>{m.title}</Item> ) : null
																	}
																</SubMenu>
															): <Item key={i + '-' + k + 'a'} onClick={e=>{this.go(p.path)}}>{p.title}</Item>
														}) : <Item key={i}>{v.title}</Item>
													}
												</SubMenu>
											))
										}
									</Menu>
								)
							}
						</UbContent>
					</aside>
					<main className='fxm xt ex'>
						<div className='h rel ex'>
							{ Router && <Router {...this.props} /> }
						</div>
						<div className='p10 h dn' id='iPhone'>
							<div className='rel' style={{width:'320px'}}>
								<Image src={IPhone}/>
								<div className='abs_lt bcf r5px' style={{top:'60px',left:'18px',right:'16px',bottom:'72px'}}>
									<iframe id='iframe' className='wh' src='' title='iframe' name='iframe'></iframe>
								</div>
							</div>
						</div>
					</main>
				</section>
			</UbContent>
		)
	}
}