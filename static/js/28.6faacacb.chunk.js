(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[28],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(5),r=a(6),s=a(8),i=a(7),c=a(9),o=a(0),l=a.n(o),u=a(86),m=a(510),p=a(514),h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){h.setTitle("\u52a8\u753b"),h.hidePhone()}},{key:"render",value:function(){var e=this;return l.a.createElement(u.a,{className:"page-content"},l.a.createElement(m.a,{order:1,keyword:"transition-property",pro:"CSS\u5c5e\u6027",code:[{path:"css/style/transition/transition-property"}]}),l.a.createElement(m.a,{order:2,keyword:"transition-duration",pro:"\u8fc7\u6e21\u65f6\u95f4",code:[{path:"css/style/transition/transition-duration"}]}),l.a.createElement(m.a,{order:3,keyword:"transition-delay",pro:"\u5ef6\u8fdf\u65f6\u95f4",code:[{path:"css/style/transition/transition-delay"}]}),l.a.createElement(m.a,{order:4,keyword:"transition-timing-function",pro:"\u8fc7\u6e21\u6548\u679c",code:[{path:"css/style/transition/transition-timing-function"}]}),l.a.createElement(m.a,{keyword:"transition",pro:"\u590d\u5408\u5c5e\u6027",code:[{path:"css/style/transition/transition"}]}),l.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},l.a.createElement("div",{className:"transition-case",style:{height:"50px",background:"red",transitionProperty:this.state.transitionProperty,transitionDuration:this.state.transitionDuration,transitionDelay:this.state.transitionDelay,transitionTimingFunction:this.state.transitionTimingFunction}}),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionProperty:t})},data:{radio:["all","background","width","height","background,width,height"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-property:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionDuration:t})},data:{radio:["0s",".5s","2s","3s","5s"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-duration:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionDelay:t})},data:{radio:["0s",".5s","2s"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-delay:")),l.a.createElement(p.a,{getValue:function(t){return e.setState({transitionTimingFunction:t})},data:{radio:["ease","linear","ease-in","ease-out","ease-in-out"]}},l.a.createElement("b",{className:"c1 mr10"},"transition-timing-function:"))))}}]),t}(l.a.Component)},510:function(e,t,a){"use strict";a(511);var n=a(512),r=(a(116),a(22)),s=a(5),i=a(6),c=a(8),o=a(7),l=a(9),u=a(0),m=a.n(u),p=function(e){var t=e.children,a=e.hasArrow,n=e.show,s=e.order,i=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||i?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},s?m.a.createElement("span",null,s,"\u3001"):m.a.createElement(r.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),i&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:"right-circle"})))},h=window.$http,d=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return E});var f=window.$fn,E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(f.hasArray(t)||r)&&a.setState({show:!a.state.show}),f.isString(n)&&a.props.history.push(n)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,i=t.children,c=t.pro,o=t.keyword,l=t.code,u=t.isGray,h=t.link,d=t.url,E=t.order,b=t.noOrder,w=t.isValue,g=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(p,{show:v,hasArrow:f.hasArray(l)||g,hasClick:f.isString(h),order:b?null:E,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!w?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),s&&o&&[m.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(f.hasArray(l)||g)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(h)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(l)&&l.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(y,{type:"text",url:e.path}))}),i,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(h)&&m.a.createElement("div",{className:"mt10"},h.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},514:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(515);var n=a(516),r=a(28),s=a(5),i=a(6),c=a(8),o=a(7),l=a(9),u=a(0),m=a.n(u),p=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,s=a.data,i=a.children,c=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,t),Object(r.a)(e,"color","#888"),e)},i||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},p.hasArray(s.radio)&&s.radio.map(function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(m.a.Component)}}]);