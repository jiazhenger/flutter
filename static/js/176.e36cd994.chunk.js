(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[176],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(4),r=a(5),l=a(7),s=a(6),c=a(8),o=a(0),i=a.n(o),p=a(560),m={title:"\u6807\u9898\u4e0b\u62c9\u5c55\u5f00",keyword:"ExpansionTile( )",type:"ExpansionTile",url:"ExpansionTilePage",data:[{keyword:"title",type:"widget",pro:"\u4e3b\u6807\u9898"},{keyword:"leading",type:"widget",pro:"\u6700\u5de6\u4fa7\u90e8\u5206"},{keyword:"trailing",type:"widget",pro:"\u6700\u53f3\u4fa7\u90e8\u5206"},{keyword:"backgroundColor",type:"Color",pro:"\u80cc\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"initiallyExpanded",type:"bool",pro:"\u662f\u5426\u9ed8\u8ba4\u5c55\u5f00"},{keyword:"children",type:"List<Widget>",pro:"\u5217\u8868\u63a7\u4ef6",code:[{path:"flutter/public/widget-children"}]},{keyword:"onExpansionChanged",type:"void Function( bool )",pro:"\u5c55\u5f00\u6216\u5173\u95ed\u65f6\u6267\u884c",code:[{path:"flutter/event/onExpansionChanged"}]}]},u=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},557:function(e,t,a){"use strict";a(558);var n=a(559),r=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(574),u=a(575),d=a(576),y=a(577),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},r?p.a.createElement("span",null,r,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},n?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),E=a(578);a.d(t,"a",function(){return g});var b=window.$fn,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(b.hasArray(t)||r)&&a.setState({show:!a.state.show}),b.isString(n)&&a.props.history.push(n)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,l=t.children,s=t.pro,c=t.keyword,o=t.code,i=t.isGray,m=t.link,u=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,g=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:g,hasArrow:b.hasArray(o)||w,hasClick:b.isString(m),order:y?null:d,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),r&&c&&[p.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(b.hasArray(o)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:b.hasArray(m)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(k,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(558);var n=a(559),r=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(88),u=a(557),d=a(578),y=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&p.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(r,{key:t,data:e,index:t+1})}):p.a.createElement(r,{data:t}))}}]),t}(p.a.Component)}}]);