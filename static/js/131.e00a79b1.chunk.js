(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[131],{269:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(5),r=a(6),c=a(8),l=a(7),s=a(9),o=a(0),i=a.n(o),m=a(77),p=a(363),u=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u.setTitle("\u6570\u5b57\u7c7b\u578b"),u.hidePhone()}},{key:"render",value:function(){var e="100.05";return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{pro:"\u5b57\u7b26\u4e32\u7c7b\u578b\u58f0\u660e",code:[{path:"js/grammar/data-type/number/base"}]}),i.a.createElement(p.a,{pro:"\u5c06\u5b57\u7b26\u4e32\u8f6c\u4e3a\u6570\u5b57\u76843\u79cd\u65b9\u5f0f",code:[{path:"js/grammar/data-type/number/string-to-num"}]},i.a.createElement("ul",{className:"js-code-list"},i.a.createElement("li",null,"var a = '100.05'"),i.a.createElement("li",null,i.a.createElement("b",null,"a*1")," = ",1*e),i.a.createElement("li",null,i.a.createElement("b",null,"parseInt(a)")," = ",parseInt(e)),i.a.createElement("li",null,i.a.createElement("b",null,"+a")," = ",+e))))}}]),t}(i.a.Component)},363:function(e,t,a){"use strict";a(364);var n=a(365),r=(a(107),a(22)),c=a(5),l=a(6),s=a(8),o=a(7),i=a(9),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},h=window.$http,d=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return E});var f=window.$fn,E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(f.hasArray(t)||r)&&a.setState({show:!a.state.show}),f.isString(n)&&a.props.history.push(n)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,m=t.isGray,h=t.link,d=t.url,E=t.order,b=t.noOrder,w=t.isValue,k=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:v,hasArrow:f.hasArray(i)||k,hasClick:f.isString(h),order:b?null:E,onClick:this.onClick},o&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&p.a.createElement("span",{className:"c0"},a),o&&!w?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),c&&o&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(f.hasArray(i)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(h)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(y,{type:"text",url:e.path}))}),l,d&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)}}]);