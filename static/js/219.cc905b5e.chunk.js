(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[219],{371:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(5),n=a(6),l=a(8),s=a(7),o=a(9),c=a(0),i=a.n(c),p=a(487),m={title:"\u8f6c\u6362",isGroup:!0,data:[{title:"\u8f6c\u6362",keyword:"Transform()",type:"Transform",url:"TransformPage",data:[{keyword:"transform",type:"Matrix4",pro:"\u77e9\u9635\u53d8\u5f62",link:"/flutter/style/rotation"},{deviceTitle:"\u516c\u5171\u5c5e\u6027",keyword:"alignment",type:"Alignment",pro:"\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/public/alignment"}],link:[{title:"Alignment",url:"/flutter/style/align/Alignment"},{title:"FractionalOffset",url:"/flutter/style/align/FractionalOffset"}]},{keyword:"origin",type:"Offset",pro:"\u53d8\u5f62\u70b9",link:"/flutter/style/offset/Offset"},{keyword:"transformHitTests",type:"bool",pro:"\u662f\u5426\u5728\u6267\u884chit\u6d4b\u8bd5\u65f6\u5e94\u7528\u8f6c\u6362"},{keyword:"child",type:"Widget",pro:"\u5355\u4e2a\u63a7\u4ef6"}]},{title:"\u65cb\u8f6c",keyword:"Transform.rotate( )",type:"ListView",data:[{keyword:"angle",type:"double",pro:"\u65cb\u8f6c\u89d2\u5ea6",code:[{path:"flutter/widget/layout/style/Transform/angle"}]},{noOrder:!0,pro:"Transform( ) \u516c\u5171\u5c5e\u6027"}]},{title:"\u7f29\u653e",keyword:"Transform.scale( )",type:"ListView",data:[{keyword:"scale",type:"double",pro:"\u7f29\u653e\u500d\u6570"},{noOrder:!0,pro:"Transform( ) \u516c\u5171\u5c5e\u6027"}]},{title:"\u5e73\u79fb",keyword:"Transform.translate( )",type:"ListView",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",link:"/flutter/style/offset/Offset"},{keyword:"transformHitTests",type:"bool",pro:"\u662f\u5426\u5728\u6267\u884chit\u6d4b\u8bd5\u65f6\u5e94\u7528\u8f6c\u6362"},{keyword:"child",type:"Widget",pro:"\u5355\u4e2a\u63a7\u4ef6"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),l=a(5),s=a(6),o=a(8),c=a(7),i=a(9),p=a(0),m=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,s=e.hasClick,o=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:o},m.a.createElement("div",{className:"fxm"},l?m.a.createElement("span",null,l,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,y=window.$fn,f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var h=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(h.hasArray(t)||n)&&a.setState({show:!a.state.show}),h.isString(r)&&a.props.history.push(r)},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,s=t.children,o=t.pro,c=t.keyword,i=t.code,p=t.isGray,d=t.link,y=t.url,w=t.order,k=t.noOrder,b=t.isValue,E=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(u,{show:g,hasArrow:h.hasArray(i)||E,hasClick:h.isString(d),order:k?null:w,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:h.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),l&&c&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&m.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==g&&(h.hasArray(i)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:h.hasArray(d)?"10px 0 5px":"10px 0"},onClick:h.stop},h.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(f,{type:"text",url:e.path}))}),s,y&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(d)&&m.a.createElement("div",{className:"mt10"},d.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(485);var r=a(486),n=(a(116),a(22)),l=a(5),s=a(6),o=a(8),c=a(7),i=a(9),p=a(0),m=a.n(p),u=a(86),d=a(484),y=window.$fn,f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&m.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(l,{key:t,data:e,index:t+1})}):m.a.createElement(l,{data:t}))}}]),t}(m.a.Component)}}]);