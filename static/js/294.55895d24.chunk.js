(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[294],{459:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var r=a(4),n=a(5),c=a(7),s=a(6),o=a(8),l=a(0),i=a.n(l),u=a(555),m={title:"\u8def\u7531\u6a21\u5f0f",data:[{keyword:"< Router >",pro:"\u6240\u6709\u8def\u7531\u5668\u7ec4\u4ef6\u7684\u901a\u7528\u5e95\u5c42\u63a5\u53e3",code:[{path:"react/router/Router/Router"}]},{keyword:"< BrowserRouter >",pro:"h5 \u8def\u7531",code:[{path:"react/router/Router/BrowserRouter"}]},{keyword:"< HashRouter >",pro:"hash \u8def\u7531",code:[{path:"react/router/Router/HashRouter"}]},{keyword:"< MemoryRouter >",pro:"\u5c06\u5386\u53f2\u8bb0\u5f55\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u4e0d\u8bfb\u5199\u5730\u5740\u680f\uff0c\u5728\u6d4b\u8bd5\u548c\u975e\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u975e\u5e38\u6709\u7528",code:[{path:"react/router/Router/MemoryRouter"}]},{keyword:"< StaticRouter >",pro:"\u9759\u6001\u8def\u7531\uff0c\u5373\u4e00\u4e2a\u4ece\u4e0d\u6539\u53d8\u4f4d\u7f6e\u7684\u8def\u7531",code:[{path:"react/router/Router/StaticRouter"}]},{keyword:"< NativeRouter >",pro:"react-native \u8def\u7531"}]},p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},552:function(e,t,a){"use strict";a(553);var r=a(554),n=a(4),c=a(5),s=a(7),o=a(6),l=a(8),i=a(0),u=a.n(i),m=a(569),p=a(570),d=a(571),h=a(572),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},u.a.createElement("div",{className:"fxm"},n?u.a.createElement("span",null,n,"\u3001"):u.a.createElement(m.a,{className:"f14"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},r?u.a.createElement(p.a,{className:"f24"}):u.a.createElement(d.a,{className:"f24"})),c&&u.a.createElement("span",{className:"c0"},u.a.createElement(h.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component),E=a(573);a.d(t,"a",function(){return v});var b=window.$fn,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,c=t.children,s=t.pro,o=t.keyword,l=t.code,i=t.isGray,m=t.link,p=t.url,d=t.order,h=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return u.a.createElement("section",null,u.a.createElement(y,{show:v,hasArrow:b.hasArray(l)||w,hasClick:b.isString(m),order:h?null:d,onClick:this.onClick},o&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},o),a&&u.a.createElement("span",{className:"c0"},a),o&&!f?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),n&&o&&[u.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(b.hasArray(l)||w)?u.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:b.hasArray(m)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(l)&&l.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(k,{type:"text",url:e.path}))}),c,p&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},555:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(553);var r=a(554),n=a(4),c=a(5),s=a(7),o=a(6),l=a(8),i=a(0),u=a.n(i),m=a(88),p=a(552),d=a(573),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return u.a.createElement("div",null,h.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&u.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?u.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(n,{key:t,data:e,index:t+1})}):u.a.createElement(n,{data:t}))}}]),t}(u.a.Component)}}]);