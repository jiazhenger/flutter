(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[154],{316:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(4),r=a(5),s=a(7),c=a(6),l=a(8),i=a(0),o=a.n(i),m=a(533),p={title:"TimeOfDay",isGroup:!0,data:[{title:"\u65f6\u957f",grayText:"const",keyword:"TimeOfDay( )",type:"TimeOfDay",data:[{keyword:"hour",type:"int",pro:"\u5c0f\u65f6\u6570"},{keyword:"minute",type:"int",pro:"\u5206\u949f\u6570 "}]},{title:"\u73b0\u5728\u65f6\u95f4",grayText:"const",keyword:"TimeOfDay.now( )",type:"TimeOfDay"},{title:"\u5c06 DateTime \u8f6c\u4e3a TimeOfDay",grayText:"const",keyword:"TimeOfDay.fromDateTime( )",type:"TimeOfDay",data:[{keyword:"time",type:"DateTime",pro:"DateTime \u7c7b",isValue:!0,link:"/dart/time/DateTime"}]},{title:"\u4e00\u4e2a\u5468\u671f\u591a\u5c11\u5c0f\u65f6 => 12",grayText:"const",keyword:"TimeOfDay.hoursPerPeriod",type:"int"},{title:"\u6bcf\u5929\u949f\u591a\u5c11\u5c0f\u65f6 => 24",grayText:"const",keyword:"TimeOfDay.hoursPerDay",type:"int"},{title:"\u6bcf\u5c0f\u65f6\u591a\u5c11\u5206\u949f => 60",grayText:"const",keyword:"TimeOfDay.minutesPerHour",type:"int"}]},u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(o.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),s=a(5),c=a(7),l=a(6),i=a(8),o=a(0),m=a.n(o),p=a(547),u=a(548),y=a(549),d=a(550),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(y.a,{className:"f24"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(d.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),E=a(551);a.d(t,"a",function(){return N});var b=window.$fn,N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,c=t.pro,l=t.keyword,i=t.code,o=t.isGray,p=t.link,u=t.url,y=t.order,d=t.noOrder,f=t.isValue,w=t.hasShow,N=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:N,hasArrow:b.hasArray(i)||w,hasClick:b.isString(p),order:d?null:y,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(o?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&l&&[m.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==N&&(b.hasArray(i)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(k,{type:"text",url:e.path}))}),s,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var n=a(532),r=a(4),s=a(5),c=a(7),l=a(6),i=a(8),o=a(0),m=a.n(o),p=a(88),u=a(530),y=a(551),d=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return m.a.createElement("div",null,d.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&m.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(y.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(r,{key:t,data:e,index:t+1})}):m.a.createElement(r,{data:t}))}}]),t}(m.a.Component)}}]);