(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[25],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(6),r=a(7),c=a(9),l=a(8),s=a(10),o=a(0),i=a.n(o),p=a(76),m=a(360),u=a(364),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={borderCollapse:"separate",borderSpacing:"5px",captionSide:"top"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u663e\u793a\u53ca\u9690\u85cf"),d.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,{className:"page-content"},i.a.createElement(m.a,{order:1,keyword:"border-collapse",pro:"\u8fb9\u6846\u72ec\u7acb\u4e0e\u5408\u5e76",code:[{path:"css/style/table/border-collapse"}]}),i.a.createElement(m.a,{order:2,keyword:"border-spacing",pro:"\u76f8\u90bb\u5355\u5143\u683c\u7684\u8fb9\u6846\u95f4\u7684\u8ddd\u79bb",code:[{path:"css/style/table/border-spacing"}]}),i.a.createElement(m.a,{order:3,keyword:"caption-side",isGray:!0,pro:"\u76f8\u90bb\u5355\u5143\u683c\u7684\u8fb9\u6846\u95f4\u7684\u8ddd\u79bb",code:[{path:"css/style/table/caption-side"}]}),i.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},i.a.createElement("div",null,i.a.createElement("table",{className:"test-table",style:{borderCollapse:this.state.borderCollapse,borderSpacing:this.state.borderSpacing}},i.a.createElement("caption",{className:"nowrap",style:{captionSide:this.state.captionSide}},"\u8868\u683c\u6807\u9898"),i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u6807\u9898"),i.a.createElement("th",null,"\u6807\u9898"),i.a.createElement("th",null,"\u6807\u9898"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"\u5185\u5bb9"),i.a.createElement("td",null,"\u5185\u5bb9"),i.a.createElement("td",null,"\u5185\u5bb9"))))),i.a.createElement(u.a,{getValue:function(t){return e.setState({borderCollapse:t})},data:{radio:["separate","collapse"]}},i.a.createElement("b",{className:"c1"},"border-collapse:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({borderSpacing:t})},data:{radio:["10px","20px","10px 20px"]}},i.a.createElement("b",{className:"c1"},"border-spacing:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({captionSide:t})},data:{radio:["top","left","right","bottom"]}},i.a.createElement("b",{className:"c1"},"caption-side:"))))}}]),t}(i.a.Component)},360:function(e,t,a){"use strict";a(361);var n=a(362),r=(a(106),a(22)),c=a(6),l=a(7),s=a(9),o=a(8),i=a(10),p=a(0),m=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(r.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:"right-circle"})))},d=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return f});var b=window.$fn,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,p=t.isGray,d=t.link,h=t.url,f=t.order,E=t.noOrder,v=t.isValue,w=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(u,{show:g,hasArrow:b.hasArray(i)||w,hasClick:b.isString(d),order:E?null:f,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!v?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),c&&o&&[m.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(b.hasArray(i)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:b.hasArray(d)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(y,{type:"text",url:e.path}))}),l,h&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(d)&&m.a.createElement("div",{className:"mt10"},d.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},364:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(365);var n=a(366),r=a(28),c=a(6),l=a(7),s=a(9),o=a(8),i=a(10),p=a(0),m=a.n(p),u=window.$fn,d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,s=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(m.a.Component)}}]);