(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[27],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(4),r=a(5),c=a(7),l=a(6),s=a(8),o=a(0),i=a.n(o),m=a(88),p=a(530),u=a(534),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={borderCollapse:"separate",borderSpacing:"5px",captionSide:"top"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u663e\u793a\u53ca\u9690\u85cf"),d.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"border-collapse",pro:"\u8fb9\u6846\u72ec\u7acb\u4e0e\u5408\u5e76",code:[{path:"css/style/table/border-collapse"}]}),i.a.createElement(p.a,{order:2,keyword:"border-spacing",pro:"\u76f8\u90bb\u5355\u5143\u683c\u7684\u8fb9\u6846\u95f4\u7684\u8ddd\u79bb",code:[{path:"css/style/table/border-spacing"}]}),i.a.createElement(p.a,{order:3,keyword:"caption-side",isGray:!0,pro:"\u76f8\u90bb\u5355\u5143\u683c\u7684\u8fb9\u6846\u95f4\u7684\u8ddd\u79bb",code:[{path:"css/style/table/caption-side"}]}),i.a.createElement(p.a,{pro:"\u793a\u4f8b",hasShow:!0},i.a.createElement("div",null,i.a.createElement("table",{className:"test-table",style:{borderCollapse:this.state.borderCollapse,borderSpacing:this.state.borderSpacing}},i.a.createElement("caption",{className:"nowrap",style:{captionSide:this.state.captionSide}},"\u8868\u683c\u6807\u9898"),i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u6807\u9898"),i.a.createElement("th",null,"\u6807\u9898"),i.a.createElement("th",null,"\u6807\u9898"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"\u5185\u5bb9"),i.a.createElement("td",null,"\u5185\u5bb9"),i.a.createElement("td",null,"\u5185\u5bb9"))))),i.a.createElement(u.a,{getValue:function(t){return e.setState({borderCollapse:t})},data:{radio:["separate","collapse"]}},i.a.createElement("b",{className:"c1"},"border-collapse:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({borderSpacing:t})},data:{radio:["10px","20px","10px 20px"]}},i.a.createElement("b",{className:"c1"},"border-spacing:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({captionSide:t})},data:{radio:["top","left","right","bottom"]}},i.a.createElement("b",{className:"c1"},"caption-side:"))))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),c=a(5),l=a(7),s=a(6),o=a(8),i=a(0),m=a.n(i),p=a(547),u=a(548),d=a(549),h=a(550),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,l=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:l},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},b=window.$http,f=window.$fn,E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){b.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){b.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),v=a(551);a.d(t,"a",function(){return g});var w=window.$fn,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(w.hasArray(t)||r)&&a.setState({show:!a.state.show}),w.isString(n)&&a.props.history.push(n)},a.onShow=function(){w.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,l=t.pro,s=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,h=t.noOrder,b=t.isValue,f=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:g,hasArrow:w.hasArray(o)||f,hasClick:w.isString(p),order:h?null:d,onClick:this.onClick},s&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},s),a&&m.a.createElement("span",{className:"c0"},a),s&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&s&&[m.a.createElement(v.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],l&&m.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==g&&(w.hasArray(o)||f)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:w.hasArray(p)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(E,{type:"text",url:e.path}))}),c,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},534:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(535);var n=a(536),r=a(117),c=a(4),l=a(5),s=a(7),o=a(6),i=a(8),m=a(0),p=a.n(m),u=window.$fn,d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,s=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);