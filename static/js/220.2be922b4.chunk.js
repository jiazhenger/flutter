(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[220],{382:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),l=a(5),n=a(7),i=a(6),c=a(8),o=a(0),s=a.n(o),m=a(533),p={title:"\u56fe\u7247\u63a7\u4ef6",keyword:"Image( )",type:"Image",url:"ImagePage",data:[{keyword:"image",type:"ImageProvider<dynamic>",pro:"\u56fe\u7247",code:[{path:"flutter/widget/image/image"}],link:[{title:"AssetImage",url:"/flutter/image/AssetImage"},{title:"NetworkImage",url:"/flutter/image/NetworkImage"}]},{keyword:"frameBuilder",type:"ImageFrameBuilder",pro:"\u521b\u5efa\u56fe\u7247\u7684 widget",code:[{path:"flutter/widget/image/frameBuilder"}]},{keyword:"loadingBuilder",type:"ImageLoadingBuilder",pro:"\u663e\u793a\u56fe\u7247\u52a0\u8f7d\u65f6\u7684 widget",code:[{path:"flutter/widget/image/loadingBuilder"}]},{deviceTitle:"Image \u56fe\u7247\u516c\u5171\u5c5e\u6027",keyword:"color",type:"Color",pro:"\u6df7\u5408\u7684\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"centerSlice",type:"Rect",pro:"\u62c9\u4f38",code:[{path:"flutter/widget/image/centerSlice"}],link:[{title:"Rect",url:"/flutter/style/Rect"}]},{keyword:"filterQuality",type:"FilterQuality",pro:"\u56fe\u7247\u8d28\u91cf",code:[{path:"flutter/widget/image/style/x/filterQuality"}],link:[{title:"FilterQuality",url:"/flutter/image/FilterQuality"}]},{keyword:"colorBlendMode",type:"BlendMode",pro:"\u6df7\u5408\u7684\u6a21\u5f0f",link:"/flutter/image/BlendMode"},{keyword:"gaplessPlayback",type:"bool",pro:"\u662f\u5426\u4fdd\u7559\u539f\u56fe"},{keyword:"semanticsLabel",type:"String",pro:"\u56fe\u50cf\u7684\u8bed\u4e49\u63cf\u8ff0",code:[{path:"flutter/public/semanticsLabel"}]},{deviceTitle:"\u6240\u6709\u56fe\u7247\u516c\u5171\u5c5e\u6027",keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"height",type:"double",pro:"\u9ad8\u5ea6"},{keyword:"fit",type:"BoxFit",pro:"\u586b\u5145\u65b9\u5f0f",code:[{path:"flutter/widget/image/style/x/fit"}],link:[{title:"BoxFit",url:"/flutter/image/BoxFit"}]},{keyword:"repeat",type:"ImageRepeat",pro:"\u586b\u5145\u65b9\u5f0f",code:[{path:"flutter/widget/image/style/x/repeat"}],link:[{title:"ImageRepeat",url:"/flutter/image/ImageRepeat"}]},{keyword:"alignment",type:"AlignmentGeometry",pro:"\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/public/alignment"}],link:[{title:"Alignment",url:"/flutter/style/align/Alignment"},{title:"FractionalOffset",url:"/flutter/style/align/FractionalOffset"}]},{keyword:"excludeFromSemantics",type:"bool",pro:"\u662f\u5426\u4ece\u8bed\u4e49\u4e2d\u6392\u9664\u6b64\u56fe\u50cf"},{keyword:"matchTextDirection",type:"bool",pro:"\u662f\u5426\u5728\u6587\u672c\u65b9\u5411\u4e0a\u7ed8\u5236\u56fe\u50cf"}]},u=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(s.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),l=a(4),n=a(5),i=a(7),c=a(6),o=a(8),s=a(0),m=a.n(s),p=a(547),u=a(548),d=a(549),y=a(550),f=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,n=e.hasClick,i=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||n?"cp tap":""),style:{userSelect:"none"},onClick:i},m.a.createElement("div",{className:"fxm"},l?m.a.createElement("span",null,l,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),n&&m.a.createElement("span",{className:"c0"},m.a.createElement(y.a,{className:"f24"})))},h=window.$http,g=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return g.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),k=a(551);a.d(t,"a",function(){return E});var b=window.$fn,E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,l=e.hasShow;(b.hasArray(t)||l)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,n=t.children,i=t.pro,c=t.keyword,o=t.code,s=t.isGray,p=t.link,u=t.url,d=t.order,y=t.noOrder,h=t.isValue,g=t.hasShow,E=this.state.show;return m.a.createElement("section",null,m.a.createElement(f,{show:E,hasArrow:b.hasArray(o)||g,hasClick:b.isString(p),order:y?null:d,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(s?"gray":""," ").concat(h?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!h?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),l&&c&&[m.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],i&&m.a.createElement("span",{className:"g6 f13",key:2},i)),void 0!==E&&(b.hasArray(o)||g)?m.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(w,{type:"text",url:e.path}))}),n,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(531);var r=a(532),l=a(4),n=a(5),i=a(7),c=a(6),o=a(8),s=a(0),m=a.n(s),p=a(88),u=a(530),d=a(551),y=window.$fn,f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&m.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(l,{key:t,data:e,index:t+1})}):m.a.createElement(l,{data:t}))}}]),t}(m.a.Component)}}]);