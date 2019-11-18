(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[141],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var r=a(5),n=a(6),o=a(8),l=a(7),i=a(9),s=a(0),c=a.n(s),p=a(487),u={title:"Quaternion",isGroup:!0,data:[{title:"",keyword:"v.Quaternion( )",type:"Quaternion",data:[{keyword:"x",type:"double",isValue:!0,pro:"x \u8f74"},{keyword:"y",type:"double",isValue:!0,pro:"y \u8f74"},{keyword:"z",type:"double",isValue:!0,pro:"z \u8f74"},{keyword:"w",type:"double",isValue:!0,pro:"\u5bbd\u5ea6"}]},{title:"",keyword:"v.Quaternion.identity()( )",type:"Quaternion"},{title:"\u590d\u5236",keyword:"v.Quaternion.copy( )",type:"Quaternion",data:[{keyword:"original",type:"Quaternion",isValue:!0,pro:"x \u8f74"}]},{title:"",keyword:"v.Quaternion.axisAngle( )",type:"Quaternion",data:[{keyword:"axis",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"},{keyword:"angle",type:"double",isValue:!0,pro:""}]},{title:"",keyword:"v.Quaternion.dq( )",type:"Quaternion",data:[{keyword:"q",type:"Quaternion",isValue:!0,pro:""},{keyword:"omega",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"}]},{title:"",keyword:"v.Quaternion.euler( )",type:"Quaternion",data:[{keyword:"yaw",type:"double",isValue:!0,pro:""},{keyword:"pitch",type:"double",isValue:!0,pro:""},{keyword:"roll",type:"double",isValue:!0,pro:""}]},{title:"",keyword:"v.Quaternion.fromBuffer( )",type:"Quaternion",data:[{keyword:"buffer",type:"ByteBuffer",isValue:!0,pro:""},{keyword:"offset",type:"int",isValue:!0,pro:""}]},{title:"",keyword:"v.Quaternion.fromFloat64List( )",type:"Quaternion",data:[{keyword:"_qStorage",type:"Float64List",isValue:!0,pro:""}]},{title:"",keyword:"v.Quaternion.fromRotation( )",type:"Quaternion",data:[{keyword:"rotationMatrix",type:"Matrix3",isValue:!0,pro:""}]},{title:"",keyword:"v.Quaternion.fromTwoVectors( )",type:"Quaternion",data:[{keyword:"a",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"},{keyword:"b",type:"Vector3",isValue:!0,pro:"",link:"/flutter/v/Vector3"}]},{title:"",keyword:"v.Quaternion.random( )",type:"Quaternion",data:[{keyword:"rn",type:"Random",isValue:!0,pro:""}]}]},y=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(c.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),o=a(5),l=a(6),i=a(8),s=a(7),c=a(9),p=a(0),u=a.n(p),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,o=e.order,l=e.hasClick,i=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:i},u.a.createElement("div",{className:"fxm"},o?u.a.createElement("span",null,o,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),l&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,m=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return m.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return f});var w=window.$fn,f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(w.hasArray(t)||n)&&a.setState({show:!a.state.show}),w.isString(r)&&a.props.history.push(r)},a.onShow=function(){w.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,l=t.children,i=t.pro,s=t.keyword,c=t.code,p=t.isGray,d=t.link,m=t.url,f=t.order,k=t.noOrder,b=t.isValue,v=t.hasShow,E=this.state.show;return u.a.createElement("section",null,u.a.createElement(y,{show:E,hasArrow:w.hasArray(c)||v,hasClick:w.isString(d),order:k?null:f,onClick:this.onClick},s&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},s),a&&u.a.createElement("span",{className:"c0"},a),s&&!b?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),o&&s&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],i&&u.a.createElement("span",{className:"g6 f13",key:2},i)),void 0!==E&&(w.hasArray(c)||v)?u.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:w.hasArray(d)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(c)&&c.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),l,m&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(d)&&u.a.createElement("div",{className:"mt10"},d.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(485);var r=a(486),n=(a(116),a(22)),o=a(5),l=a(6),i=a(8),s=a(7),c=a(9),p=a(0),u=a.n(p),y=a(86),d=a(484),m=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,o=function(t){var a=t.data,o=t.index;return u.a.createElement("div",null,m.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},o&&u.a.createElement("b",{className:"f16 c1"},o,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,m.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?u.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(y.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(o,{key:t,data:e,index:t+1})}):u.a.createElement(o,{data:t}))}}]),t}(u.a.Component)}}]);