(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[141],{303:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(4),r=a(5),s=a(7),l=a(6),o=a(8),c=a(0),i=a.n(c),d=a(533),p={title:"\u56db\u8fb9\u504f\u79fb\u91cf",isGroup:!0,data:[{title:"\u65e0",grayText:"const",keyword:"EdgeInsets.zero",type:"EdgeInsets"},{title:"\u56db\u8fb9",grayText:"const",keyword:"EdgeInsets.all( )",type:"EdgeInsets",url:"EdgeInsetsAll",data:[{keyword:"value",type:"double",pro:"\u5782\u76f4\u504f\u79fb",isValue:!0}]},{title:"\u6c34\u5e73\u5782\u76f4",grayText:"const",keyword:"EdgeInsets.symmetric( )",type:"EdgeInsets",url:"EdgeInsetsSymmetric",data:[{keyword:"vertical",type:"double",pro:"\u5782\u76f4"},{keyword:"horizontal",type:"double",pro:"\u6c34\u5e73",code:[{path:"flutter/style/offset/EdgeInsets/symmetric"}]}]},{title:"\u5355\u8fb9",grayText:"const",keyword:"EdgeInsets.only( )",type:"EdgeInsets",url:"EdgeInsetsOnly",data:[{keyword:"left",type:"double",pro:"\u5de6"},{keyword:"top",type:"double",pro:"\u4e0a"},{keyword:"right",type:"double",pro:"\u53f3"},{keyword:"bottom",type:"double",pro:"\u4e0b",code:[{path:"flutter/style/offset/EdgeInsets/only"}]}]},{title:"\u5355\u8fb9",grayText:"const",keyword:"EdgeInsets.fromLTRB( )",type:"EdgeInsets",url:"EdgeInsetsOnly",data:[{keyword:"left",type:"double",pro:"\u5de6",isValue:!0},{keyword:"top",type:"double",pro:"\u4e0a",isValue:!0},{keyword:"right",type:"double",pro:"\u53f3",isValue:!0},{keyword:"bottom",type:"double",pro:"\u4e0b",isValue:!0,code:[{path:"flutter/style/offset/EdgeInsets/fromLTRB"}]}]},{title:"\u6839\u636e\u673a\u578b\u5c4f\u5e55\u5c3a\u5bf8\u5b9a\u4e49",grayText:"const",keyword:"EdgeInsets.fromWindowPadding( )",type:"EdgeInsets",url:"EdgeInsetsFromWindowPadding",data:[{keyword:"padding",type:"ui.WindowPadding",pro:"\u53f3",isValue:!0},{keyword:"devicePixelRatio",type:"double",pro:"\u4e0b",isValue:!0,code:[{path:"flutter/style/offset/EdgeInsets/fromWindowPadding"}]}]}]},m=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),s=a(5),l=a(7),o=a(6),c=a(8),i=a(0),d=a.n(i),p=a(547),m=a(548),u=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return d.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},d.a.createElement("div",{className:"fxm"},r?d.a.createElement("span",null,r,"\u3001"):d.a.createElement(p.a,{className:"f14"}),d.a.createElement("div",{className:"ml10"},t)),a&&d.a.createElement("span",{className:"c0"},n?d.a.createElement(m.a,{className:"f24"}):d.a.createElement(u.a,{className:"f24"})),s&&d.a.createElement("span",{className:"c0"},d.a.createElement(y.a,{className:"f24"})))},f=window.$http,E=window.$fn,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),d.a.createElement("section",null,e.length>0?d.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},d.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return d.a.createElement("dt",{key:t},t+1)})),d.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return d.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):d.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(d.a.Component),k=a(551);a.d(t,"a",function(){return g});var b=window.$fn,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,l=t.pro,o=t.keyword,c=t.code,i=t.isGray,p=t.link,m=t.url,u=t.order,y=t.noOrder,f=t.isValue,E=t.hasShow,g=this.state.show;return d.a.createElement("section",null,d.a.createElement(h,{show:g,hasArrow:b.hasArray(c)||E,hasClick:b.isString(p),order:y?null:u,onClick:this.onClick},o&&d.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},o),a&&d.a.createElement("span",{className:"c0"},a),o&&!f?d.a.createElement("i",{className:"mlr10"},":"):d.a.createElement("i",{className:"ml10"}),r&&o&&[d.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],l&&d.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==g&&(b.hasArray(c)||E)?d.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(c)&&c.map(function(e,t){return d.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&d.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),d.a.createElement(w,{type:"text",url:e.path}))}),s,m&&d.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},d.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&d.a.createElement("div",{className:"mt10"},p.map(function(t,a){return d.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},d.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(d.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var n=a(532),r=a(4),s=a(5),l=a(7),o=a(6),c=a(8),i=a(0),d=a.n(i),p=a(88),m=a(530),u=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return d.a.createElement("div",null,y.hasObject(a)&&a.keyword&&d.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&d.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&d.a.createElement("span",{className:"mr5 g9"},a.grayText),d.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[d.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],d.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&d.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),d.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?d.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?d.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,d.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return d.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return d.a.createElement(r,{key:t,data:e,index:t+1})}):d.a.createElement(r,{data:t}))}}]),t}(d.a.Component)}}]);