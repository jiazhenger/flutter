(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[83],{247:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(4),n=a(5),s=a(7),l=a(6),c=a(8),o=a(0),i=a.n(o),p=a(566),u={title:"\u8def\u7531\u8df3\u8f6c",data:[{keyword:"pushNamed( )",pro:"\u4e00\u822c\u8df3\u8f6c, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-pushNamed"}],url:"RouterPushNamed"},{keyword:"pushReplacementNamed( )",pro:"\u6e05\u9664\u5386\u53f2\u8bb0\u5f55, \u4e0d\u53ef\u8fd4\u56de",code:[{path:"flutter/app/router/router-skip/router-pushReplacementNamed"}],url:"RouterPushReplacementNamed"},{keyword:"push( )",pro:"\u8df3\u8f6c\u5e76\u4f20\u53c2\u6570\u5230\u65b0\u9875\u9762, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-push"},{title:"router-param.dart \u58f0\u660e\u53c2\u6570",path:"flutter/app/router/router-skip/router-param"},{title:"router-dart.dart \u4f7f\u7528\u53c2\u6570",path:"flutter/app/router/router-skip/router-param-use"}],url:"RouterPush"},{keyword:"pop( )",pro:"\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762",code:[{path:"flutter/app/router/router-skip/router-pop"}],url:"RouterPop"},{noOrder:!0,pro:"\u83b7\u53d6\u9875\u9762\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/get-param"}],link:[{title:"settings",url:"/flutter/app/router/settings"}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},563:function(e,t,a){"use strict";a(564);var r=a(565),n=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),u=a(580),m=a(581),d=a(582),h=a(583),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(u.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(m.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),s&&p.a.createElement("span",{className:"c0"},p.a.createElement(h.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),E=a(584);a.d(t,"a",function(){return N});var b=window.$fn,N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,l=t.pro,c=t.keyword,o=t.code,i=t.isGray,u=t.link,m=t.url,d=t.order,h=t.noOrder,f=t.isValue,k=t.hasShow,N=this.state.show;return p.a.createElement("section",null,p.a.createElement(y,{show:N,hasArrow:b.hasArray(o)||k,hasClick:b.isString(u),order:h?null:d,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&c&&[p.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==N&&(b.hasArray(o)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:b.hasArray(u)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),s,m&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(u)&&p.a.createElement("div",{className:"mt10"},u.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},566:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(564);var r=a(565),n=a(4),s=a(5),l=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),u=a(90),m=a(563),d=a(584),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,h.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);