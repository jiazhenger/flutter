(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[155],{317:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(4),n=a(5),l=a(7),s=a(6),c=a(8),o=a(0),i=a.n(o),p=a(533),u={title:"\u5361\u7247",keyword:"Card( )",type:"Card",url:"CardPage",data:[{keyword:"color",type:"Color",pro:"\u80cc\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"margin",type:"EdgeInsetsGeometry",pro:"\u8fb9\u8ddd",link:"/flutter/style/offset/EdgeInsets"},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",code:[{path:"flutter/public/shape"}],link:[{title:"BeveledRectangleBorder",url:"/flutter/style/shape/BeveledRectangleBorder"},{title:"CircleBorder",url:"/flutter/style/shape/CircleBorder"},{title:"RoundedRectangleBorder",url:"/flutter/style/shape/RoundedRectangleBorder"},{title:"StadiumBorder",url:"/flutter/style/shape/StadiumBorder"},{title:"UnderlineInputBorder",url:"/flutter/style/shape/UnderlineInputBorder"},{title:"Border",url:"/flutter/style/border/Border"}]},{keyword:"clipBehavior",type:"Clip",pro:"\u88c1\u526a\u65b9\u5f0f",code:[{path:"flutter/style/Clip/Clip"}],link:[{title:"Clip",url:"/flutter/style/Clip"}]},{keyword:"borderOnForeground",type:"bool",pro:"\u8fb9\u6846\u5728\u524d\u666f"},{keyword:"semanticContainer",type:"bool",pro:"\u662f\u5426\u662f\u63cf\u8ff0\u6027\u5bb9\u5668"},{keyword:"child",type:"Widget",pro:"\u63a7\u4ef6"}]},d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),u=a(547),d=a(548),m=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(u.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(d.a,{className:"f24"}):p.a.createElement(m.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(551);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,s=t.pro,c=t.keyword,o=t.code,i=t.isGray,u=t.link,d=t.url,m=t.order,y=t.noOrder,f=t.isValue,k=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:v,hasArrow:E.hasArray(o)||k,hasClick:E.isString(u),order:y?null:m,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&c&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(E.hasArray(o)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(u)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,d&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(u)&&p.a.createElement("div",{className:"mt10"},u.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var r=a(532),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),u=a(88),d=a(530),m=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(m.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);