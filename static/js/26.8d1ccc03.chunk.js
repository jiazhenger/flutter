(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[26],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(4),r=a(5),c=a(7),s=a(6),l=a(8),o=a(0),i=a.n(o),m=a(88),h=a(559),u=a(563),p=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){p.setTitle("\u5c3a\u5bf8"),p.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(h.a,{order:1,keyword:"width",pro:"\u5bbd\u5ea6",code:[{path:"css/style/size/width"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({width:t})},data:{radio:["auto","100px","200px","50%","100%"]}},i.a.createElement("div",{style:{height:"50px",background:"yellow",width:this.state.width}}))),i.a.createElement(h.a,{order:2,keyword:"min-width",pro:"\u6700\u5c0f\u5bbd\u5ea6",code:[{path:"css/style/size/min-width"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({minWidth:t})},data:{radio:["0","100px","200px","50%","100%"]}},i.a.createElement("div",{style:{display:"inline-block",height:"50px",background:"yellow",minWidth:this.state.minWidth}},"\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6"))),i.a.createElement(h.a,{order:3,keyword:"max-width",pro:"\u6700\u5927\u5bbd\u5ea6",code:[{path:"css/style/size/max-width"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({maxWidth:t})},data:{radio:["none","100px","200px","50%","100%"]}},i.a.createElement("div",{style:{display:"inline-block",height:"50px",background:"yellow",maxWidth:this.state.maxWidth}},"\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6"))),i.a.createElement(h.a,{order:4,keyword:"height",pro:"\u9ad8\u5ea6",code:[{path:"css/style/size/height"}]}),i.a.createElement(h.a,{order:5,keyword:"min-height",pro:"\u6700\u5c0f\u9ad8\u5ea6",code:[{path:"css/style/size/min-height"}]}),i.a.createElement(h.a,{order:6,keyword:"max-height",pro:"\u6700\u5927\u9ad8\u5ea6",code:[{path:"css/style/size/max-height"}]}),i.a.createElement(h.a,{keyword:"calc()",pro:"\u54cd\u5e94\u5f0f\u8ba1\u7b97\u51fd\u6570",code:[{path:"css/style/size/calc"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({calc:"calc(100% - "+t+")"})},data:{radio:["100px","200px","300px","50%"]}},i.a.createElement("div",{style:{height:"50px",background:"yellow",width:this.state.calc}}))))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var n=a(561),r=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),h=a(576),u=a(577),p=a(578),d=a(579),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(h.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(p.a,{className:"f24"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(d.a,{className:"f24"})))},f=window.$http,w=window.$fn,E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(580);a.d(t,"a",function(){return v});var k=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(k.hasArray(t)||r)&&a.setState({show:!a.state.show}),k.isString(n)&&a.props.history.push(n)},a.onShow=function(){k.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,i=t.isGray,h=t.link,u=t.url,p=t.order,d=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:v,hasArrow:k.hasArray(o)||w,hasClick:k.isString(h),order:d?null:p,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&l&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(k.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:k.hasArray(h)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(E,{type:"text",url:e.path}))}),c,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(h)&&m.a.createElement("div",{className:"mt10"},h.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},563:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(564);var n=a(565),r=a(117),c=a(4),s=a(5),l=a(7),o=a(6),i=a(8),m=a(0),h=a.n(m),u=window.$fn,p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,s=a.children,l=a.styleName;return h.a.createElement("section",{className:"bor1 r5px p10 mtb10"},h.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,l,t),Object(r.a)(e,"color","#888"),e)},s||"\u6d4b\u8bd5\u6837\u4f8b test case"),h.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return h.a.createElement(n.a,{key:t,value:e},h.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(h.a.Component)}}]);