(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[225],{387:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(4),r=a(5),l=a(7),c=a(6),s=a(8),i=a(0),o=a.n(i),p=a(533),m={title:"\u5f39\u6027\u6a2a\u5411\u3001\u7eb5\u5411\u5e03\u5c40",keyword:"Flex( )",type:"Flex",url:"FlexPage",data:[{keyword:"direction",type:"Axis",pro:"\u6392\u5217\u65b9\u5411\uff0c\u9ed8\u8ba4\u6c34\u5e73",code:[{path:"flutter/widget/layout/list/Wrap/Axis"}]},{deviceTitle:"\u516c\u5171\u5c5e\u6027",keyword:"mainAxisAlignment",type:"MainAxisAlignment",pro:"\u4e3b\u8f74\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/public/MainAxisAlignment"}]},{keyword:"crossAxisAlignment",type:"CrossAxisAlignment",pro:"\u526f\u8f74\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/widget/layout/flex/CrossAxisAlignment"}]},{keyword:"mainAxisSize",type:"MainAxisSize",pro:"\u4e3b\u8f74\u5c3a\u5bf8",code:[{path:"flutter/public/MainAxisSize"}]},{keyword:"verticalDirection",type:"VerticalDirection",pro:"\u6392\u5217\u6446\u653e\u987a\u5e8f",code:[{path:"flutter/widget/layout/list/Wrap/VerticalDirection"}]},{keyword:"textBaseline",type:"TextBaseline",pro:"\u6587\u672c\u7ed8\u5236\u57fa\u7ebf",code:[{path:"flutter/public/TextBaseline"}]},{keyword:"textDirection",type:"TextDirection",pro:"\u6392\u5217\u987a\u5e8f",code:[{path:"flutter/widget/text/TextDirection"}]},{keyword:"children",type:"List<Widget>",pro:"\u5217\u8868\u63a7\u4ef6",code:[{path:"flutter/public/widget-children"}]}]},u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(o.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),l=a(5),c=a(7),s=a(6),i=a(8),o=a(0),p=a.n(o),m=a(547),u=a(548),d=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},p.a.createElement("div",{className:"fxm"},r?p.a.createElement("span",null,r,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},n?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(551);a.d(t,"a",function(){return x});var E=window.$fn,x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(E.hasArray(t)||r)&&a.setState({show:!a.state.show}),E.isString(n)&&a.props.history.push(n)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,l=t.children,c=t.pro,s=t.keyword,i=t.code,o=t.isGray,m=t.link,u=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,x=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:x,hasArrow:E.hasArray(i)||w,hasClick:E.isString(m),order:y?null:d,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(o?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),r&&s&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==x&&(E.hasArray(i)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(x?"":"dn"),style:{padding:E.hasArray(m)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(k,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var n=a(532),r=a(4),l=a(5),c=a(7),s=a(6),i=a(8),o=a(0),p=a.n(o),m=a(88),u=a(530),d=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&p.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(r,{key:t,data:e,index:t+1})}):p.a.createElement(r,{data:t}))}}]),t}(p.a.Component)}}]);