(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[152],{296:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a(3),n=a(4),s=a(6),l=a(5),c=a(0),o=a.n(c),i=a(584),m={title:"\u8868\u5355\u5143\u7d20\u5e95\u8fb9\u6846\u6837\u5f0f",keyword:"UnderlineInputBorder( )",type:"UnderlineInputBorder",data:[{keyword:"borderRadius",type:"const BorderRadius",pro:"\u5706\u89d2",link:"/flutter/style/borderRadius/BorderRadius"},{keyword:"borderSide",type:"const BorderSide",pro:"\u8fb9\u6846",link:"/flutter/style/border/BorderSide"}]},p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(i.a,Object.assign({data:m},this.props))}}]),a}(o.a.Component)},581:function(e,t,a){"use strict";a(582);var r=a(583),n=a(3),s=a(4),l=a(6),c=a(5),o=a(0),i=a.n(o),m=a(598),p=a(599),u=a(600),d=a(601),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},i.a.createElement("div",{className:"fxm"},n?i.a.createElement("span",null,n,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),s&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},h=window.$http,f=window.$fn,b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){h.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){h.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),E=a(602);a.d(t,"a",(function(){return w}));var k=window.$fn,w=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,s=t.children;(k.hasArray(a)||n||s)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,l=t.pro,c=t.keyword,o=t.code,m=t.deviceTitle,p=t.isGray,u=t.link,d=t.url,h=t.order,f=t.noOrder,w=t.isValue,v=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(y,{show:N,hasArrow:k.hasArray(o)||v||s,hasClick:k.isString(u),order:f?null:h,onClick:this.onClick},c&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},c),a&&i.a.createElement("span",{className:"c0"},a),c&&!w?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),n&&c&&[i.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],l&&i.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==N&&(k.hasArray(o)||v||s)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:k.hasArray(u)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(b,{type:"text",url:e.path}))})),s,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(582);var r=a(583),n=a(3),s=a(4),l=a(6),c=a(5),o=a(0),i=a.n(o),m=a(86),p=a(581),u=a(602),d=window.$fn,y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return i.a.createElement("div",null,d.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&i.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(m.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(n,{key:t,data:e,index:t+1})})):i.a.createElement(n,{data:t}))}}]),a}(i.a.Component)}}]);