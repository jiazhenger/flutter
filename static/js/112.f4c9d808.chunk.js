(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[112],{274:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),l=a(7),s=a(6),c=a(8),o=a(0),i=a.n(o),p=a(533),m={title:"solve",isGroup:!0,data:[{title:"",keyword:"Matrix4.solve( )",type:"Matrix4",data:[{keyword:"A",type:"Matrix4",isValue:!0,pro:""},{keyword:"x",type:"Vector4",isValue:!0,pro:"",link:"/flutter/v/Vector4"},{keyword:"b",type:"Vector4",isValue:!0,pro:"",link:"/flutter/v/Vector4"}]},{title:"",keyword:"Matrix4.solve2( )",type:"Matrix4",data:[{keyword:"A",type:"Matrix4",isValue:!0,pro:""},{keyword:"x",type:"Vector2",isValue:!0,pro:"",link:"/flutter/v/Vector2"},{keyword:"b",type:"Vector2",isValue:!0,pro:"",link:"/flutter/v/Vector2"}]},{title:"",keyword:"Matrix4.solve3( )",type:"Matrix4",data:[{keyword:"A",type:"Matrix4",isValue:!0,pro:""},{keyword:"x",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"},{keyword:"b",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var r=a(532),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(547),u=a(548),y=a(549),d=a(550),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(y.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(d.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(551);a.d(t,"a",function(){return v});var E=window.$fn,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,s=t.pro,c=t.keyword,o=t.code,i=t.isGray,m=t.link,u=t.url,y=t.order,d=t.noOrder,f=t.isValue,k=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:v,hasArrow:E.hasArray(o)||k,hasClick:E.isString(m),order:d?null:y,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&c&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(E.hasArray(o)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(m)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(531);var r=a(532),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(88),u=a(530),y=a(551),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,d.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(y.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);