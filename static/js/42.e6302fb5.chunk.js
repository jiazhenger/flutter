(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[42],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),i=a(0),l=a.n(i),u=a(69),p=a(274),m=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("MaterialApp()")}},{key:"render",value:function(){return l.a.createElement(u.a,{className:"page-content"},l.a.createElement(p.a,{keyword:"MaterialApp()",pro:"\u5165\u53e3\u914d\u7f6e",code:[{path:"flutter/app/MaterialApp"}]}))}}]),t}(l.a.Component)},273:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),i=a(0),l=a.n(i),u=window.$http,p=window.$fn,m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),l.a.createElement("section",null,e.length>0?l.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return l.a.createElement("dt",{key:t},t+1)})),l.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(l.a.Component)},274:function(e,t,a){"use strict";var n=a(9),r=a(10),c=a(12),s=a(11),o=a(13),i=a(0),l=a.n(i),u=(a(98),a(22)),p=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.onClick;return l.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:r},l.a.createElement("div",{className:"fxm"},l.a.createElement(u.a,{className:"f20",type:"share-alt"}),l.a.createElement("span",{className:"ml10"},t)),a&&l.a.createElement("span",{className:"c0"},l.a.createElement(u.a,{className:"f24",type:n?"up-circle":"down-circle"})))},m=a(273);a.d(t,"a",function(){return d});var h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={},a.onClick=function(){a.setState({show:!a.state.show},function(){a.props.url?a.state.show&&(h.hidePhone(),setTimeout(function(){h.showPhone(a.props.url)},100)):h.hidePhone()})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({show:this.props.show},function(){e.props.showPhone?setTimeout(function(){h.showPhone(e.props.url)},100):h.hidePhone()})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.pro,r=e.keyword,c=e.code,s=e.isGray,o=this.state.show;return l.a.createElement("section",null,l.a.createElement(p,{show:o,hasArrow:!0,onClick:this.onClick},r&&l.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(s?"gray":""),style:{cursor:"text"}},r),t&&l.a.createElement("span",{className:"c0"},t),n&&(t||r)?l.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,n&&l.a.createElement("span",{className:"g6 f13",key:1},n)),l.a.createElement("div",{className:o?"":"dn",style:{padding:"10px 0"}},void 0!==o&&h.hasArray(c)&&c.map(function(e,t){return l.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&l.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),l.a.createElement(m.a,{type:"text",url:e.path}))}),a))}}]),t}(l.a.Component)}}]);