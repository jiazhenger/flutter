(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[307],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(4),r=a(5),c=a(7),s=a(6),l=a(8),o=a(0),i=a.n(o),m=a(88),p=a(559),u=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u.setTitle("\u7b26\u53f7\u7c7b\u578b"),u.hidePhone()}},{key:"render",value:function(){return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{pro:"\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/type/symbols"}]}),i.a.createElement(p.a,{pro:"\u83b7\u53d6\u53d6\u5305\u4fe1\u606f",code:[{path:"dart/grammar/data-type/symbols/base"}]}))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var n=a(561),r=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(576),u=a(577),h=a(578),d=a(579),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(h.a,{className:"f24"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(d.a,{className:"f24"})))},f=window.$http,E=window.$fn,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(580);a.d(t,"a",function(){return v});var k=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(k.hasArray(t)||r)&&a.setState({show:!a.state.show}),k.isString(n)&&a.props.history.push(n)},a.onShow=function(){k.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,h=t.order,d=t.noOrder,f=t.isValue,E=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:v,hasArrow:k.hasArray(o)||E,hasClick:k.isString(p),order:d?null:h,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&l&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(k.hasArray(o)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:k.hasArray(p)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(w,{type:"text",url:e.path}))}),c,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)}}]);