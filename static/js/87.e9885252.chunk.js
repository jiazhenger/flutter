(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[87],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return m});var a=r(6),n=r(7),o=r(9),l=r(8),s=r(10),c=r(0),i=r.n(c),d=r(363),p={title:"\u5355\u8fb9\u6837\u5f0f",isGroup:!0,data:[{title:"\u56db\u8fb9\u6837\u5f0f",keyword:"Border.all( )",type:"Border",url:"BorderAll",data:[{keyword:"color",type:"Color",pro:"\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"style",type:"BorderStyle",pro:"\u8fb9\u6846\u6837\u5f0f",code:[{path:"flutter/public/borderStyle"}]}]},{title:"\u8fb9\u6837\u5f0f",keyword:"Border( )",type:"Border",url:"BorderOne",data:[{keyword:"left",type:"BorderSide",pro:"\u5de6\u8fb9",link:"/flutter/style/border/BorderSide"},{keyword:"top",type:"BorderSide",pro:"\u4e0a\u8fb9",link:"/flutter/style/border/BorderSide"},{keyword:"right",type:"BorderSide",pro:"\u53f3\u8fb9",link:"/flutter/style/border/BorderSide"},{keyword:"bottom",type:"BorderSide",pro:"\u4e0b\u8fb9",link:"/flutter/style/border/BorderSide"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/border/Border/one"}]}]},{title:"\u5355\u8fb9\u6837\u5f0f",keyword:"Border.fromBorderSide( )",type:"Border",data:[{keyword:"side",type:"BorderSide",pro:"\u8fb9\u6846\u6837\u5f0f",isValue:!0,link:"/flutter/style/border/BorderSide"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/border/Border/fromBorderSide"}]}]},{title:"\u5408\u5e76\u8fb9\u6846",keyword:"Border.merge( )",type:"Border",data:[{keyword:"a",type:"Border",pro:"\u4e00\u4e2a\u8fb9",isValue:!0},{keyword:"b",type:"Border",pro:"\u4e00\u4e2a\u8fb9",isValue:!0},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/border/Border/merge"}]}]}]},m=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},360:function(e,t,r){"use strict";r(361);var a=r(362),n=(r(106),r(22)),o=r(6),l=r(7),s=r(9),c=r(8),i=r(10),d=r(0),p=r.n(d),m=function(e){var t=e.children,r=e.hasArrow,a=e.show,o=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(r||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),r&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:a?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,y=window.$fn,h=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},r.getText=function(e){u.getText(e).then(function(e){r.setState({data:e.split("\n")})})},r.getDart=function(e){u.getDart(e).then(function(e){r.setState({data:e.split("\n")})})},r}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,r=t.type,a=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===r?this.getText(a):"dart"===r&&this.getDart(a)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);r.d(t,"a",function(){return k});var f=window.$fn,k=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},r.onClick=function(){var e=r.props,t=e.code,a=e.link,n=e.hasShow;(f.hasArray(t)||n)&&r.setState({show:!r.state.show}),f.isString(a)&&r.props.history.push(a)},r.onShow=function(){f.showPhone(r.props.url)},r}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,r=t.title,o=t.type,l=t.children,s=t.pro,c=t.keyword,i=t.code,d=t.isGray,u=t.link,y=t.url,k=t.order,w=t.noOrder,b=t.isValue,E=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(m,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(u),order:w?null:k,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},c),r&&p.a.createElement("span",{className:"c0"},r),c&&!b?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),o&&c&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(f.hasArray(i)||E)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),l,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(a.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&p.a.createElement("div",{className:"mt10"},u.map(function(t,r){return p.a.createElement(a.a,{key:r,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},363:function(e,t,r){"use strict";r.d(t,"a",function(){return h});r(361);var a=r(362),n=(r(106),r(22)),o=r(6),l=r(7),s=r(9),c=r(8),i=r(10),d=r(0),p=r.n(d),m=r(76),u=r(360),y=window.$fn,h=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},r.onShow=function(e,t){r.setState({show:!r.state.show})},r}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,r=t.isGroup,o=function(t){var r=t.data,o=t.index;return p.a.createElement("div",null,y.hasObject(r)&&r.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},o&&p.a.createElement("b",{className:"f16 c1"},o,"\u3001"),r.grayText&&p.a.createElement("span",{className:"mr5 g9"},r.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},r.keyword),r.type&&r.keyword&&[p.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},r.title),r.url&&p.a.createElement(a.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(r.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(r.data)&&r.data.map(function(t,r){return[t.deviceTitle?p.a.createElement("h2",{key:"a"+r,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+r,type:t.type,order:r+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},r?t.data.map(function(e,t){return p.a.createElement(o,{key:t,data:e,index:t+1})}):p.a.createElement(o,{data:t}))}}]),t}(p.a.Component)}}]);