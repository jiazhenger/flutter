(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[40],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(9),n=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=a(291),m={title:"\u6570\u636e\u7c7b\u578b\u53d8\u91cf\u58f0\u660e",data:[{keyword:"num",pro:"\u6570\u5b57\u7c7b\u578b",code:[{path:"dart/grammar/var/type/num"}]},{keyword:"String",pro:"\u5b57\u7b26\u4e32\u7c7b\u578b",code:[{path:"dart/grammar/var/type/string"}]},{keyword:"bool",pro:"\u5e03\u5c14\u7c7b\u578b",code:[{path:"dart/grammar/var/type/bool"}]},{keyword:"List",pro:"\u5217\u8868\u7c7b\u578b",code:[{path:"dart/grammar/var/type/list"}]},{keyword:"Set",pro:"\u96c6\u5408\u7c7b\u578b",code:[{path:"dart/grammar/var/type/set"}]},{keyword:"Map",pro:"\u6620\u5c04\u7c7b\u578b",code:[{path:"dart/grammar/var/type/map"}]},{keyword:"dynamic",pro:"\u65e0\u7c7b\u578b",code:[{path:"dart/grammar/var/type/dynamic"}]},{keyword:"Object",pro:"\u901a\u7528\u7c7b\u578b",code:[{path:"dart/grammar/var/type/object"}]},{keyword:"Symbol",pro:"\u7b26\u53f7\u7c7b\u578b",code:[{path:"dart/grammar/var/type/symbols"}]},{noOrder:!0,pro:"\u901a\u7528",code:[{path:"dart/grammar/var/type/all"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},286:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(9),n=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=window.$http,m=window.$fn,d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){p.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){p.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return m.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},287:function(e,t,a){"use strict";a(288);var r=a(289),n=(a(101),a(21)),c=a(9),o=a(10),s=a(12),l=a(11),i=a(13),p=a(0),m=a.n(p),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,o=e.onClick;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:o},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("span",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})))},u=a(286);a.d(t,"a",function(){return h});var y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,o=t.children,s=t.pro,l=t.keyword,i=t.code,p=t.isGray,h=t.link,f=t.url,b=t.order,w=t.noOrder,k=this.state.show;return m.a.createElement("section",null,m.a.createElement(d,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},l),a&&m.a.createElement("span",{className:"c0"},a),s&&(a||l)?m.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),m.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:y.hasArray(h)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==k&&y.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),m.a.createElement(u.a,{type:"text",url:e.path}))}),o,f&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(h)&&m.a.createElement("div",{className:"mt10"},h.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(m.a.Component)},291:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(9),n=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=a(71),m=a(287),d=window.$fn,u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(p.a,{className:"page-content"},d.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);