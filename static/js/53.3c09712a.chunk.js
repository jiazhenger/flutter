(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[53],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(4),n=a(5),c=a(7),s=a(6),l=a(8),o=a(0),i=a.n(o),m=a(560),p={title:"\u96c6\u5408\u7c7b\u578b",data:[{pro:"\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/type/set"}]},{pro:"\u521b\u5efa\u96c6\u5408",code:[{path:"dart/grammar/data-type/set/create"}]},{pro:"\u6dfb\u52a0\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/add"}]},{pro:"\u5220\u9664\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/remove"}]},{pro:"\u68c0\u7d22\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/search"}]},{pro:"\u5408\u5e76\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/merge"}]},{pro:"\u6570\u636e\u8f6c\u6362",code:[{path:"dart/grammar/data-type/set/output-type"}]},{pro:"\u8fed\u4ee3\u5faa\u73af",code:[{path:"dart/grammar/data-type/set/for"}]},{pro:"\u79c1\u6709\u65b9\u6cd5",code:[{path:"dart/grammar/data-type/set/method"}]},{pro:"\u79c1\u6709\u5c5e\u6027",code:[{path:"dart/grammar/data-type/set/property"}]},{pro:"\u516c\u5171\u5c5e\u6027",code:[{path:"dart/grammar/entrance/public-property"}]},{pro:"\u516c\u5171\u65b9\u6cd5",code:[{path:"dart/grammar/entrance/public-method"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},557:function(e,t,a){"use strict";a(558);var r=a(559),n=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(574),d=a(575),u=a(576),h=a(577),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},n?m.a.createElement("span",null,n,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(d.a,{className:"f24"}):m.a.createElement(u.a,{className:"f24"})),c&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},f=window.$http,b=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return b.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),w=a(578);a.d(t,"a",function(){return g});var k=window.$fn,g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(k.hasArray(t)||n)&&a.setState({show:!a.state.show}),k.isString(r)&&a.props.history.push(r)},a.onShow=function(){k.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,i=t.isGray,p=t.link,d=t.url,u=t.order,h=t.noOrder,f=t.isValue,b=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:g,hasArrow:k.hasArray(o)||b,hasClick:k.isString(p),order:h?null:u,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),n&&l&&[m.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(k.hasArray(o)||b)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:k.hasArray(p)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(E,{type:"text",url:e.path}))}),c,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(558);var r=a(559),n=a(4),c=a(5),s=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(88),d=a(557),u=a(578),h=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&m.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(n,{key:t,data:e,index:t+1})}):m.a.createElement(n,{data:t}))}}]),t}(m.a.Component)}}]);