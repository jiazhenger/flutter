(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[103],{248:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(4),o=a(6),s=a(5),c=a(0),l=a.n(c),i=a(584),d={title:"\u7126\u70b9\u4e8b\u4ef6",isGroup:!0,data:[{title:"\u7126\u70b9\u4e8b\u4ef6",keyword:"FocusNode( )",type:"FocusNode",data:[{keyword:"debugLabel",type:"String",pro:"\u7126\u70b9\u9634\u5f71"},{keyword:"skipTraversal",type:"bool",pro:"\u662f\u5426\u8df3\u8fc7\u904d\u5386"},{keyword:"onKey",type:"bool Function(FocusNode,RawKeyEvent)",pro:"\u6267\u884c\u65b9\u6cd5"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/event/FocusNode/FocusNode"}]}]},{title:"\u7126\u70b9\u65b9\u6cd5",keyword:" FocusNode focusNode = new FocusNode(); focusNode.x( )",type:"FocusNode",data:[{keyword:"addListener( )",type:"void addListener(void Function() listener) ",pro:"\u76d1\u542c\u7126\u70b9\u6539\u53d8\u4e8b\u4ef6",code:[{path:"flutter/event/FocusNode/addListener"}]},{keyword:"removeListener( )",type:"void removeListener(void Function() listener) ",pro:"\u79fb\u51fa\u7126\u70b9\u6539\u53d8\u4e8b\u4ef6",code:[{path:"flutter/event/FocusNode/removeListener"}]},{keyword:"unfocus( )",type:"void unfocus( void Function() )",pro:"\u5931\u53bb\u7126\u70b9",code:[{path:"flutter/event/FocusNode/addListener"}]}]},{title:"\u7126\u70b9\u5c5e\u6027",keyword:"FocusNode focusNode = new FocusNode(); focusNode.x",type:"FocusNode",data:[{keyword:"hasFocus",type:"bool",pro:"\u662f\u5426\u6709\u7126\u70b9"},{keyword:"context",type:"BuildContext",pro:""}]}]},u=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement(i.a,Object.assign({data:d},this.props))}}]),a}(l.a.Component)},581:function(e,t,a){"use strict";a(582);var n=a(583),r=a(3),o=a(4),s=a(6),c=a(5),l=a(0),i=a.n(l),d=a(598),u=a(599),p=a(600),m=a(601),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(d.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(u.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),o&&i.a.createElement("span",{className:"c0"},i.a.createElement(m.a,{className:"f24"})))},h=window.$http,f=window.$fn,w=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.getText=function(t){h.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){h.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),k=a(602);a.d(t,"a",(function(){return v}));var N=window.$fn,v=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,o=t.children;(N.hasArray(a)||r||o)&&e.setState({show:!e.state.show}),N.isString(n)&&e.props.history.push(n)},e.onShow=function(){N.showPhone(e.props.url)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,o=t.children,s=t.pro,c=t.keyword,l=t.code,d=t.deviceTitle,u=t.isGray,p=t.link,m=t.url,h=t.order,f=t.noOrder,v=t.isValue,b=t.hasShow,E=this.state.show;return i.a.createElement(i.a.Fragment,null,d&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},d),i.a.createElement("section",{className:"box"},i.a.createElement(y,{show:E,hasArrow:N.hasArray(l)||b||o,hasClick:N.isString(p),order:f?null:h,onClick:this.onClick},c&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:N.stop},c),a&&i.a.createElement("span",{className:"c0"},a),c&&!v?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&c&&[i.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==E&&(N.hasArray(l)||b||o)?i.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:N.hasArray(p)?"10px 0 5px":"10px 0"},onClick:N.stop},N.hasArray(l)&&l.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(w,{type:"text",url:e.path}))})),o,m&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),N.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(582);var n=a(583),r=a(3),o=a(4),s=a(6),c=a(5),l=a(0),i=a.n(l),d=a(86),u=a(581),p=a(602),m=window.$fn,y=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return i.a.createElement("div",null,m.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&i.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(d.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(r,{key:t,data:e,index:t+1})})):i.a.createElement(r,{data:t}))}}]),a}(i.a.Component)}}]);