(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[101],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var r=a(5),n=a(6),l=a(8),o=a(7),i=a(9),s=a(0),c=a.n(s),p=a(502),u={title:"\u7f29\u653e",isGroup:!0,data:[{title:"0 \u77e9\u9635",keyword:"Matrix4.zero( )",type:"Matrix4"},{title:"\u521d\u59cb\u72b6\u6001,4*4\u7684\u5355\u4f4d\u77e9\u9635",keyword:"Matrix4.identity( )",type:"Matrix4"},{title:"\u53d6\u76f8\u53cd\u7684\u77e9\u9635",keyword:"Matrix4.inverted( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"\u590d\u5236\u77e9\u9635",keyword:"Matrix4.copy( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"\u5408\u5e76\u77e9\u9635",keyword:"Matrix4.outer( )",type:"Matrix4",data:[{keyword:"u",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"v",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"}]},{title:"16\u4f4d\u6570\u7ec4\u8f6c4*4\u77e9\u9635",keyword:"Matrix4.fromList( )",type:"Matrix4",data:[{keyword:"values",type:"List<double>",isValue:!0,pro:"16 \u4f4d\u6570"}]},{title:"",keyword:"Matrix4.tryInvert( )",type:"Matrix4",data:[{keyword:"other",type:"Matrix4",isValue:!0,pro:"\u4efb\u610f Matrix4"}]},{title:"",keyword:"Matrix4.columns( )",type:"Matrix4",data:[{keyword:"arg1",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg2",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg3",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"},{keyword:"arg4",type:"Vector4",isValue:!0,link:"/flutter/v/Vector4"}]},{title:"\u590d\u5408\u5e73\u79fb\u3001\u65cb\u8f6c\u3001\u7f29\u653e\uff0c\u5f62\u6210\u65b0\u7684\u72b6\u6001",keyword:"Matrix4.compose( )",type:"Matrix4",data:[{keyword:"translation",type:"Vector3",isValue:!0,pro:"\u4f4d\u79fb",link:"/flutter/v/Vector3"},{keyword:"rotation",type:"Quaternion",isValue:!0,pro:"\u65cb\u8f6c",link:"/flutter/v/Quaternion"},{keyword:"scale",type:"Vector3",isValue:!0,pro:"\u7f29\u653e",link:"/flutter/v/Vector3"}]},{title:"",keyword:"Matrix4.fromBuffer( )",type:"Quaternion",data:[{keyword:"buffer",type:"ByteBuffer",isValue:!0,pro:""},{keyword:"offset",type:"int",isValue:!0,pro:""}]},{title:"",keyword:"Matrix4.fromFloat64List( )",type:"Quaternion",data:[{keyword:"_qStorage",type:"Float64List",isValue:!0,pro:""}]}]},y=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(c.a.Component)},499:function(e,t,a){"use strict";a(500);var r=a(501),n=(a(116),a(22)),l=a(5),o=a(6),i=a(8),s=a(7),c=a(9),p=a(0),u=a.n(p),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,o=e.hasClick,i=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:i},u.a.createElement("div",{className:"fxm"},l?u.a.createElement("span",null,l,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),o&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},m=window.$http,d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return k});var f=window.$fn,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,i=t.pro,s=t.keyword,c=t.code,p=t.isGray,m=t.link,d=t.url,k=t.order,w=t.noOrder,x=t.isValue,b=t.hasShow,E=this.state.show;return u.a.createElement("section",null,u.a.createElement(y,{show:E,hasArrow:f.hasArray(c)||b,hasClick:f.isString(m),order:w?null:k,onClick:this.onClick},s&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(x?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},s),a&&u.a.createElement("span",{className:"c0"},a),s&&!x?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),l&&s&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],i&&u.a.createElement("span",{className:"g6 f13",key:2},i)),void 0!==E&&(f.hasArray(c)||b)?u.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(c)&&c.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),o,d&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},502:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(500);var r=a(501),n=(a(116),a(22)),l=a(5),o=a(6),i=a(8),s=a(7),c=a(9),p=a(0),u=a.n(p),y=a(86),m=a(499),d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return u.a.createElement("div",null,d.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&u.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?u.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(y.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(l,{key:t,data:e,index:t+1})}):u.a.createElement(l,{data:t}))}}]),t}(u.a.Component)}}]);