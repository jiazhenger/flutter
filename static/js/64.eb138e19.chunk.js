(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[64],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(6),n=a(7),c=a(9),s=a(8),l=a(10),o=a(0),i=a.n(o),m=a(363),p={title:"\u6570\u636e\u7c7b\u578b\u53d8\u91cf\u58f0\u660e",data:[{keyword:"num",pro:"\u6570\u5b57\u7c7b\u578b",code:[{path:"dart/grammar/var/type/num"}]},{keyword:"String",pro:"\u5b57\u7b26\u4e32\u7c7b\u578b",code:[{path:"dart/grammar/var/type/string"}]},{keyword:"bool",pro:"\u5e03\u5c14\u7c7b\u578b",code:[{path:"dart/grammar/var/type/bool"}]},{keyword:"List",pro:"\u5217\u8868\u7c7b\u578b",code:[{path:"dart/grammar/var/type/list"}]},{keyword:"Set",pro:"\u96c6\u5408\u7c7b\u578b",code:[{path:"dart/grammar/var/type/set"}]},{keyword:"Map",pro:"\u6620\u5c04\u7c7b\u578b",code:[{path:"dart/grammar/var/type/map"}]},{keyword:"dynamic",pro:"\u65e0\u7c7b\u578b",code:[{path:"dart/grammar/var/type/dynamic"}]},{keyword:"Object",pro:"\u901a\u7528\u7c7b\u578b",code:[{path:"dart/grammar/var/type/object"}]},{keyword:"Symbol",pro:"\u7b26\u53f7\u7c7b\u578b",code:[{path:"dart/grammar/var/type/symbols"}]},{noOrder:!0,pro:"\u901a\u7528",code:[{path:"dart/grammar/var/type/all"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},360:function(e,t,a){"use strict";a(361);var r=a(362),n=(a(106),a(22)),c=a(6),s=a(7),l=a(9),o=a(8),i=a(10),m=a(0),p=a.n(m),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),s&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,s=t.children,l=t.pro,o=t.keyword,i=t.code,m=t.isGray,u=t.link,y=t.url,w=t.order,k=t.noOrder,b=t.isValue,E=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(d,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(u),order:k?null:w,onClick:this.onClick},o&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&p.a.createElement("span",{className:"c0"},a),o&&!b?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),c&&o&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(f.hasArray(i)||E)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),s,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&p.a.createElement("div",{className:"mt10"},u.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},363:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(361);var r=a(362),n=(a(106),a(22)),c=a(6),s=a(7),l=a(9),o=a(8),i=a(10),m=a(0),p=a.n(m),d=a(76),u=a(360),y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,c=function(t){var a=t.data,c=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},c&&p.a.createElement("b",{className:"f16 c1"},c,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(c,{key:t,data:e,index:t+1})}):p.a.createElement(c,{data:t}))}}]),t}(p.a.Component)}}]);