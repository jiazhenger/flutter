(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[80],{221:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(7),n=a(8),c=a(10),l=a(9),s=a(11),o=a(0),i=a.n(o),p=a(354),m={title:"\u586b\u5145\u65b9\u5f0f",isGroup:!0,data:[{title:"\u586b\u5145\u65b9\u5f0f",keyword:"BoxFit.x",type:"BoxFit",url:"BoxFitPage",data:[{keyword:"scaleDown",type:"BoxFit",pro:"\u56fe\u7247\u4e0d\u8d85\u8fc7\u6e90\u56fe\u7247\u5927\u5c0f\uff0c \u9ed8\u8ba4"},{keyword:"contain",type:"BoxFit",pro:"\u5168\u56fe\u663e\u793a\uff0c\u663e\u793a\u539f\u6bd4\u4f8b\uff0c\u4e0d\u9700\u5145\u6ee1"},{keyword:"cover",type:"BoxFit",pro:"\u53ef\u80fd\u62c9\u4f38\uff0c\u53ef\u80fd\u88c1\u526a\uff0c\u5145\u6ee1"},{keyword:"fill",type:"BoxFit",pro:"\u5168\u56fe\u663e\u793a\uff0c\u53ef\u80fd\u62c9\u4f38\uff0c\u5145\u6ee1\uff0c\u53d8\u5f62"},{keyword:"fitWidth",type:"BoxFit",pro:"\u53ef\u80fd\u62c9\u4f38\uff0c\u53ef\u80fd\u88c1\u526a\uff0c\u5bbd\u5ea6\u5145\u6ee1"},{keyword:"fitHeight ",type:"BoxFit",pro:"\u53ef\u80fd\u62c9\u4f38\uff0c\u53ef\u80fd\u88c1\u526a\uff0c\u9ad8\u5ea6\u5145\u6ee1"},{keyword:"none",type:"BoxFit",pro:"\u65e0"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/image/style/x/fit"}]}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var r=a(353),n=(a(105),a(22)),c=a(7),l=a(8),s=a(10),o=a(9),i=a(11),p=a(0),m=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,p=t.isGray,d=t.link,y=t.url,w=t.order,k=t.noOrder,E=t.isValue,b=t.hasShow,x=this.state.show;return m.a.createElement("section",null,m.a.createElement(u,{show:x,hasArrow:f.hasArray(i)||b,hasClick:f.isString(d),order:k?null:w,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!E?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),c&&o&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==x&&(f.hasArray(i)||b)?m.a.createElement("div",{className:"rel bbor1 ".concat(x?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(h,{type:"text",url:e.path}))}),l,y&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&m.a.createElement("div",{className:"mt10"},d.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},354:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(352);var r=a(353),n=(a(105),a(22)),c=a(7),l=a(8),s=a(10),o=a(9),i=a(11),p=a(0),m=a.n(p),u=a(75),d=a(351),y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,c=function(t){var a=t.data,c=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},c&&m.a.createElement("b",{className:"f16 c1"},c,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(c,{key:t,data:e,index:t+1})}):m.a.createElement(c,{data:t}))}}]),t}(m.a.Component)}}]);