(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[54],{197:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),i=a(0),l=a.n(i),m=a(307),p={title:"\u53d8\u91cf\u58f0\u660e",data:[{keyword:"var/final/const",pro:"\u53d8\u91cf\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var"}]},{keyword:"dynamic",pro:"\u6570\u636e\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/type"}]},{keyword:"final/const + dynamic",pro:"\u53d8\u91cf\u58f0\u660e  + \u6570\u636e\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-dynamic"}]},{keyword:"var/final/const + <T>",pro:"\u53d8\u91cf\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-fan"}]},{keyword:"dynamic + <T>",pro:"\u6570\u636e\u7c7b\u578b\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/dynamic-fan"}]},{keyword:"var/final/const + dynamic + <T>",pro:"\u53d8\u91cf\u58f0\u660e  + \u6570\u636e\u7c7b\u578b\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-dynamic-fan"}]}]},d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(l.a.Component)},303:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),i=a(0),l=a.n(i),m=window.$http,p=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),l.a.createElement("section",null,e.length>0?l.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return l.a.createElement("dt",{key:t},t+1)})),l.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(l.a.Component)},304:function(e,t,a){"use strict";a(305);var n=a(306),r=(a(101),a(21)),c=a(9),o=a(10),s=a(12),i=a(11),l=a(13),m=a(0),p=a.n(m),d=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,o=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},u=a(303);a.d(t,"a",function(){return h});var y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,o=t.children,s=t.pro,i=t.keyword,l=t.code,m=t.isGray,h=t.link,f=t.url,v=t.order,w=t.noOrder,b=this.state.show;return p.a.createElement("section",null,p.a.createElement(d,{show:b,hasArrow:!0,order:w?null:v,onClick:this.onClick},i&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(m?"gray":"")},i),a&&p.a.createElement("span",{className:"c0"},a),s&&(a||i)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),p.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:y.hasArray(h)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==b&&y.hasArray(l)&&l.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(u.a,{type:"text",url:e.path}))}),o,f&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},307:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),i=a(0),l=a.n(i),m=a(71),p=a(304),d=window.$fn,u=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return l.a.createElement(m.a,{className:"page-content"},d.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?l.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,l.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(l.a.Component)}}]);