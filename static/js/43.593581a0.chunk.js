(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[43],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),p=a(306),m={title:"\u91cd\u5199",data:[{keyword:"extends @override",pro:"\u91cd\u5199\u7ee7\u627f\u7684\u65b9\u6cd5",code:[{path:"dart/grammar/class/override/extends"}]},{keyword:"implements @override",pro:"\u91cd\u5199\u63a5\u53e3\u7684\u65b9\u6cd5",code:[{path:"dart/grammar/class/override/implements"}]}]},u=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},302:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),p=window.$http,m=window.$fn,u=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.getText=function(e){p.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){p.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return m.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},303:function(e,t,a){"use strict";a(304);var n=a(305),r=(a(101),a(21)),c=a(9),s=a(10),o=a(12),l=a(11),i=a(13),p=a(0),m=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,s=e.onClick;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(r.a,{className:"f14",type:"share-alt"}),m.a.createElement("span",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=a(302);a.d(t,"a",function(){return y});var h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,s=t.children,o=t.pro,l=t.keyword,i=t.code,p=t.isGray,y=t.link,f=t.url,b=t.order,w=t.noOrder,k=this.state.show;return m.a.createElement("section",null,m.a.createElement(u,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},l),a&&m.a.createElement("span",{className:"c0"},a),o&&(a||l)?m.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[m.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],o&&m.a.createElement("span",{className:"g6 f13",key:2},o)),m.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:h.hasArray(y)?"10px 0 5px":"10px 0"},onClick:h.stop},void 0!==k&&h.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(d.a,{type:"text",url:e.path}))}),s,f&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(y)&&m.a.createElement("div",{className:"mt10"},y.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(m.a.Component)},306:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),p=a(71),m=a(303),u=window.$fn,d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(p.a,{className:"page-content"},u.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);