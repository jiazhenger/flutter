(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[249],{411:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(4),r=a(5),l=a(7),o=a(6),s=a(8),c=a(0),i=a.n(c),p=a(562),m={title:"\u5355\u5143\u7d20\u5bb9\u5668",keyword:"Container( )",type:"Container",data:[{keyword:"color",type:"Color",pro:"\u80cc\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"foregroundDecoration",type:"Color",pro:"\u524d\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"width",type:"double",pro:"\u5bbd"},{keyword:"height",type:"double",pro:"\u9ad8"},{keyword:"padding",type:"EdgeInsetsGeometry",pro:"\u8865\u767d",link:"/flutter/style/offset/EdgeInsets"},{keyword:"margin",type:"EdgeInsetsGeometry",pro:"\u8fb9\u8ddd",link:"/flutter/style/offset/EdgeInsets"},{keyword:"alignment",type:"Alignment",pro:"\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/public/alignment"}],link:[{title:"Alignment",url:"/flutter/style/align/Alignment"},{title:"FractionalOffset",url:"/flutter/style/align/FractionalOffset"}]},{keyword:"decoration",type:"Decoration",pro:"\u88c5\u9970",code:[{path:"flutter/widget/layout/style/Container/decoration"}],link:[{title:"BoxDecoration",url:"/flutter/style/decoration/BoxDecoration"},{title:"ShapeDecoration",url:"/flutter/style/decoration/ShapeDecoration"},{title:"UnderlineTabIndicator",url:"/flutter/style/decoration/UnderlineTabIndicator"}]},{keyword:"constraints",type:"BoxConstraints",pro:"\u9650\u5236\u9ad8\u5bbd",link:"/flutter/style/BoxConstraints"},{keyword:"transform",type:"Matrix4",pro:"\u77e9\u9635\u53d8\u5f62",link:"/flutter/style/rotation"},{keyword:"child",type:"Widget",pro:"\u63a7\u4ef6"}]},u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var n=a(561),r=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),m=a(576),u=a(577),d=a(578),y=a(579),f=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},r?p.a.createElement("span",null,r,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},n?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},h=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),E=a(580);a.d(t,"a",function(){return g});var b=window.$fn,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,l=t.children,o=t.pro,s=t.keyword,c=t.code,i=t.isGray,m=t.link,u=t.url,d=t.order,y=t.noOrder,h=t.isValue,k=t.hasShow,g=this.state.show;return p.a.createElement("section",null,p.a.createElement(f,{show:g,hasArrow:b.hasArray(c)||k,hasClick:b.isString(m),order:y?null:d,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(h?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!h?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),r&&s&&[p.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==g&&(b.hasArray(c)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:b.hasArray(m)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(c)&&c.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},562:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(560);var n=a(561),r=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),m=a(88),u=a(559),d=a(580),y=window.$fn,f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&p.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(r,{key:t,data:e,index:t+1})}):p.a.createElement(r,{data:t}))}}]),t}(p.a.Component)}}]);