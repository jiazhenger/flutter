(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[34],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(4),n=a(5),s=a(7),c=a(6),l=a(8),o=a(0),i=a.n(o),p=a(533),m={title:"\u57fa\u7840\u9009\u62e9\u5668",data:[{keyword:"*{ }",pro:"\u9009\u62e9\u4efb\u4f55\u5143\u7d20",code:[{path:"css/selector/base/any"}]},{keyword:"div{ }",pro:"html \u5143\u7d20\u9009\u62e9\u5668",code:[{path:"css/selector/base/tag"}]},{keyword:".class{ }",pro:"lass \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/class"}]},{keyword:"#id{ }",pro:"id \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/id"}]},{keyword:"[attr]{ }",pro:"\u5c5e\u6027\u9009\u62e9\u5668",code:[{path:"css/selector/base/attr"}]},{keyword:"div,p,span{ }",pro:"\u5206\u7ec4\u9009\u62e9\u5668",code:[{path:"css/selector/base/group"}]},{keyword:"div.class{ }\u3001.class.class{ }",pro:"\u9650\u5236\u9009\u62e9\u5668",code:[{path:"css/selector/base/limit"}]},{keyword:"div span{ }",pro:"\u5305\u542b\u9009\u62e9\u5668",code:[{path:"css/selector/base/child-all"}]},{keyword:"div>span{ }",pro:"\u5b50\u5bf9\u8c61\u9009\u62e9\u5668",code:[{path:"css/selector/base/child"}]},{keyword:"div+p{ }\u3001div~p{ }",pro:"\u5144\u5f1f\u9009\u62e9\u5668",code:[{path:"css/selector/base/brother"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),p=a.n(i),m=a(547),d=a(548),u=a(549),h=a(550),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(d.a,{className:"f24"}):p.a.createElement(u.a,{className:"f24"})),s&&p.a.createElement("span",{className:"c0"},p.a.createElement(h.a,{className:"f24"})))},f=window.$http,b=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return b.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),k=a(551);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,c=t.pro,l=t.keyword,o=t.code,i=t.isGray,m=t.link,d=t.url,u=t.order,h=t.noOrder,f=t.isValue,b=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(y,{show:v,hasArrow:E.hasArray(o)||b,hasClick:E.isString(m),order:h?null:u,onClick:this.onClick},l&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},l),a&&p.a.createElement("span",{className:"c0"},a),l&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&l&&[p.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(E.hasArray(o)||b)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(m)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),s,d&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(531);var r=a(532),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),p=a.n(i),m=a(88),d=a(530),u=a(551),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,h.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);