(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[3],{309:function(e,t,a){"use strict";a(311);var n=a(312),r=(a(101),a(21)),l=a(9),c=a(10),s=a(12),o=a(11),i=a(13),p=a(0),u=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,n=e.show,l=e.order,c=e.onClick;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:c},u.a.createElement("div",{className:"fxm"},l?u.a.createElement("span",null,l,"\u3001"):u.a.createElement(r.a,{className:"f14",type:"share-alt"}),u.a.createElement("span",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=window.$http,f=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return w});var y=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,c=t.children,s=t.pro,o=t.keyword,i=t.code,p=t.isGray,d=t.link,f=t.url,w=t.order,E=t.noOrder,b=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:b,hasArrow:!0,order:E?null:w,onClick:this.onClick},o&&u.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},o),a&&u.a.createElement("span",{className:"c0"},a),s&&(a||o)?u.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,l&&[u.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),u.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:y.hasArray(d)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==b&&y.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),c,f&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(d)&&u.a.createElement("div",{className:"mt10"},d.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(u.a.Component)},75:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(9),r=a(10),l=a(12),c=a(11),s=a(13),o=a(0),i=a.n(o),p=a(71),u=a(309),m=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{className:"page-content"},i.a.createElement(u.a,{pro:"Flutter sdk \u5b89\u88c5",code:[{title:"Windows",path:"flutter/install/windows-flutter"}]}),i.a.createElement(u.a,{pro:"flutter \u9879\u76ee\u521b\u5efa",code:[{title:"Android",path:"flutter/install/windows-flutter-project"},{title:"pubspec.yaml \u4f9d\u8d56\u914d\u7f6e",path:"flutter/install/pubspec-yaml"}]}),i.a.createElement(u.a,{pro:"flutter \u9879\u76ee\u6253\u5305",code:[{title:"Android",path:"flutter/install/windows-flutter-build"}]}),i.a.createElement(u.a,{pro:"flutter \u547d\u4ee4",code:[{path:"flutter/install/flutter-order"}]}),i.a.createElement(u.a,{pro:"flutter web \u5b89\u88c5",code:[{path:"flutter/install/flutter-web"}]}))}}]),t}(i.a.Component)}}]);