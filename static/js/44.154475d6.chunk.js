(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[44],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),c=a(12),s=a(11),l=a(13),o=a(0),i=a.n(o),u=a(69),m=a(269),p=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){p.setTitle("\u6570\u5b57\u7c7b\u578b"),p.hidePhone()}},{key:"render",value:function(){var e="100.05";return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(m.a,{pro:"\u5b57\u7b26\u4e32\u7c7b\u578b\u58f0\u660e",code:[{path:"js/grammar/data-type/number/base"}]}),i.a.createElement(m.a,{pro:"\u5c06\u5b57\u7b26\u4e32\u8f6c\u4e3a\u6570\u5b57\u76843\u79cd\u65b9\u5f0f",code:[{path:"js/grammar/data-type/number/string-to-num"}]},i.a.createElement("ul",{className:"js-code-list"},i.a.createElement("li",null,"var a = '100.05'"),i.a.createElement("li",null,i.a.createElement("b",null,"a*1")," = ",1*e),i.a.createElement("li",null,i.a.createElement("b",null,"parseInt(a)")," = ",parseInt(e)),i.a.createElement("li",null,i.a.createElement("b",null,"+a")," = ",+e))))}}]),t}(i.a.Component)},268:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(9),r=a(10),c=a(12),s=a(11),l=a(13),o=a(0),i=a.n(o),u=window.$http,m=window.$fn,p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return m.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},269:function(e,t,a){"use strict";var n=a(9),r=a(10),c=a(12),s=a(11),l=a(13),o=a(0),i=a.n(o),u=(a(98),a(22)),m=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.onClick;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:r},i.a.createElement("div",{className:"fxm"},i.a.createElement(u.a,{className:"f20",type:"share-alt"}),i.a.createElement("span",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},i.a.createElement(u.a,{className:"f24",type:n?"up-circle":"down-circle"})))},p=a(268);a.d(t,"a",function(){return d});var h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){a.setState({show:!a.state.show},function(){a.props.url?a.state.show&&(h.hidePhone(),setTimeout(function(){h.showPhone(a.props.url)},100)):h.hidePhone()})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({show:this.props.show},function(){e.props.showPhone?setTimeout(function(){h.showPhone(e.props.url)},100):h.hidePhone()})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.pro,r=e.keyword,c=e.code,s=e.isGray,l=this.state.show;return i.a.createElement("section",null,i.a.createElement(m,{show:l,hasArrow:!0,onClick:this.onClick},r&&i.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(s?"gray":""),style:{cursor:"text"}},r),t&&i.a.createElement("span",{className:"c0"},t),n&&(t||r)?i.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,n&&i.a.createElement("span",{className:"g6 f13",key:1},n)),i.a.createElement("div",{className:l?"":"dn",style:{padding:"10px 0"}},void 0!==l&&h.hasArray(c)&&c.map(function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),i.a.createElement(p.a,{type:"text",url:e.path}))}),a))}}]),t}(i.a.Component)}}]);