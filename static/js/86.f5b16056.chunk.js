(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[86],{223:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(9),n=a(10),s=a(12),l=a(11),o=a(13),c=a(0),i=a.n(c),d=a(324),p={title:"\u56db\u8fb9\u504f\u79fb\u91cf",isGroup:!0,data:[{title:"\u65e0",grayText:"const",keyword:"EdgeInsets.zero",type:"EdgeInsets"},{title:"\u56db\u8fb9",grayText:"const",keyword:"EdgeInsets.all( )",type:"EdgeInsets",url:"EdgeInsetsAll",data:[{keyword:"value",type:"double",pro:"\u5782\u76f4\u504f\u79fb",isValue:!0}]},{title:"\u6c34\u5e73\u5782\u76f4",grayText:"const",keyword:"EdgeInsets.symmetric( )",type:"EdgeInsets",url:"EdgeInsetsSymmetric",data:[{keyword:"vertical",type:"double",pro:"\u5782\u76f4"},{keyword:"horizontal",type:"double",pro:"\u6c34\u5e73",code:[{path:"flutter/style/offset/EdgeInsets/symmetric"}]}]},{title:"\u5355\u8fb9",grayText:"const",keyword:"EdgeInsets.only( )",type:"EdgeInsets",url:"EdgeInsetsOnly",data:[{keyword:"left",type:"double",pro:"\u5de6"},{keyword:"top",type:"double",pro:"\u4e0a"},{keyword:"right",type:"double",pro:"\u53f3"},{keyword:"bottom",type:"double",pro:"\u4e0b",code:[{path:"flutter/style/offset/EdgeInsets/only"}]}]},{title:"\u5355\u8fb9",grayText:"const",keyword:"EdgeInsets.fromLTRB( )",type:"EdgeInsets",url:"EdgeInsetsOnly",data:[{keyword:"left",type:"double",pro:"\u5de6",isValue:!0},{keyword:"top",type:"double",pro:"\u4e0a",isValue:!0},{keyword:"right",type:"double",pro:"\u53f3",isValue:!0},{keyword:"bottom",type:"double",pro:"\u4e0b",isValue:!0,code:[{path:"flutter/style/offset/EdgeInsets/fromLTRB"}]}]},{title:"\u6839\u636e\u673a\u578b\u5c4f\u5e55\u5c3a\u5bf8\u5b9a\u4e49",grayText:"const",keyword:"EdgeInsets.fromWindowPadding( )",type:"EdgeInsets",url:"EdgeInsetsFromWindowPadding",data:[{keyword:"padding",type:"ui.WindowPadding",pro:"\u53f3",isValue:!0},{keyword:"devicePixelRatio",type:"double",pro:"\u4e0b",isValue:!0,code:[{path:"flutter/style/offset/EdgeInsets/fromWindowPadding"}]}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},321:function(e,t,a){"use strict";a(322);var r=a(323),n=(a(101),a(21)),s=a(9),l=a(10),o=a(12),c=a(11),i=a(13),d=a(0),p=a.n(d),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,s=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},s?p.a.createElement("span",null,s,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:"right-circle"})))},m=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link;f.hasArray(t)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,l=t.children,o=t.pro,c=t.keyword,i=t.code,d=t.isGray,m=t.link,y=t.url,w=t.order,E=t.noOrder,k=t.isValue,g=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:g,hasArrow:f.hasArray(i),hasClick:f.isString(m),order:E?null:w,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(k?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!k?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),s&&c&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==g&&f.hasArray(i)?p.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),l,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},324:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(322);var r=a(323),n=(a(101),a(21)),s=a(9),l=a(10),o=a(12),c=a(11),i=a(13),d=a(0),p=a.n(d),u=a(71),m=a(321),y=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=(this.state.show,this.props.data),a=t.isGroup,s=function(t){var a=t.data,s=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"2px solid red",padding:"10px 0",flexWrap:"wrap"}},s&&p.a.createElement("b",{className:"f16 c1"},s,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(s,{key:t,data:e,index:t+1})}):p.a.createElement(s,{data:t}))}}]),t}(p.a.Component)}}]);