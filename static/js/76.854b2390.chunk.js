(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[76],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var n=a(9),r=a(10),o=a(12),l=a(11),c=a(13),s=a(0),d=a.n(s),i=a(342),p={title:"\u6df7\u5408\u6a21\u5f0f",isGroup:!0,data:[{title:"\u6df7\u5408\u6a21\u5f0f",keyword:"BlendMode.x",type:"BlendMode",url:"BlendModePage",data:[{keyword:"color",type:"BlendMode"},{keyword:"clear",type:"BlendMode"},{keyword:"colorBurn",type:"BlendMode"},{keyword:"colorDodge",type:"BlendMode"},{keyword:"darken",type:"BlendMode"},{keyword:"difference",type:"BlendMode"},{keyword:"dst",type:"BlendMode"},{keyword:"dstATop",type:"BlendMode"},{keyword:"dstIn",type:"BlendMode"},{keyword:"dstOut",type:"BlendMode"},{keyword:"dstOver",type:"BlendMode"},{keyword:"exclusion",type:"BlendMode"},{keyword:"hardLight",type:"BlendMode"},{keyword:"hue",type:"BlendMode"},{keyword:"lighten",type:"BlendMode"},{keyword:"luminosity",type:"BlendMode"},{keyword:"modulate",type:"BlendMode"},{keyword:"multiply",type:"BlendMode"},{keyword:"overlay",type:"BlendMode"},{keyword:"plus",type:"BlendMode"},{keyword:"srcOver",type:"BlendMode"},{keyword:"src",type:"BlendMode"},{keyword:"saturation",type:"BlendMode"},{keyword:"screen",type:"BlendMode"},{keyword:"softLight",type:"BlendMode"},{keyword:"srcATop",type:"BlendMode"},{keyword:"srcIn",type:"BlendMode"},{keyword:"srcOut",type:"BlendMode"},{keyword:"xor",type:"BlendMode"}]}]},y=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(i.a,Object.assign({data:p},this.props))}}]),t}(d.a.Component)},339:function(e,t,a){"use strict";a(340);var n=a(341),r=(a(103),a(21)),o=a(9),l=a(10),c=a(12),s=a(11),d=a(13),i=a(0),p=a.n(i),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,o=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},m=window.$http,u=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return u.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return k});var w=window.$fn,k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(w.hasArray(t)||r)&&a.setState({show:!a.state.show}),w.isString(n)&&a.props.history.push(n)},a.onShow=function(){w.showPhone(a.props.url)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,l=t.children,c=t.pro,s=t.keyword,d=t.code,i=t.isGray,m=t.link,u=t.url,k=t.order,f=t.noOrder,E=t.isValue,b=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(y,{show:v,hasArrow:w.hasArray(d)||b,hasClick:w.isString(m),order:f?null:k,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!E?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),o&&s&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(w.hasArray(d)||b)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:w.hasArray(m)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(d)&&d.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},342:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(340);var n=a(341),r=(a(103),a(21)),o=a(9),l=a(10),c=a(12),s=a(11),d=a(13),i=a(0),p=a.n(i),y=a(73),m=a(339),u=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,o=function(t){var a=t.data,o=t.index;return p.a.createElement("div",null,u.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},o&&p.a.createElement("b",{className:"f16 c1"},o,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(r.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return u.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,u.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(y.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(o,{key:t,data:e,index:t+1})}):p.a.createElement(o,{data:t}))}}]),t}(p.a.Component)}}]);