(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[83],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(4),r=a(5),c=a(7),l=a(6),s=a(8),o=a(0),i=a.n(o),p=a(533),d={title:"",keyword:"\u751f\u547d\u5468\u671f",data:[{keyword:"\u6784\u9020\u51fd\u6570",type:"void Function( )",pro:"\u53ea\u6267\u884c\u4e00\u6b21",code:[{path:"flutter/com/life/Page"}]},{keyword:"initState( )",type:"void Function( )",pro:"\u521d\u59cb\u5316\u65f6\u6267\u884c",code:[{path:"flutter/com/life/initState"}]},{keyword:"didChangeDependencies( )",type:"void Function( )",pro:"\u5728\u521d\u59cb\u5316 initState \u540e\u6267\u884c",code:[{path:"flutter/com/life/didChangeDependencies"}]},{keyword:"didUpdateWidget( )",type:"void Function( value )",pro:"\u4e0a\u7ea7\u7ec4\u4ef6\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u89e6\u53d1\u5b50 widget \u6267\u884c didUpdateWidget",code:[{path:"flutter/com/life/didUpdateWidget"}]},{keyword:"deactivate( )",type:"void Function( )",pro:"\u5728\u6253\u5f00\u65b0\u7684 widget \u6216\u56de\u5230\u5f53\u524d widget \u65f6\u4f1a\u6267\u884c",code:[{path:"flutter/com/life/deactivate"}]},{keyword:"reassemble( )",type:"void Function( )",pro:"\u70b9\u51fb\u95ea\u7535\u4f1a\u6267\u884c",code:[{path:"flutter/com/life/reassemble"}]},{keyword:"dispose( )",type:"void Function( )",pro:"\u5378\u8f7d\u3001\u9500\u6bc1 widget \u65f6\u6267\u884c",code:[{path:"flutter/com/life/dispose"}]},{keyword:"didChangeAppLifecycleState( )",type:"void Function(AppLifecycleState state)",pro:"\u76d1\u542c\u751f\u547d\u5468\u671f",code:[{path:"flutter/com/life/didChangeAppLifecycleState"}]}]},m=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:d},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),c=a(5),l=a(7),s=a(6),o=a(8),i=a(0),p=a.n(i),d=a(547),m=a(548),u=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,l=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},r?p.a.createElement("span",null,r,"\u3001"):p.a.createElement(d.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},n?p.a.createElement(m.a,{className:"f24"}):p.a.createElement(u.a,{className:"f24"})),c&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(551);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(E.hasArray(t)||r)&&a.setState({show:!a.state.show}),E.isString(n)&&a.props.history.push(n)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,l=t.pro,s=t.keyword,o=t.code,i=t.isGray,d=t.link,m=t.url,u=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:v,hasArrow:E.hasArray(o)||w,hasClick:E.isString(d),order:y?null:u,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),r&&s&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(E.hasArray(o)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(d)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(k,{type:"text",url:e.path}))}),c,m&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(d)&&p.a.createElement("div",{className:"mt10"},d.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var n=a(532),r=a(4),c=a(5),l=a(7),s=a(6),o=a(8),i=a(0),p=a.n(i),d=a(88),m=a(530),u=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&p.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(r,{key:t,data:e,index:t+1})}):p.a.createElement(r,{data:t}))}}]),t}(p.a.Component)}}]);