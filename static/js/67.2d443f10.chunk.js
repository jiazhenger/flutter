(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[67],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),c=a(7),s=a(6),l=a(8),o=a(0),i=a.n(o),m=a(566),p={title:"\u53d8\u91cf\u58f0\u660e",data:[{keyword:"var",pro:"\u58f0\u660e\u4efb\u610f\u53d8\u91cf \uff08\u4e0d\u80fd\u5e26\u6570\u636e\u7c7b\u578b\uff09",code:[{path:"dart/grammar/var/var/var"}]},{keyword:"final",pro:"\u58f0\u660e\u53ef\u6539\u53d8\u4e00\u6b21\u7684\u53d8\u91cf\uff08\u5fc5\u987b\u521d\u59cb\u5316\u53d8\u91cf\uff09",code:[{path:"dart/grammar/var/var/final"}]},{keyword:"const",pro:"\u58f0\u660e\u5e38\u91cf\uff0c\u4e0d\u53ef\u6539\u53d8\uff08\u5fc5\u987b\u521d\u59cb\u5316\u53d8\u91cf\uff09",code:[{path:"dart/grammar/var/var/const"}]},{noOrder:!0,keyword:"??",pro:"\u7ed9\u53d8\u91cf\u8bbe\u6709\u6548\u9ed8\u8ba4\u503c",code:[{path:"dart/grammar/var/var/set-value"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},563:function(e,t,a){"use strict";a(564);var r=a(565),n=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(580),u=a(581),d=a(582),h=a(583),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},n?m.a.createElement("span",null,n,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),E=a(584);a.d(t,"a",function(){return v});var b=window.$fn,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,h=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:v,hasArrow:b.hasArray(o)||w,hasClick:b.isString(p),order:h?null:d,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),n&&l&&[m.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(b.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(k,{type:"text",url:e.path}))}),c,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},566:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(564);var r=a(565),n=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(90),u=a(563),d=a(584),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&m.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(n,{key:t,data:e,index:t+1})}):m.a.createElement(n,{data:t}))}}]),t}(m.a.Component)}}]);