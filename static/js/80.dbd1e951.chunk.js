(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[80],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(6),n=a(7),c=a(9),l=a(8),s=a(10),o=a(0),i=a.n(o),p=a(363),m={title:"Size",isGroup:!0,data:[{title:"\u65e0",keyword:"Size.zero",type:"Rect"},{title:"\u65e0\u9650",keyword:"Size.infinite",type:"Rect"},{title:"\u5c3a\u5bf8",keyword:"Size( )",type:"Rect",data:[{keyword:"width",type:"double",pro:"\u5bbd"},{keyword:"height",type:"double",pro:"\u9ad8"}]},{title:"\u590d\u5236",keyword:"Size.copy( )",type:"Rect",data:[{keyword:"source",type:"Size",pro:"",isValue:!0,code:[{path:"flutter/style/Size/copy"}]}]},{title:"\u6b63\u65b9\u5f62",keyword:"Size.square( )",type:"Rect",data:[{keyword:"dimension",type:"double",pro:"",isValue:!0}]},{title:"\u5bbd",keyword:"Size.fromWidth( )",type:"Rect",data:[{keyword:"width",type:"double",pro:"\u9ad8",isValue:!0}]},{title:"\u9ad8",keyword:"Size.fromHeight( )",type:"Rect",data:[{keyword:"height",type:"double",pro:"\u9ad8",isValue:!0}]},{title:"\u5706\u89d2",keyword:"Size.fromRadius( )",type:"Rect",data:[{keyword:"radius",type:"double",pro:"\u89d2\u5ea6\u503c",isValue:!0}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},360:function(e,t,a){"use strict";a(361);var r=a(362),n=(a(106),a(22)),c=a(6),l=a(7),s=a(9),o=a(8),i=a(10),p=a(0),m=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,p=t.isGray,d=t.link,y=t.url,w=t.order,k=t.noOrder,b=t.isValue,E=t.hasShow,v=this.state.show;return m.a.createElement("section",null,m.a.createElement(u,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(d),order:k?null:w,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),c&&o&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(f.hasArray(i)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(h,{type:"text",url:e.path}))}),l,y&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&m.a.createElement("div",{className:"mt10"},d.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},363:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(361);var r=a(362),n=(a(106),a(22)),c=a(6),l=a(7),s=a(9),o=a(8),i=a(10),p=a(0),m=a.n(p),u=a(76),d=a(360),y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,c=function(t){var a=t.data,c=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},c&&m.a.createElement("b",{className:"f16 c1"},c,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(c,{key:t,data:e,index:t+1})}):m.a.createElement(c,{data:t}))}}]),t}(m.a.Component)}}]);