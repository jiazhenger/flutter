(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[238],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(4),r=a(5),s=a(7),l=a(6),c=a(8),o=a(0),i=a.n(o),m=a(566),p={title:"\u987a\u5e8f\u6392\u5217\u63a7\u4ef6",keyword:"ListBody( )",type:"ListBody",url:"ListBodyPage",data:[{keyword:"mainAxis",type:"Axis",pro:"\u6392\u5217\u65b9\u5411\uff0c\u9ed8\u8ba4\u5782\u76f4",code:[{path:"flutter/widget/layout/list/Wrap/Axis"}]},{keyword:"reverse",type:"bool",pro:"\u662f\u5426\u5012\u5e8f"},{keyword:"children",type:"List<Widget>",pro:"\u5217\u8868\u63a7\u4ef6\uff0c\u6240\u6709\u63a7\u4ef6\u4f1a\u91cd\u5408\u5728\u4e00\u8d77",code:[{path:"flutter/public/widget-children"}]}]},u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},563:function(e,t,a){"use strict";a(564);var n=a(565),r=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),p=a(580),u=a(581),d=a(582),y=a(583),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),k=a(584);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(E.hasArray(t)||r)&&a.setState({show:!a.state.show}),E.isString(n)&&a.props.history.push(n)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,l=t.pro,c=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:v,hasArrow:E.hasArray(o)||w,hasClick:E.isString(p),order:y?null:d,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&c&&[m.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],l&&m.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(E.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(b,{type:"text",url:e.path}))}),s,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},566:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(564);var n=a(565),r=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),p=a(90),u=a(563),d=a(584),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&m.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(r,{key:t,data:e,index:t+1})}):m.a.createElement(r,{data:t}))}}]),t}(m.a.Component)}}]);