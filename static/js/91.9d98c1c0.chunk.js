(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[91],{229:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(9),n=a(10),s=a(12),l=a(11),c=a(13),o=a(0),i=a.n(o),m=a(331),p={title:"\u4e24\u4fa7\u4e09\u89d2\u5f62\u72b6",keyword:"BeveledRectangleBorder( )",url:"BeveledRectangleBorderPage",data:[{keyword:"side",type:"BorderSide",pro:"\u8fb9\u6846\u6837\u5f0f",link:"/flutter/style/border/BorderSide"},{keyword:"borderRadius",type:"BorderRadius",pro:"\u5706\u89d2",link:"/flutter/style/borderRadius/BorderRadius"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/shape/BeveledRectangleBorder"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},328:function(e,t,a){"use strict";a(329);var r=a(330),n=(a(102),a(21)),s=a(9),l=a(10),c=a(12),o=a(11),i=a(13),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,s=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},p.a.createElement("div",{className:"fxm"},s?p.a.createElement("span",null,s,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,l=t.children,c=t.pro,o=t.keyword,i=t.code,m=t.isGray,d=t.link,y=t.url,w=t.order,k=t.noOrder,E=t.isValue,b=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:v,hasArrow:f.hasArray(i)||b,hasClick:f.isString(d),order:k?null:w,onClick:this.onClick},o&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&p.a.createElement("span",{className:"c0"},a),o&&!E?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),s&&o&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(f.hasArray(i)||b)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),l,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&p.a.createElement("div",{className:"mt10"},d.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},331:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(329);var r=a(330),n=(a(102),a(21)),s=a(9),l=a(10),c=a(12),o=a(11),i=a(13),m=a(0),p=a.n(m),u=a(72),d=a(328),y=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=(this.state.show,this.props.data),a=t.isGroup,s=function(t){var a=t.data,s=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},s&&p.a.createElement("b",{className:"f16 c1"},s,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(s,{key:t,data:e,index:t+1})}):p.a.createElement(s,{data:t}))}}]),t}(p.a.Component)}}]);