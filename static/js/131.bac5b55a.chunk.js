(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[131],{291:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(4),n=a(5),l=a(7),s=a(6),c=a(8),o=a(0),i=a.n(o),m=a(562),p={title:"\u5355\u8fb9\u6837\u5f0f",isGroup:!0,data:[{title:"\u65e0",grayText:"const",keyword:"BorderSide.zero",type:"Offset"},{title:"\u8fb9\u6837\u5f0f",grayText:"const",keyword:"BorderSide( )",type:"BorderSide",url:"BorderSidePage",data:[{keyword:"color",type:"Color",pro:"\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"style",type:"BorderStyle",pro:"\u8fb9\u6846\u6837\u5f0f",code:[{path:"flutter/public/borderStyle"}]}]},{title:"\u5408\u5e76\u8fb9\u6846",keyword:"BorderSide.merge( )",type:"BorderSide",url:"BorderSideMerge",data:[{keyword:"a",type:"BorderSide",pro:"\u4e00\u4e2a\u8fb9",isValue:!0},{keyword:"b",type:"BorderSide",pro:"\u4e00\u4e2a\u8fb9",isValue:!0},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/border/BorderSide/merge"}]}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var r=a(561),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),p=a(576),d=a(577),u=a(578),y=a(579),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},n?m.a.createElement("span",null,n,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(d.a,{className:"f24"}):m.a.createElement(u.a,{className:"f24"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(580);a.d(t,"a",function(){return N});var E=window.$fn,N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,s=t.pro,c=t.keyword,o=t.code,i=t.isGray,p=t.link,d=t.url,u=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,N=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:N,hasArrow:E.hasArray(o)||w,hasClick:E.isString(p),order:y?null:u,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),n&&c&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==N&&(E.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(k,{type:"text",url:e.path}))}),l,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},562:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(560);var r=a(561),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),m=a.n(i),p=a(88),d=a(559),u=a(580),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&m.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(n,{key:t,data:e,index:t+1})}):m.a.createElement(n,{data:t}))}}]),t}(m.a.Component)}}]);