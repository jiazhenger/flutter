(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[78],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(9),n=a(10),l=a(12),s=a(11),o=a(13),c=a(0),i=a.n(c),p=a(324),f={title:"\u5bf9\u9f50\u65b9\u5f0f",isGroup:!0,data:[{title:"\u5bf9\u9f50\u65b9\u5f0f",keyword:"Alignment.x",type:"FractionalOffset",url:"FractionalOffsetPosition",data:[{keyword:"topLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"centerLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"center",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"centerRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"bottomLeft",pro:" \u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0b",code:[{path:"flutter/style/align/FractionalOffset/position"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset( )",type:"FractionalOffset",url:"FractionalOffsetXY",data:[{keyword:"x",type:"double",pro:"\u6c34\u5e73\u5bf9\u9f50",isValue:!0},{keyword:"y",type:"double",pro:"\u5782\u76f4\u5bf9\u9f50",isValue:!0,code:[{path:"flutter/style/align/Alignment/xy"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndRect( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndRect",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"rect",type:"Rect",pro:"",isValue:!0,code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndRect"}],link:[{title:"Rect",url:"/flutter/style/border/Rect"},{title:"Offset",url:"/flutter/style/offset/Offset"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndSize( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndSize",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"size",type:"Size",pro:"\u5927\u5c0f",isValue:!0,code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndSize"}],link:[{title:"Size",url:"/flutter/style/border/Size"},{title:"Offset",url:"/flutter/style/offset/Offset"}]}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:f},this.props))}}]),t}(i.a.Component)},321:function(e,t,a){"use strict";a(322);var r=a(323),n=(a(101),a(21)),l=a(9),s=a(10),o=a(12),c=a(11),i=a(13),p=a(0),f=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,s=e.hasClick,o=e.onClick;e.hasGo;return f.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:o},f.a.createElement("div",{className:"fxm"},l?f.a.createElement("span",null,l,"\u3001"):f.a.createElement(n.a,{className:"f14",type:"share-alt"}),f.a.createElement("div",{className:"ml10"},t)),a&&f.a.createElement("span",{className:"c0"},f.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),s&&f.a.createElement("span",{className:"c0"},f.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,d=window.$fn,y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),f.a.createElement("section",null,e.length>0?f.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},f.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return f.a.createElement("dt",{key:t},t+1)})),f.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return f.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):f.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(f.a.Component);a.d(t,"a",function(){return k});var h=window.$fn,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link;h.hasArray(t)&&a.setState({show:!a.state.show}),h.isString(r)&&a.props.history.push(r)},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,s=t.children,o=t.pro,c=t.keyword,i=t.code,p=t.isGray,u=t.link,d=t.url,k=t.order,w=t.noOrder,O=t.isValue,b=this.state.show;return f.a.createElement("section",null,f.a.createElement(m,{show:b,hasArrow:h.hasArray(i),hasClick:h.isString(u),order:w?null:k,onClick:this.onClick},c&&f.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(O?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:h.stop},c),a&&f.a.createElement("span",{className:"c0"},a),c&&!O?f.a.createElement("i",{className:"mlr10"},":"):f.a.createElement("i",{className:"ml10"}),l&&c&&[f.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),f.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&f.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==b&&h.hasArray(i)?f.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:h.hasArray(u)?"10px 0 5px":"10px 0"},onClick:h.stop},i.map(function(e,t){return f.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&f.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),f.a.createElement(y,{type:"text",url:e.path}))}),s,d&&f.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},f.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(u)&&f.a.createElement("div",{className:"mt10"},u.map(function(t,a){return f.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},f.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(f.a.Component)},324:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(322);var r=a(323),n=(a(101),a(21)),l=a(9),s=a(10),o=a(12),c=a(11),i=a(13),p=a(0),f=a.n(p),m=a(71),u=a(321),d=window.$fn,y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=(this.state.show,this.props.data),a=t.isGroup,l=function(t){var a=t.data,l=t.index;return f.a.createElement("div",null,d.hasObject(a)&&a.keyword&&f.a.createElement("header",{className:"fxm",style:{borderBottom:"2px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&f.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&f.a.createElement("span",{className:"mr5 g9"},a.grayText),f.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[f.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),f.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],f.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&f.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),f.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?f.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,f.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return f.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return f.a.createElement(l,{key:t,data:e,index:t+1})}):f.a.createElement(l,{data:t}))}}]),t}(f.a.Component)}}]);