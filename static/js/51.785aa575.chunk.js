(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[51],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(5),n=a(6),c=a(8),s=a(7),l=a(9),o=a(0),i=a.n(o),p=a(366),m={title:"\u96c6\u5408\u7c7b\u578b",data:[{pro:"\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/type/set"}]},{pro:"\u521b\u5efa\u96c6\u5408",code:[{path:"dart/grammar/data-type/set/create"}]},{pro:"\u6dfb\u52a0\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/add"}]},{pro:"\u5220\u9664\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/remove"}]},{pro:"\u68c0\u7d22\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/search"}]},{pro:"\u5408\u5e76\u5143\u7d20",code:[{path:"dart/grammar/data-type/set/merge"}]},{pro:"\u6570\u636e\u8f6c\u6362",code:[{path:"dart/grammar/data-type/set/output-type"}]},{pro:"\u8fed\u4ee3\u5faa\u73af",code:[{path:"dart/grammar/data-type/set/for"}]},{pro:"\u79c1\u6709\u65b9\u6cd5",code:[{path:"dart/grammar/data-type/set/method"}]},{pro:"\u79c1\u6709\u5c5e\u6027",code:[{path:"dart/grammar/data-type/set/property"}]},{pro:"\u516c\u5171\u5c5e\u6027",code:[{path:"dart/grammar/entrance/public-property"}]},{pro:"\u516c\u5171\u65b9\u6cd5",code:[{path:"dart/grammar/entrance/public-method"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},363:function(e,t,a){"use strict";a(364);var r=a(365),n=(a(107),a(22)),c=a(5),s=a(6),l=a(8),o=a(7),i=a(9),p=a(0),m=a.n(p),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,s=t.children,l=t.pro,o=t.keyword,i=t.code,p=t.isGray,u=t.link,h=t.url,w=t.order,E=t.noOrder,b=t.isValue,k=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(d,{show:g,hasArrow:f.hasArray(i)||k,hasClick:f.isString(u),order:E?null:w,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),c&&o&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],l&&m.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==g&&(f.hasArray(i)||k)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(y,{type:"text",url:e.path}))}),s,h&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},366:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(364);var r=a(365),n=(a(107),a(22)),c=a(5),s=a(6),l=a(8),o=a(7),i=a(9),p=a(0),m=a.n(p),d=a(77),u=a(363),h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,c=function(t){var a=t.data,c=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},c&&m.a.createElement("b",{className:"f16 c1"},c,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(c,{key:t,data:e,index:t+1})}):m.a.createElement(c,{data:t}))}}]),t}(m.a.Component)}}]);