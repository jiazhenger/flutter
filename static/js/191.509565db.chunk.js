(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[191],{356:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),l=a(5),n=a(7),o=a(6),s=a(8),c=a(0),i=a.n(c),d=a(566),p={title:"OutlineButton \u9542\u7a7a\u6309\u94ae",keyword:"OutlineButton( )",type:"OutlineButton",url:"OutlineButtonPage",data:[{deviceTitle:"\u8fb9\u6846",keyword:"borderSide",type:"BorderSide",pro:"\u8fb9\u6846",link:"/flutter/style/border/BorderSide"},{keyword:"highlightedBorderColor",type:"Color",pro:"\u9ad8\u4eae\u8fb9\u6846\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"disabledBorderColor",type:"Color",pro:"\u7981\u7528\u8fb9\u6846\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"\u6587\u672c\u989c\u8272",title:"\u516c\u6709\u5c5e\u6027",keyword:"textColor",type:"Color",pro:"\u6587\u672c\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"disabledTextColor",type:"Color",pro:"\u7981\u7528\u6587\u672c\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"textTheme",type:"ButtonTextTheme",pro:"\u6587\u672c\u4e3b\u9898\u989c\u8272",code:[{path:"flutter/widget/button/ButtonTextTheme"}]},{deviceTitle:"\u80cc\u666f\u989c\u8272",keyword:"color",type:"Color",pro:"\u80cc\u666f\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"splashColor",type:"Color",pro:"\u6ce2\u7eb9\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"\u52a8\u6001\u989c\u8272",keyword:"highlightColor",type:"Color",pro:"\u70b9\u51fb\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"hoverColor",type:"Color",pro:"\u79fb\u5165\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"focusColor",type:"Color",pro:"\u7126\u70b9\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"\u9634\u5f71",title:"\u79c1\u6709\u5c5e\u6027",keyword:"highlightElevation",type:"double",pro:"\u6309\u4e0b\u9634\u5f71"},{deviceTitle:"\u901a\u7528",keyword:"child",type:"widget",pro:"\u5b50\u63a7\u4ef6"},{keyword:"padding",type:"EdgeInsetsGeometry",pro:"\u8865\u767d",link:"/flutter/style/offset/EdgeInsets"},{keyword:"clipBehavior",type:"Clip",pro:"\u88c1\u526a\u65b9\u5f0f",code:[{path:"flutter/style/Clip/Clip"}],link:[{title:"Clip",url:"/flutter/style/Clip"}]},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",code:[{path:"flutter/public/shape"}],link:[{title:"BeveledRectangleBorder",url:"/flutter/style/shape/BeveledRectangleBorder"},{title:"CircleBorder",url:"/flutter/style/shape/CircleBorder"},{title:"RoundedRectangleBorder",url:"/flutter/style/shape/RoundedRectangleBorder"},{title:"StadiumBorder",url:"/flutter/style/shape/StadiumBorder"},{title:"UnderlineInputBorder",url:"/flutter/style/shape/UnderlineInputBorder"},{title:"Border",url:"/flutter/style/border/Border"}]},{deviceTitle:"\u76d1\u542c\u4e8b\u4ef6",keyword:"onPressed",type:"void Function( )",pro:"\u70b9\u51fb\u4e8b\u4ef6",code:[{path:"flutter/event/onPressed"}]},{keyword:"focusNode",type:"FocusNode",pro:"\u76d1\u542c\u7126\u70b9\u6539\u53d8\u4e8b\u4ef6",code:[{path:"flutter/event/FocusNode/FocusNode"}],link:[{title:"FocusNode",url:"/flutter/event/FocusNode"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},563:function(e,t,a){"use strict";a(564);var r=a(565),l=a(4),n=a(5),o=a(7),s=a(6),c=a(8),i=a(0),d=a.n(i),p=a(580),u=a(581),y=a(582),m=a(583),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,n=e.hasClick,o=e.onClick;e.hasGo;return d.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||n?"cp tap":""),style:{userSelect:"none"},onClick:o},d.a.createElement("div",{className:"fxm"},l?d.a.createElement("span",null,l,"\u3001"):d.a.createElement(p.a,{className:"f14"}),d.a.createElement("div",{className:"ml10"},t)),a&&d.a.createElement("span",{className:"c0"},r?d.a.createElement(u.a,{className:"f24"}):d.a.createElement(y.a,{className:"f24"})),n&&d.a.createElement("span",{className:"c0"},d.a.createElement(m.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),d.a.createElement("section",null,e.length>0?d.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},d.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return d.a.createElement("dt",{key:t},t+1)})),d.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return d.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):d.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(d.a.Component),b=a(584);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,l=e.hasShow;(E.hasArray(t)||l)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,n=t.children,o=t.pro,s=t.keyword,c=t.code,i=t.isGray,p=t.link,u=t.url,y=t.order,m=t.noOrder,f=t.isValue,k=t.hasShow,v=this.state.show;return d.a.createElement("section",null,d.a.createElement(h,{show:v,hasArrow:E.hasArray(c)||k,hasClick:E.isString(p),order:m?null:y,onClick:this.onClick},s&&d.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&d.a.createElement("span",{className:"c0"},a),s&&!f?d.a.createElement("i",{className:"mlr10"},":"):d.a.createElement("i",{className:"ml10"}),l&&s&&[d.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&d.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==v&&(E.hasArray(c)||k)?d.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(c)&&c.map(function(e,t){return d.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&d.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),d.a.createElement(w,{type:"text",url:e.path}))}),n,u&&d.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},d.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&d.a.createElement("div",{className:"mt10"},p.map(function(t,a){return d.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},d.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(d.a.Component)},566:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(564);var r=a(565),l=a(4),n=a(5),o=a(7),s=a(6),c=a(8),i=a(0),d=a.n(i),p=a(90),u=a(563),y=a(584),m=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return d.a.createElement("div",null,m.hasObject(a)&&a.keyword&&d.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&d.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&d.a.createElement("span",{className:"mr5 g9"},a.grayText),d.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[d.a.createElement(y.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],d.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&d.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),d.a.createElement("div",null,m.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?d.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?d.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,d.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return d.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return d.a.createElement(l,{key:t,data:e,index:t+1})}):d.a.createElement(l,{data:t}))}}]),t}(d.a.Component)}}]);