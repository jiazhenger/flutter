(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[61],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),s=a(7),c=a(6),l=a(8),o=a(0),i=a.n(o),m=a(562),p={title:"\u5224\u65ad\u8bed\u53e5",data:[{keyword:"for",pro:"List\u3001Set\u3001Map",code:[{path:"dart/grammar/statement/for/for"}]},{keyword:"for in",pro:"List\u3001Set",code:[{path:"dart/grammar/statement/for/for-in"}]},{keyword:"do-while",pro:"List\u3001Set\u3001Map",code:[{path:"dart/grammar/statement/for/while"}]},{keyword:"forEach",pro:"List\u3001Set\u3001Map",code:[{path:"dart/grammar/statement/for/forEach"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var r=a(561),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(576),u=a(577),d=a(578),h=a(579),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},n?m.a.createElement("span",null,n,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},f=window.$http,w=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),k=a(580);a.d(t,"a",function(){return N});var b=window.$fn,N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,c=t.pro,l=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,h=t.noOrder,f=t.isValue,w=t.hasShow,N=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:N,hasArrow:b.hasArray(o)||w,hasClick:b.isString(p),order:h?null:d,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),n&&l&&[m.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==N&&(b.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(E,{type:"text",url:e.path}))}),s,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},562:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(560);var r=a(561),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(88),u=a(559),d=a(580),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&m.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(n,{key:t,data:e,index:t+1})}):m.a.createElement(n,{data:t}))}}]),t}(m.a.Component)}}]);