(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[127],{289:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(4),n=a(5),l=a(7),s=a(6),o=a(8),c=a(0),i=a.n(c),p=a(560),f={title:"\u5bf9\u9f50\u65b9\u5f0f",isGroup:!0,data:[{title:"\u5bf9\u9f50\u65b9\u5f0f\uff0c\u7ee7\u627f\u4e8e Alignment",keyword:"FractionalOffset.x",type:"FractionalOffset",url:"FractionalOffsetPosition",data:[{keyword:"topLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"centerLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"center",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"centerRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"bottomLeft",pro:" \u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0b"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/position"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset( )",type:"FractionalOffset",url:"FractionalOffsetXY",data:[{keyword:"x",type:"double",pro:"\u6c34\u5e73\u5bf9\u9f50",isValue:!0},{keyword:"y",type:"double",pro:"\u5782\u76f4\u5bf9\u9f50",isValue:!0},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/xy"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndRect( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndRect",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"rect",type:"Rect",pro:"",isValue:!0,link:"/flutter/style/Rect"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndRect"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndSize( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndSize",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"size",type:"Size",pro:"\u5927\u5c0f",isValue:!0,link:"/flutter/style/Size"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndSize"}]}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:f},this.props))}}]),t}(i.a.Component)},557:function(e,t,a){"use strict";a(558);var r=a(559),n=a(4),l=a(5),s=a(7),o=a(6),c=a(8),i=a(0),p=a.n(i),f=a(574),m=a(575),u=a(576),d=a(577),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(f.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(m.a,{className:"f24"}):p.a.createElement(u.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(d.a,{className:"f24"})))},h=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),O=a(578);a.d(t,"a",function(){return E});var b=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,s=t.pro,o=t.keyword,c=t.code,i=t.isGray,f=t.link,m=t.url,u=t.order,d=t.noOrder,h=t.isValue,k=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(y,{show:E,hasArrow:b.hasArray(c)||k,hasClick:b.isString(f),order:d?null:u,onClick:this.onClick},o&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(h?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},o),a&&p.a.createElement("span",{className:"c0"},a),o&&!h?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&o&&[p.a.createElement(O.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==E&&(b.hasArray(c)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:b.hasArray(f)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(c)&&c.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,m&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(f)&&p.a.createElement("div",{className:"mt10"},f.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(558);var r=a(559),n=a(4),l=a(5),s=a(7),o=a(6),c=a(8),i=a(0),p=a.n(i),f=a(88),m=a(557),u=a(578),d=window.$fn,y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,d.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(f.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);