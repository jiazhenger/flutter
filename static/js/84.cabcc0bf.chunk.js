(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[84],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(5),n=a(6),l=a(8),o=a(7),s=a(9),c=a(0),i=a.n(c),p=a(502),u={title:"\u5f39\u7a97",keyword:"BottomSheet( )",type:"BottomSheet ",url:"BottomSheetPage",data:[{keyword:"builder",type:"Widget Function(BuildContext)",pro:"\u81ea\u52a8\u5b9a\u4e49\u5f39\u7a97\u5185\u5bb9",code:[{path:"flutter/public/builder"}]},{keyword:"backgroundColor",type:"Color",pro:"\u80cc\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",code:[{path:"flutter/public/shape"}],link:[{title:"BeveledRectangleBorder",url:"/flutter/style/shape/BeveledRectangleBorder"},{title:"CircleBorder",url:"/flutter/style/shape/CircleBorder"},{title:"RoundedRectangleBorder",url:"/flutter/style/shape/RoundedRectangleBorder"},{title:"StadiumBorder",url:"/flutter/style/shape/StadiumBorder"},{title:"UnderlineInputBorder",url:"/flutter/style/shape/UnderlineInputBorder"},{title:"Border",url:"/flutter/style/border/Border"}]},{keyword:"enableDrag",type:"bool",pro:"\u5f00\u542f\u62d6\u52a8"},{keyword:"animationController",type:"AnimationController",pro:"\u52a8\u753b\u63a7\u4ef6\u5668"},{keyword:"onClosing",type:"void Function",pro:"\u5173\u95ed\u65f6\u6267\u884c",code:[{path:"flutter/event/onClosing"}]},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/popover/showModalBottomSheet/showModalBottomSheet"}],link:[{title:"RaisedButton",url:"/flutter/button/RaisedButton"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},499:function(e,t,a){"use strict";a(500);var r=a(501),n=(a(116),a(22)),l=a(5),o=a(6),s=a(8),c=a(7),i=a(9),p=a(0),u=a.n(p),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},u.a.createElement("div",{className:"fxm"},l?u.a.createElement("span",null,l,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),o&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},m=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,s=t.pro,c=t.keyword,i=t.code,p=t.isGray,m=t.link,y=t.url,w=t.order,b=t.noOrder,k=t.isValue,E=t.hasShow,v=this.state.show;return u.a.createElement("section",null,u.a.createElement(d,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(m),order:b?null:w,onClick:this.onClick},c&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(k?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},c),a&&u.a.createElement("span",{className:"c0"},a),c&&!k?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),l&&c&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(f.hasArray(i)||E)?u.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),o,y&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},502:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(500);var r=a(501),n=(a(116),a(22)),l=a(5),o=a(6),s=a(8),c=a(7),i=a(9),p=a(0),u=a.n(p),d=a(86),m=a(499),y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return u.a.createElement("div",null,y.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&u.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?u.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(l,{key:t,data:e,index:t+1})}):u.a.createElement(l,{data:t}))}}]),t}(u.a.Component)}}]);