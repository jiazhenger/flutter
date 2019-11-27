import React from 'react'
import { Link } from 'react-router-dom'
// ===================================================================== public component
import UbContent from '@cpx/ub-content.component'
import { Image } from '@cpx/image.component'
import MenuIcon from '@cpt/menu.component'
// ===================================================================== Image
import IPhone from '@images/iphone.png'
// ===================================================================== antd component
import { Menu } from 'antd'
import { Appstore, Close } from '@ant-design/icons'
const { SubMenu, Item } = Menu
// ===================================================================== component
const $fn = window.$fn
export default class Index extends React.Component{
	state = {
		selectedKeys:this.getKey(),
	}
	componentDidMount(){
		$fn.setTitle(this.props.title)
	}
	handleClick = v => {
    	sessionStorage.setItem('defaultOpenKeys',v.keyPath)
  	}
	onSelect = v => {
		this.props.history.push(v.key);
		this.setState({ selectedKeys: this.getKey() })
	}
	onShow = () => {
		let nav = document.querySelector('#nav')
		if(nav.style.display === 'none'){
			nav.style.display = 'block'
		}else{
			nav.style.display = 'none'
		}
	}
	// 从路由获取 key 值
	getKey(){
		let hash = window.location.hash
		hash = hash.replace('#','')
		return [ hash ]
	}
	render(){
		const { children, data, Router, logo, logoWidth  } = this.props
		const { selectedKeys } = this.state
		let defaultOpenKeys =  sessionStorage.getItem('defaultOpenKeys')	// 默认打开 key
		if(defaultOpenKeys){ defaultOpenKeys = defaultOpenKeys.split(',') }
		return (
			<UbContent scrollY={false} className='fv'>
				<header className='bbor1 fxmj' style={{padding:'5px 0 5px 20px'}}>
					<h1 className='logo'><Link to='/'><Image style={{width:logoWidth}} src={logo}/></Link></h1>
					<MenuIcon onClick={this.onShow} />
				</header>
				<section className='fx ex'>
					<aside className='h rel' style={{width:'250px'}} id='nav'>
						<UbContent>
							{
								children ? <Menu className='h' mode='vertical'>{ children }</Menu> : (
									<Menu className='h' mode='inline' onClick={this.handleClick} selectedKeys={selectedKeys} defaultOpenKeys={defaultOpenKeys} onSelect={this.onSelect}>
										{
											$fn.hasArray(data) && data.map((v,i)=>(
												<SubMenu key={i} title={<><Appstore/><span>{v.title}</span></>}>
													{
														$fn.hasArray(v.children) ? v.children.map((p,k)=>{
															return $fn.hasArray(p.children) ? (
																<SubMenu key={i + '-' + k } title={p.title}>
																	{
																		$fn.hasArray(p.children) ? p.children.map((m,j)=> <Item key={m.path}>{m.title}</Item> ) : null
																	}
																</SubMenu>
															): <Item key={p.path}>{p.title}</Item>
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
					</main>
				</section>
				<div className={`h fix_lt wh fxmc ${$fn.platform().isPc?'p10':''}`} style={{background:'rgba(0,0,0,.4)',display:'none'}} id='iPhone'
					onClick={()=>{$fn.hidePhone()}}
				>
					{
						$fn.platform().isPc ? (
							<div className='rel' style={{width:'320px'}} onClick={$fn.stop}>
								<Image src={IPhone}/>
								<div className='abs_lt bcf r5px' style={{top:'60px',left:'18px',right:'16px',bottom:'72px'}}>
									<iframe id='iframe' className='wh' src='' title='iframe' name='iframe'></iframe>
								</div>
							</div>
						) : (
							<div className='rel wh bcf'>
								<iframe id='iframe' className='wh' src='' title='iframe' name='iframe'></iframe>
							</div>
						)
					}
					{
						!$fn.platform().isPc && (<div className='abs rpx fxmc' style={{width:'30px',height:'30px',right:'5px',top:'10px',background:'rgba(0,0,0,.3)'}}><Close style={{color:'#fff'}} /></div>)
					}
				</div>
			</UbContent>
		)
	}
}