(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[23],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(4),r=a(5),c=a(7),s=a(6),l=a(8),o=a(0),i=a.n(o),u=a(88),m=a(530),p=a(534),h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){h.setTitle("\u5176\u5b83"),h.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(m.a,{order:1,keyword:"resize",pro:"\u5141\u8bb8\u7528\u6237\u8c03\u6574\u5143\u7d20\u5927\u5c0f",code:[{path:"css/style/other/resize"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({resize:t})},data:{radio:["none","both","horizontal","vertical"]}},i.a.createElement("div",{className:"p10",style:{height:"50px",overflow:"auto",background:"yellow",resize:this.state.resize}}))),i.a.createElement(m.a,{order:2,keyword:"appearance",pro:"\u5141\u8bb8\u4f7f\u5143\u7d20\u770b\u4e0a\u53bb\u50cf\u6807\u51c6\u7684\u7528\u6237\u754c\u9762\u5143\u7d20",code:[{path:"css/style/other/appearance"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({appearance:t})},data:{radio:["none","normal","icon","window","button","menu","field"]}},i.a.createElement("div",{style:{height:"50px",WebkitAppearance:this.state.appearance}}))),i.a.createElement(m.a,{order:3,keyword:"user-select",pro:"\u662f\u5426\u5141\u8bb8\u7528\u6237\u9009\u4e2d\u6587\u672c",code:[{path:"css/style/other/user-select"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({userSelect:t})},data:{radio:["text","none","element","all"]}},i.a.createElement("div",{style:{height:"50px",userSelect:this.state.userSelect}},"\u662f\u5426\u5141\u8bb8\u7528\u6237\u9009\u4e2d\u6587\u672c"))))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),u=a.n(i),m=a(547),p=a(548),h=a(549),d=a(550),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},u.a.createElement("div",{className:"fxm"},r?u.a.createElement("span",null,r,"\u3001"):u.a.createElement(m.a,{className:"f14"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},n?u.a.createElement(p.a,{className:"f24"}):u.a.createElement(h.a,{className:"f24"})),c&&u.a.createElement("span",{className:"c0"},u.a.createElement(d.a,{className:"f24"})))},f=window.$http,E=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component),b=a(551);a.d(t,"a",function(){return k});var w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(w.hasArray(t)||r)&&a.setState({show:!a.state.show}),w.isString(n)&&a.props.history.push(n)},a.onShow=function(){w.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,i=t.isGray,m=t.link,p=t.url,h=t.order,d=t.noOrder,f=t.isValue,E=t.hasShow,k=this.state.show;return u.a.createElement("section",null,u.a.createElement(y,{show:k,hasArrow:w.hasArray(o)||E,hasClick:w.isString(m),order:d?null:h,onClick:this.onClick},l&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},l),a&&u.a.createElement("span",{className:"c0"},a),l&&!f?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),r&&l&&[u.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==k&&(w.hasArray(o)||E)?u.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:w.hasArray(m)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(o)&&o.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(v,{type:"text",url:e.path}))}),c,p&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},534:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(535);var n=a(536),r=a(117),c=a(4),s=a(5),l=a(7),o=a(6),i=a(8),u=a(0),m=a.n(u),p=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,s=a.children,l=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,l,t),Object(r.a)(e,"color","#888"),e)},s||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},p.hasArray(c.radio)&&c.radio.map(function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(m.a.Component)}}]);