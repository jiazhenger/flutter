(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[144],{306:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(4),r=a(5),s=a(7),l=a(6),c=a(8),o=a(0),i=a.n(o),m=a(533),u={title:"\u9634\u5f71",isGroup:!0,data:[{title:"\u9634\u5f71",keyword:"Shadow( )",type:"Shadow",url:"ShadowPage",data:[{keyword:"color",type:"Color",pro:"\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",link:"/flutter/style/offset/Offset"},{keyword:"blurRadius",type:"double",pro:"\u6a21\u7cca\u5ea6"}]},{title:"",type:"Shadow",keyword:"Shadow.convertRadiusToSigma( )",data:[{keyword:"radius",isValue:!0,type:"double",code:[{path:"flutter/style/shadow/Shadow/convertRadiusToSigma"}]}]}]},p=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),u=a(547),p=a(548),d=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(u.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(p.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(551);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(E.hasArray(t)||r)&&a.setState({show:!a.state.show}),E.isString(n)&&a.props.history.push(n)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,l=t.pro,c=t.keyword,o=t.code,i=t.isGray,u=t.link,p=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:v,hasArrow:E.hasArray(o)||w,hasClick:E.isString(u),order:y?null:d,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&c&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],l&&m.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(E.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(u)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(k,{type:"text",url:e.path}))}),s,p&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var n=a(532),r=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),u=a(88),p=a(530),d=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&m.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(r,{key:t,data:e,index:t+1})}):m.a.createElement(r,{data:t}))}}]),t}(m.a.Component)}}]);