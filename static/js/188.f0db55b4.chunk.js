(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[188],{350:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),l=a(5),n=a(7),o=a(6),s=a(8),c=a(0),i=a.n(c),p=a(562),d={title:"FloatingActionButton \u6d6e\u52a8\u6309\u94ae",keyword:"FloatingActionButton( )",type:"FloatingActionButton",url:"FloatingActionButtonPage",data:[{deviceTitle:"\u80cc\u666f\u989c\u8272",keyword:"backgroundColor",type:"Color",pro:"\u80cc\u666f\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"splashColor",type:"Color",pro:"\u6ce2\u7eb9\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"\u524d\u666f\u989c\u8272",keyword:"foregroundColor",type:"Color",pro:"\u524d\u666f\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"\u9634\u5f71",keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"disabledElevation",type:"double",pro:"\u7981\u7528\u9634\u5f71"},{deviceTitle:"\u6309\u4e0b",keyword:"highlightElevation",type:"double",pro:"\u6309\u4e0b\u9634\u5f71"},{deviceTitle:"\u79fb\u5165",keyword:"hoverColor",type:"Color",pro:"\u79fb\u5165\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"hoverElevation",type:"double",pro:"\u79fb\u5165\u9634\u5f71"},{deviceTitle:"\u7126\u70b9",keyword:"focusColor",type:"Color",pro:"\u7126\u70b9\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"focusElevation",type:"double",pro:"\u7126\u70b9\u9634\u5f71"},{deviceTitle:"\u901a\u7528",keyword:"child",type:"widget",pro:"\u5b50\u63a7\u4ef6"},{keyword:"clipBehavior",type:"Clip",pro:"\u88c1\u526a\u65b9\u5f0f",code:[{path:"flutter/style/Clip/Clip"}],link:[{title:"Clip",url:"/flutter/style/Clip"}]},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",code:[{path:"flutter/public/shape"}],link:[{title:"BeveledRectangleBorder",url:"/flutter/style/shape/BeveledRectangleBorder"},{title:"CircleBorder",url:"/flutter/style/shape/CircleBorder"},{title:"RoundedRectangleBorder",url:"/flutter/style/shape/RoundedRectangleBorder"},{title:"StadiumBorder",url:"/flutter/style/shape/StadiumBorder"},{title:"UnderlineInputBorder",url:"/flutter/style/shape/UnderlineInputBorder"},{title:"Border",url:"/flutter/style/border/Border"}]},{deviceTitle:"\u4e8b\u4ef6",keyword:"onPressed",type:"void Function( )",pro:"\u70b9\u51fb\u4e8b\u4ef6",code:[{path:"flutter/event/onPressed"}]},{keyword:"focusNode",type:"FocusNode",pro:"\u76d1\u542c\u7126\u70b9\u6539\u53d8\u4e8b\u4ef6",code:[{path:"flutter/event/FocusNode/FocusNode"}],link:[{title:"FocusNode",url:"/flutter/event/FocusNode"}]},{keyword:"autofocus",type:"bool",pro:"\u662f\u5426\u81ea\u52a8\u805a\u7126"},{deviceTitle:"\u5176\u5b83",keyword:"materialTapTargetSize",type:"MaterialTapTargetSize",pro:"\u6309\u94ae\u70b9\u51fb\u8303\u56f4",code:[{path:"flutter/public/MaterialTapTargetSize"}]},{keyword:"tooltip",type:"String",pro:"\u957f\u6309\u63d0\u793a"},{keyword:"mini",type:"bool",pro:"\u957f\u6309\u63d0\u793a"},{keyword:"isExtended",type:"bool",pro:"\u662f\u5426\u6269\u5c55"},{keyword:"heroTag",type:"Object",pro:""}]},u=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:d},this.props))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var r=a(561),l=a(4),n=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),d=a(576),u=a(577),y=a(578),m=a(579),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,n=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||n?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},l?p.a.createElement("span",null,l,"\u3001"):p.a.createElement(d.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(y.a,{className:"f24"})),n&&p.a.createElement("span",{className:"c0"},p.a.createElement(m.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(580);a.d(t,"a",function(){return E});var v=window.$fn,E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,l=e.hasShow;(v.hasArray(t)||l)&&a.setState({show:!a.state.show}),v.isString(r)&&a.props.history.push(r)},a.onShow=function(){v.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,n=t.children,o=t.pro,s=t.keyword,c=t.code,i=t.isGray,d=t.link,u=t.url,y=t.order,m=t.noOrder,f=t.isValue,k=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:E,hasArrow:v.hasArray(c)||k,hasClick:v.isString(d),order:m?null:y,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),l&&s&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==E&&(v.hasArray(c)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:v.hasArray(d)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(c)&&c.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),n,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(d)&&p.a.createElement("div",{className:"mt10"},d.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},562:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(560);var r=a(561),l=a(4),n=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),d=a(88),u=a(559),y=a(580),m=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return p.a.createElement("div",null,m.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&p.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(y.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,m.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(l,{key:t,data:e,index:t+1})}):p.a.createElement(l,{data:t}))}}]),t}(p.a.Component)}}]);