(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[30],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(4),r=a(5),s=a(7),i=a(6),c=a(8),o=a(0),l=a.n(o),u=a(88),m=a(530),p=a(534),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u52a8\u753b"),d.hidePhone()}},{key:"render",value:function(){var e=this;return l.a.createElement(u.a,{className:"page-content"},l.a.createElement(m.a,{order:1,keyword:"transition-property",pro:"CSS\u5c5e\u6027",code:[{path:"css/style/transition/transition-property"}]}),l.a.createElement(m.a,{order:2,keyword:"transition-duration",pro:"\u8fc7\u6e21\u65f6\u95f4",code:[{path:"css/style/transition/transition-duration"}]}),l.a.createElement(m.a,{order:3,keyword:"transition-delay",pro:"\u5ef6\u8fdf\u65f6\u95f4",code:[{path:"css/style/transition/transition-delay"}]}),l.a.createElement(m.a,{order:4,keyword:"transition-timing-function",pro:"\u8fc7\u6e21\u6548\u679c",code:[{path:"css/style/transition/transition-timing-function"}]}),l.a.createElement(m.a,{keyword:"transition",pro:"\u590d\u5408\u5c5e\u6027",code:[{path:"css/style/transition/transition"}]}),l.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},l.a.createElement("div",{className:"transition-case",style:{height:"50px",background:"red",transitionProperty:this.state.transitionProperty,transitionDuration:this.state.transitionDuration,transitionDelay:this.state.transitionDelay,transitionTimingFunction:this.state.transitionTimingFunction}}),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionProperty:t})},data:{radio:["all","background","width","height","background,width,height"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-property:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionDuration:t})},data:{radio:["0s",".5s","2s","3s","5s"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-duration:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionDelay:t})},data:{radio:["0s",".5s","2s"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-delay:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionTimingFunction:t})},data:{radio:["ease","linear","ease-in","ease-out","ease-in-out"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-timing-function:"))))}}]),t}(l.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),s=a(5),i=a(7),c=a(6),o=a(8),l=a(0),u=a.n(l),m=a(547),p=a(548),d=a(549),h=a(550),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,i=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:i},u.a.createElement("div",{className:"fxm"},r?u.a.createElement("span",null,r,"\u3001"):u.a.createElement(m.a,{className:"f14"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},n?u.a.createElement(p.a,{className:"f24"}):u.a.createElement(d.a,{className:"f24"})),s&&u.a.createElement("span",{className:"c0"},u.a.createElement(h.a,{className:"f24"})))},f=window.$http,E=window.$fn,b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component),w=a(551);a.d(t,"a",function(){return g});var v=window.$fn,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(v.hasArray(t)||r)&&a.setState({show:!a.state.show}),v.isString(n)&&a.props.history.push(n)},a.onShow=function(){v.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,i=t.pro,c=t.keyword,o=t.code,l=t.isGray,m=t.link,p=t.url,d=t.order,h=t.noOrder,f=t.isValue,E=t.hasShow,g=this.state.show;return u.a.createElement("section",null,u.a.createElement(y,{show:g,hasArrow:v.hasArray(o)||E,hasClick:v.isString(m),order:h?null:d,onClick:this.onClick},c&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(l?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},c),a&&u.a.createElement("span",{className:"c0"},a),c&&!f?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),r&&c&&[u.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],i&&u.a.createElement("span",{className:"g6 f13",key:2},i)),void 0!==g&&(v.hasArray(o)||E)?u.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:v.hasArray(m)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(o)&&o.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(b,{type:"text",url:e.path}))}),s,p&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},534:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(535);var n=a(536),r=a(117),s=a(4),i=a(5),c=a(7),o=a(6),l=a(8),u=a(0),m=a.n(u),p=window.$fn,d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,s=a.data,i=a.children,c=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,t),Object(r.a)(e,"color","#888"),e)},i||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},p.hasArray(s.radio)&&s.radio.map(function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(m.a.Component)}}]);