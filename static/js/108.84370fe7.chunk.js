(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[108],{270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var r=a(4),n=a(5),l=a(7),o=a(6),s=a(8),i=a(0),c=a.n(i),p=a(533),u={title:"\u7f29\u653e",isGroup:!0,data:[{title:"0 \u77e9\u9635",keyword:"Matrix4.zero( )",type:"Matrix4"},{title:"\u521d\u59cb\u72b6\u6001,4*4\u7684\u5355\u4f4d\u77e9\u9635",keyword:"Matrix4.identity( )",type:"Matrix4"},{title:"\u53d6\u76f8\u53cd\u7684\u77e9\u9635",keyword:"Matrix4.inverted( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"\u590d\u5236\u77e9\u9635",keyword:"Matrix4.copy( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"\u5408\u5e76\u77e9\u9635",keyword:"Matrix4.outer( )",type:"Matrix4",data:[{keyword:"u",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"v",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"}]},{title:"16\u4f4d\u6570\u7ec4\u8f6c4*4\u77e9\u9635",keyword:"Matrix4.fromList( )",type:"Matrix4",data:[{keyword:"values",type:"List<double>",isValue:!0,pro:"16 \u4f4d\u6570"}]},{title:"",keyword:"Matrix4.tryInvert( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"",keyword:"Matrix4.columns( )",type:"Matrix4",data:[{keyword:"arg1",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg2",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg3",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg4",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"}]},{title:"\u590d\u5408\u5e73\u79fb\u3001\u65cb\u8f6c\u3001\u7f29\u653e\uff0c\u5f62\u6210\u65b0\u7684\u72b6\u6001",keyword:"Matrix4.compose( )",type:"Matrix4",data:[{keyword:"translation",type:"Vector3",isValue:!0,pro:"\u4f4d\u79fb",link:"/flutter/v/Vector3"},{keyword:"rotation",type:"Quaternion",isValue:!0,pro:"\u65cb\u8f6c",link:"/flutter/v/Quaternion"},{keyword:"scale",type:"Vector3",isValue:!0,pro:"\u7f29\u653e",link:"/flutter/v/Vector3"}]},{title:"",keyword:"Matrix4.fromBuffer( )",type:"Quaternion",data:[{keyword:"buffer",type:"ByteBuffer",isValue:!0,pro:""},{keyword:"offset",type:"int",isValue:!0,pro:""}]},{title:"",keyword:"Matrix4.fromFloat64List( )",type:"Quaternion",data:[{keyword:"_qStorage",type:"Float64List",isValue:!0,pro:""}]}]},y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(c.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),n=a(4),l=a(5),o=a(7),s=a(6),i=a(8),c=a(0),p=a.n(c),u=a(547),y=a(548),m=a(549),d=a(550),f=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(u.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(y.a,{className:"f24"}):p.a.createElement(m.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(d.a,{className:"f24"})))},h=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),x=a(551);a.d(t,"a",function(){return E});var b=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,o=t.pro,s=t.keyword,i=t.code,c=t.isGray,u=t.link,y=t.url,m=t.order,d=t.noOrder,h=t.isValue,k=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(f,{show:E,hasArrow:b.hasArray(i)||k,hasClick:b.isString(u),order:d?null:m,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(c?"gray":""," ").concat(h?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!h?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&s&&[p.a.createElement(x.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==E&&(b.hasArray(i)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:b.hasArray(u)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(u)&&p.a.createElement("div",{className:"mt10"},u.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return f});a(531);var r=a(532),n=a(4),l=a(5),o=a(7),s=a(6),i=a(8),c=a(0),p=a.n(c),u=a(88),y=a(530),m=a(551),d=window.$fn,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,d.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(m.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(y.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);