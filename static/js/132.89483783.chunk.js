(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[132],{294:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),l=a(7),o=a(6),s=a(8),c=a(0),i=a.n(c),d=a(533),p={title:"\u76d2\u5b50\u9970\u5668",keyword:"BoxDecoration( )",url:"BoxDecorationPage",data:[{keyword:"color",type:"Color",pro:"\u80cc\u666f\u8272\uff0c\u4e0e gradient \u4e92\u65a5",link:"/flutter/style/Colors"},{keyword:"border",type:"Border",pro:"\u8fb9\u6846",link:"/flutter/style/border/Border"},{keyword:"borderRadius",type:"BorderRadius",pro:"\u5706\u89d2",link:"/flutter/style/borderRadius/BorderRadius"},{keyword:"shape",type:"BoxShape",pro:"\u5706\u89d2",code:[{path:"flutter/style/decoration/BoxDecoration/BoxShape"}]},{keyword:"gradient",type:"Gradient",pro:"\u6e10\u53d8\uff0c\u4e0e color \u4e92\u65a5",code:[{path:"flutter/public/gradient"}],link:[{title:"LinearGradient",url:"/flutter/style/gradient/LinearGradient"},{title:"RadialGradient",url:"/flutter/style/gradient/RadialGradient"},{title:"SweepGradient",url:"/flutter/style/gradient/SweepGradient"}]},{keyword:"boxShadow",type:"List<BoxShadow>",pro:"\u9634\u5f71",code:[{path:"flutter/public/boxShadow"}],link:[{title:"BoxShadow",url:"/flutter/style/shadow/BoxShadow"}]},{keyword:"image",type:"DecorationImage",pro:"\u80cc\u666f\u56fe\u7247",link:"/flutter/image/DecorationImage"},{keyword:"backgroundBlendMode",type:"BlendMode",pro:"\u80cc\u666f\u878d\u5408\u6a21\u5f0f",link:"/flutter/image/BlendMode"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/decoration/BoxDecoration/BoxDecoration"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),n=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),d=a.n(i),p=a(547),u=a(548),m=a(549),y=a(550),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return d.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},d.a.createElement("div",{className:"fxm"},n?d.a.createElement("span",null,n,"\u3001"):d.a.createElement(p.a,{className:"f14"}),d.a.createElement("div",{className:"ml10"},t)),a&&d.a.createElement("span",{className:"c0"},r?d.a.createElement(u.a,{className:"f24"}):d.a.createElement(m.a,{className:"f24"})),l&&d.a.createElement("span",{className:"c0"},d.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),d.a.createElement("section",null,e.length>0?d.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},d.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return d.a.createElement("dt",{key:t},t+1)})),d.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return d.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):d.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(d.a.Component),b=a(551);a.d(t,"a",function(){return g});var E=window.$fn,g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,o=t.pro,s=t.keyword,c=t.code,i=t.isGray,p=t.link,u=t.url,m=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,g=this.state.show;return d.a.createElement("section",null,d.a.createElement(h,{show:g,hasArrow:E.hasArray(c)||w,hasClick:E.isString(p),order:y?null:m,onClick:this.onClick},s&&d.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&d.a.createElement("span",{className:"c0"},a),s&&!f?d.a.createElement("i",{className:"mlr10"},":"):d.a.createElement("i",{className:"ml10"}),n&&s&&[d.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],o&&d.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==g&&(E.hasArray(c)||w)?d.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(c)&&c.map(function(e,t){return d.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&d.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),d.a.createElement(k,{type:"text",url:e.path}))}),l,u&&d.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},d.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&d.a.createElement("div",{className:"mt10"},p.map(function(t,a){return d.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},d.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(d.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var r=a(532),n=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),d=a.n(i),p=a(88),u=a(530),m=a(551),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return d.a.createElement("div",null,y.hasObject(a)&&a.keyword&&d.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&d.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&d.a.createElement("span",{className:"mr5 g9"},a.grayText),d.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[d.a.createElement(m.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],d.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&d.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),d.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?d.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?d.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,d.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return d.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return d.a.createElement(n,{key:t,data:e,index:t+1})}):d.a.createElement(n,{data:t}))}}]),t}(d.a.Component)}}]);