(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[34],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),c=a(10),r=a(12),l=a(11),s=a(13),o=a(0),i=a.n(o),u=a(71),p=a(277),m=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("\u5176\u5b83\u9009\u62e9\u5668"),m.hidePhone()}},{key:"render",value:function(){return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(p.a,{keyword:"::-webkit-input-placeholder",pro:"\u9009\u62e9 placeholder",code:[{path:"css/selector/other/placeholder"}]}))}}]),t}(i.a.Component)},276:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),c=a(10),r=a(12),l=a(11),s=a(13),o=a(0),i=a.n(o),u=window.$http,p=window.$fn,m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},277:function(e,t,a){"use strict";a(278);var n=a(279),c=a(9),r=a(10),l=a(12),s=a(11),o=a(13),i=a(0),u=a.n(i),p=(a(101),a(21)),m=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.onClick;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:c},u.a.createElement("div",{className:"fxm"},u.a.createElement(p.a,{className:"f20",type:"share-alt"}),u.a.createElement("span",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(p.a,{className:"f24",type:n?"up-circle":"down-circle"})))},h=a(276);a.d(t,"a",function(){return f});var d=window.$fn,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){d.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.children,r=t.pro,l=t.keyword,s=t.code,o=t.isGray,i=t.link,p=t.url,f=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:f,hasArrow:!0,onClick:this.onClick},l&&u.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(o?"gray":""),style:{cursor:"text"}},l),a&&u.a.createElement("span",{className:"c0"},a),r&&(a||l)?u.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,r&&u.a.createElement("span",{className:"g6 f13",key:1},r)),u.a.createElement("div",{className:"rel ".concat(f?"":"dn"),style:{padding:"10px 0"}},void 0!==f&&d.hasArray(s)&&s.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),u.a.createElement(h.a,{type:"text",url:e.path}))}),c,(i||p)&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i&&u.a.createElement(n.a,{size:"small",onClick:function(){return e.props.history.push(i)},style:{fontSize:"12px"}},"\u5173\u8054"),p&&u.a.createElement(n.a,{type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8"))))}}]),t}(u.a.Component)}}]);