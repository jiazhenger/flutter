(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[23],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),u=a(69),p=a(250),m=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("Colors \u5185\u7f6e\u989c\u8272")}},{key:"render",value:function(){return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(p.a,{title:"Colors \u5185\u7f6e\u989c\u8272",url:"Colors",code:[{path:"flutter/color/Colors"}]}),i.a.createElement(p.a,{title:"\u5341\u516d\u8fdb\u5236\u989c\u8272",url:"color16",code:[{path:"flutter/color/0x"}]}),i.a.createElement(p.a,{title:"RGBA \u989c\u8272",url:"rgba",code:[{path:"flutter/color/rgba"}]}))}}]),t}(i.a.Component)},249:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),u=window.$http,p=window.$fn,m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},250:function(e,t,a){"use strict";var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),u=(a(98),a(22)),p=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.onClick;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:r},i.a.createElement("div",{className:"fxm"},i.a.createElement(u.a,{className:"f20",type:"share-alt"}),i.a.createElement("span",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},i.a.createElement(u.a,{className:"f24",type:n?"up-circle":"down-circle"})))},m=a(249);a.d(t,"a",function(){return d});var h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){a.setState({show:!a.state.show},function(){a.props.url?a.state.show&&(h.hidePhone(),setTimeout(function(){h.showPhone(a.props.url)},100)):h.hidePhone()})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({show:this.props.show},function(){e.props.showPhone?setTimeout(function(){h.showPhone(e.props.url)},100):h.hidePhone()})}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.pro,r=e.keyword,c=e.code,o=this.state.show;return i.a.createElement("section",null,i.a.createElement(p,{show:o,hasArrow:!0,onClick:this.onClick},r&&i.a.createElement("span",{className:"c0 ar f16",style:{cursor:"text"}},r),t&&i.a.createElement("span",{className:"c0"},t),n&&(t||r)?i.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,n&&i.a.createElement("span",{className:"g6 f13",key:1},n)),i.a.createElement("div",{className:o?"":"dn",style:{padding:"10px 0"}},void 0!==o&&h.hasArray(c)&&c.map(function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),i.a.createElement(m.a,{type:"text",url:e.path}))}),a))}}]),t}(i.a.Component)}}]);