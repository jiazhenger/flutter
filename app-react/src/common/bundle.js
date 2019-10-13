/* ====================================== 异步加载路由  ====================================== */
import React, { Component } from 'react'
// ===================================================================== loadding 
import PageLoadingComponent from '@cpx/page-loading.component'
// =====================================================================
export const Bundle = (importComponent) => {
    class AsyncComponent extends Component {
        constructor(...args) {
            super(...args);
            
            this.state = { component: () => <PageLoadingComponent/> };
            
            //this._isMounted = true;
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            
        	//if(!this._isMounted) return;
        	
        	this.setState({ component: component });
        }
        
        componentWillUnmount(){
        	// 解决组件被提前移出报错问题
        	//this._isMounted = false;
        	
			//this.setState = (state,callback)=>{ return;}
		}

        render() {
            const Component = this.state.component;

            return Component ? <Component {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}

export const Import = (path)=>{
	return Bundle(() => import('@pages/' + path));
}

export default { Bundle, Import }
