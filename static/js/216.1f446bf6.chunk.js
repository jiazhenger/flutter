(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[216],{378:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var n=a(4),r=a(5),l=a(7),o=a(6),s=a(8),c=a(0),d=a.n(c),i=a(560),p={title:"\u6df7\u5408\u6a21\u5f0f",keyword:"BlendMode.x",type:"BlendMode",url:"BlendModePage",data:[{keyword:"color",type:"BlendMode"},{keyword:"clear",type:"BlendMode"},{keyword:"colorBurn",type:"BlendMode"},{keyword:"colorDodge",type:"BlendMode"},{keyword:"darken",type:"BlendMode"},{keyword:"difference",type:"BlendMode"},{keyword:"dst",type:"BlendMode"},{keyword:"dstATop",type:"BlendMode"},{keyword:"dstIn",type:"BlendMode"},{keyword:"dstOut",type:"BlendMode"},{keyword:"dstOver",type:"BlendMode"},{keyword:"exclusion",type:"BlendMode"},{keyword:"hardLight",type:"BlendMode"},{keyword:"hue",type:"BlendMode"},{keyword:"lighten",type:"BlendMode"},{keyword:"luminosity",type:"BlendMode"},{keyword:"modulate",type:"BlendMode"},{keyword:"multiply",type:"BlendMode"},{keyword:"overlay",type:"BlendMode"},{keyword:"plus",type:"BlendMode"},{keyword:"srcOver",type:"BlendMode"},{keyword:"src",type:"BlendMode"},{keyword:"saturation",type:"BlendMode"},{keyword:"screen",type:"BlendMode"},{keyword:"softLight",type:"BlendMode"},{keyword:"srcATop",type:"BlendMode"},{keyword:"srcIn",type:"BlendMode"},{keyword:"srcOut",type:"BlendMode"},{keyword:"xor",type:"BlendMode"}]},y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(i.a,Object.assign({data:p},this.props))}}]),t}(d.a.Component)},557:function(e,t,a){"use strict";a(558);var n=a(559),r=a(4),l=a(5),o=a(7),s=a(6),c=a(8),d=a(0),i=a.n(d),p=a(574),y=a(575),m=a(576),u=a(577),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(p.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(y.a,{className:"f24"}):i.a.createElement(m.a,{className:"f24"})),l&&i.a.createElement("span",{className:"c0"},i.a.createElement(u.a,{className:"f24"})))},k=window.$http,w=window.$fn,f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){k.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){k.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component),E=a(578);a.d(t,"a",function(){return v});var b=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,l=t.children,o=t.pro,s=t.keyword,c=t.code,d=t.isGray,p=t.link,y=t.url,m=t.order,u=t.noOrder,k=t.isValue,w=t.hasShow,v=this.state.show;return i.a.createElement("section",null,i.a.createElement(h,{show:v,hasArrow:b.hasArray(c)||w,hasClick:b.isString(p),order:u?null:m,onClick:this.onClick},s&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(k?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},s),a&&i.a.createElement("span",{className:"c0"},a),s&&!k?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&s&&[i.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],o&&i.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==v&&(b.hasArray(c)||w)?i.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(c)&&c.map(function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(f,{type:"text",url:e.path}))}),l,y&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map(function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(i.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(558);var n=a(559),r=a(4),l=a(5),o=a(7),s=a(6),c=a(8),d=a(0),i=a.n(d),p=a(88),y=a(557),m=a(578),u=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return i.a.createElement("div",null,u.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&i.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(m.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return u.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,u.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(y.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return i.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return i.a.createElement(r,{key:t,data:e,index:t+1})}):i.a.createElement(r,{data:t}))}}]),t}(i.a.Component)}}]);