(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[32],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(5),n=a(6),s=a(8),c=a(7),l=a(9),o=a(0),i=a.n(o),p=a(487),m={title:"\u57fa\u7840\u9009\u62e9\u5668",data:[{keyword:"*{ }",pro:"\u9009\u62e9\u4efb\u4f55\u5143\u7d20",code:[{path:"css/selector/base/any"}]},{keyword:"div{ }",pro:"html \u5143\u7d20\u9009\u62e9\u5668",code:[{path:"css/selector/base/tag"}]},{keyword:".class{ }",pro:"lass \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/class"}]},{keyword:"#id{ }",pro:"id \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/id"}]},{keyword:"[attr]{ }",pro:"\u5c5e\u6027\u9009\u62e9\u5668",code:[{path:"css/selector/base/attr"}]},{keyword:"div,p,span{ }",pro:"\u5206\u7ec4\u9009\u62e9\u5668",code:[{path:"css/selector/base/group"}]},{keyword:"div.class{ }\u3001.class.class{ }",pro:"\u9650\u5236\u9009\u62e9\u5668",code:[{path:"css/selector/base/limit"}]},{keyword:"div span{ }",pro:"\u5305\u542b\u9009\u62e9\u5668",code:[{path:"css/selector/base/child-all"}]},{keyword:"div>span{ }",pro:"\u5b50\u5bf9\u8c61\u9009\u62e9\u5668",code:[{path:"css/selector/base/child"}]},{keyword:"div+p{ }\u3001div~p{ }",pro:"\u5144\u5f1f\u9009\u62e9\u5668",code:[{path:"css/selector/base/brother"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),s=a(5),c=a(6),l=a(8),o=a(7),i=a(9),p=a(0),m=a.n(p),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,s=e.order,c=e.hasClick,l=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:l},m.a.createElement("div",{className:"fxm"},s?m.a.createElement("span",null,s,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return b});var f=window.$fn,b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,c=t.children,l=t.pro,o=t.keyword,i=t.code,p=t.isGray,u=t.link,h=t.url,b=t.order,w=t.noOrder,k=t.isValue,E=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(d,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(u),order:w?null:b,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(k?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!k?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),s&&o&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],l&&m.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(f.hasArray(i)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(y,{type:"text",url:e.path}))}),c,h&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(485);var r=a(486),n=(a(116),a(22)),s=a(5),c=a(6),l=a(8),o=a(7),i=a(9),p=a(0),m=a.n(p),d=a(86),u=a(484),h=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,s=function(t){var a=t.data,s=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},s&&m.a.createElement("b",{className:"f16 c1"},s,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(s,{key:t,data:e,index:t+1})}):m.a.createElement(s,{data:t}))}}]),t}(m.a.Component)}}]);