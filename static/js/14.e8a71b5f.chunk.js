(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[14],{173:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return h});var n=t(4),r=t(5),i=t(7),o=t(6),c=t(8),s=t(0),l=t.n(s),m=t(88),u=t(530),d=t(534),p=window.$fn,h=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={},t}return Object(c.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u52a8\u753b"),p.hidePhone()}},{key:"render",value:function(){var e=this;return l.a.createElement(m.a,{className:"page-content"},l.a.createElement(u.a,{order:1,keyword:"animation-name",pro:"\u52a8\u753b\u540d\u79f0",code:[{path:"css/style/animation/animation-name"}]}),l.a.createElement(u.a,{order:2,keyword:"animation-duration",pro:"\u64ad\u653e\u4e00\u6b21\u9700\u8981\u7684\u65f6\u95f4",code:[{path:"css/style/animation/animation-duration"}]}),l.a.createElement(u.a,{order:3,keyword:"animation-delay",pro:"\u5ef6\u8fdf\u64ad\u653e\u65f6\u95f4",code:[{path:"css/style/animation/animation-delay"}]}),l.a.createElement(u.a,{order:4,keyword:"animation-timing-function",pro:"\u8fc7\u6e21\u6548\u679c",code:[{path:"css/style/animation/animation-timing-function"}]}),l.a.createElement(u.a,{order:5,keyword:"animation-iteration-count",pro:"\u5faa\u73af\u6b21\u6570",code:[{path:"css/style/animation/animation-iteration-count"}]}),l.a.createElement(u.a,{order:6,keyword:"animation-direction",pro:"\u64ad\u653e\u7684\u65b9\u5411",code:[{path:"css/style/animation/animation-direction"}]}),l.a.createElement(u.a,{order:7,keyword:"animation-fill-mode",pro:"\u64ad\u653e\u5b8c\u540e\u7684\u72b6\u6001",code:[{path:"css/style/animation/animation-fill-mode"}]}),l.a.createElement(u.a,{order:8,keyword:"animation-play-state",pro:"\u64ad\u653e\u72b6\u6001",code:[{path:"css/style/animation/animation-play-state"}]}),l.a.createElement(u.a,{keyword:"animation",pro:"\u590d\u5408\u5c5e\u6027",code:[{path:"css/style/animation/animation"}]}),l.a.createElement(u.a,{pro:"\u793a\u4f8b",hasShow:!0},l.a.createElement("div",{className:"rel",style:{height:"50px",background:"red",animationName:"animationName",animationDuration:this.state.animationDuration,animationDelay:this.state.animationDelay,animationTimingFunction:this.state.animationTimingFunction,animationIterationCount:this.state.animationIterationCount,animationDirection:this.state.animationDirection,animationFillMode:this.state.animationFillMode,animationPlayState:this.state.animationPlayState}}),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationDuration:a})},data:{radio:["0s",".5s","2s","3s","5s"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-duration:"),"\u8fc7\u6e21\u65f6\u95f4(\u5fc5\u9009)"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationDelay:a})},data:{radio:["0s",".5s","2s"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-delay:"),"\u5ef6\u8fdf\u65f6\u95f4"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationTimingFunction:a})},data:{radio:["ease","linear","ease-in","ease-out","ease-in-out"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-timing-function:"),"\u8fc7\u6e21\u6548\u679c"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationIterationCount:a})},data:{radio:["1","infinite"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-iteration-count:"),"\u5faa\u73af\u6b21\u6570"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationDirection:a})},data:{radio:["normal","reverse","alternate","alternate-reverse"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-direction:"),"\u65b9\u5411"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationFillMode:a})},data:{radio:["none","forwards","backwards","both"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-fill-mode:"),"\u64ad\u653e\u5b8c\u540e\u7684\u72b6\u6001"),l.a.createElement(d.a,{getValue:function(a){return e.setState({animationPlayState:a})},data:{radio:["running","paused"]}},l.a.createElement("b",{className:"c1 mr10"},"animation-play-state:")," \u64ad\u653e\u4e0e\u6682\u505c")))}}]),a}(l.a.Component)},530:function(e,a,t){"use strict";t(531);var n=t(532),r=t(4),i=t(5),o=t(7),c=t(6),s=t(8),l=t(0),m=t.n(l),u=t(547),d=t(548),p=t(549),h=t(550),y=function(e){var a=e.children,t=e.hasArrow,n=e.show,r=e.order,i=e.hasClick,o=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(t||i?"cp tap":""),style:{userSelect:"none"},onClick:o},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(u.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},a)),t&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(d.a,{className:"f24"}):m.a.createElement(p.a,{className:"f24"})),i&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},f=window.$http,E=window.$fn,b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).state={data:[]},t.getText=function(e){f.getText(e).then(function(e){t.setState({data:e.split("\n")})})},t.getDart=function(e){f.getDart(e).then(function(e){t.setState({data:e.split("\n")})})},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,a=this.props,t=a.type,n=a.url;return E.hasArray(this.state.data)||this.props.async||("text"===t?this.getText(n):"dart"===t&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,a){return m.a.createElement("dt",{key:a},a+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,a){return m.a.createElement("dd",{key:a,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(m.a.Component),w=t(551);t.d(a,"a",function(){return k});var v=window.$fn,k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).state={},t.onClick=function(){var e=t.props,a=e.code,n=e.link,r=e.hasShow;(v.hasArray(a)||r)&&t.setState({show:!t.state.show}),v.isString(n)&&t.props.history.push(n)},t.onShow=function(){v.showPhone(t.props.url)},t}return Object(s.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.props,t=a.title,r=a.type,i=a.children,o=a.pro,c=a.keyword,s=a.code,l=a.isGray,u=a.link,d=a.url,p=a.order,h=a.noOrder,f=a.isValue,E=a.hasShow,k=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:k,hasArrow:v.hasArray(s)||E,hasClick:v.isString(u),order:h?null:p,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(l?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},c),t&&m.a.createElement("span",{className:"c0"},t),c&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&c&&[m.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],o&&m.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==k&&(v.hasArray(s)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:v.hasArray(u)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(s)&&s.map(function(e,a){return m.a.createElement("div",{key:a,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(b,{type:"text",url:e.path}))}),i,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(a,t){return m.a.createElement(n.a,{key:t,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(a.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},a.title))}))):null)}}]),a}(m.a.Component)},534:function(e,a,t){"use strict";t.d(a,"a",function(){return p});t(535);var n=t(536),r=t(117),i=t(4),o=t(5),c=t(7),s=t(6),l=t(8),m=t(0),u=t.n(m),d=window.$fn,p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.onChange=function(e){var a=e.target.value;t.setState({value:a},function(){t.props.getValue&&t.props.getValue(a)})},t}return Object(l.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,a=this.state.value,t=this.props,i=t.data,o=t.children,c=t.styleName;return u.a.createElement("section",{className:"bor1 r5px p10 mtb10"},u.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,a),Object(r.a)(e,"color","#888"),e)},o||"\u6d4b\u8bd5\u6837\u4f8b test case"),u.a.createElement(n.a.Group,{onChange:this.onChange,value:a},d.hasArray(i.radio)&&i.radio.map(function(e,a){return u.a.createElement(n.a,{key:a,value:e},u.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),a}(u.a.Component)}}]);