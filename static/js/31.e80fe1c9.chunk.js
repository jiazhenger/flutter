(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[31],{445:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(3),r=a(4),c=a(6),s=a(5),l=a(0),o=a.n(l),i=a(86),m=a(581),p=a(586),u=window.$fn,h=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){u.setTitle("\u5b57\u7b26\u4e32\u7c7b\u578b"),u.hidePhone()}},{key:"render",value:function(){return o.a.createElement(i.a,{className:"page-content"},o.a.createElement(m.a,{order:1,pro:"\u7c7b\u578b\u58f0\u660e",code:[{path:"js/grammar/data-type/string/base"}]}),o.a.createElement(m.a,{order:2,pro:"\u521b\u5efa\u5bf9\u8c61",code:[{path:"js/grammar/data-type/string/create"}]},o.a.createElement(p.a,null,o.a.createElement("li",null,"var str = ",o.a.createElement("b",null,"String"),"(123) ",o.a.createElement("u",null,"=> ",String(123))))),o.a.createElement(m.a,{order:3,pro:"\u5b57\u7b26\u4e32\u62fc\u63a5",code:[{path:"js/grammar/data-type/string/concat"}]}),o.a.createElement(m.a,Object.assign({pro:"\u5c5e\u6027",link:"/js/object/string/property"},this.props)),o.a.createElement(m.a,Object.assign({pro:"\u65b9\u6cd5",link:"/js/object/string/method"},this.props)))}}]),a}(o.a.Component)},581:function(e,t,a){"use strict";a(582);var n=a(583),r=a(3),c=a(4),s=a(6),l=a(5),o=a(0),i=a.n(o),m=a(598),p=a(599),u=a(600),h=a(601),d=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(h.a,{className:"f24"})))},y=window.$http,f=window.$fn,E=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),b=a(602);a.d(t,"a",(function(){return w}));var v=window.$fn,w=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(v.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),v.isString(n)&&e.props.history.push(n)},e.onShow=function(){v.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,m=t.deviceTitle,p=t.isGray,u=t.link,h=t.url,y=t.order,f=t.noOrder,w=t.isValue,k=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(d,{show:N,hasArrow:v.hasArray(o)||k||c,hasClick:v.isString(u),order:f?null:y,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},l),a&&i.a.createElement("span",{className:"c0"},a),l&&!w?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&l&&[i.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==N&&(v.hasArray(o)||k||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:v.hasArray(u)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(E,{type:"text",url:e.path}))})),c,h&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(3),r=a(4),c=a(6),s=a(5),l=a(0),o=a.n(l),i=window.$fn,m=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.sub,r=e.className;return o.a.createElement("section",{className:"case-js ".concat(r||"")},t&&o.a.createElement("h2",{className:"b",style:{fontSize:"16px",color:i.c0}},t),n&&o.a.createElement(o.a.Fragment,null,i.hasArray(n)?n.map((function(e,t){return o.a.createElement("h3",{key:t,className:"tj",style:{fontSize:"13px",color:"#999"}},t+1,"\u3001",e)})):o.a.createElement("h3",{className:"tj",style:{fontSize:"13px",color:"#999"}},n)),o.a.createElement("ul",{className:"js-code-list"},a))}}]),a}(o.a.Component)}}]);