(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[80],{225:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var r=t(3),n=t(4),c=t(6),s=t(5),l=t(0),o=t.n(l),i=t(584),m={title:"\u53d8\u91cf\u58f0\u660e",data:[{keyword:"var/final/const",pro:"\u53d8\u91cf\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var"}]},{keyword:"dynamic",pro:"\u6570\u636e\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/type"}]},{keyword:"final/const + dynamic",pro:"\u53d8\u91cf\u58f0\u660e  + \u6570\u636e\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-dynamic"}]},{keyword:"var/final/const + <T>",pro:"\u53d8\u91cf\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-fan"}]},{keyword:"dynamic + <T>",pro:"\u6570\u636e\u7c7b\u578b\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/dynamic-fan"}]},{keyword:"var/final/const + dynamic + <T>",pro:"\u53d8\u91cf\u58f0\u660e  + \u6570\u636e\u7c7b\u578b\u58f0\u660e  + \u6cdb\u7c7b\u578b\u58f0\u660e",code:[{path:"dart/grammar/var/mix/var-dynamic-fan"}]}]},p=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,Object.assign({data:m},this.props))}}]),t}(o.a.Component)},581:function(e,a,t){"use strict";t(582);var r=t(583),n=t(3),c=t(4),s=t(6),l=t(5),o=t(0),i=t.n(o),m=t(598),p=t(599),d=t(600),u=t(601),y=function(e){var a=e.children,t=e.hasArrow,r=e.show,n=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(t||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},n?i.a.createElement("span",null,n,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},a)),t&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(d.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(u.a,{className:"f24"})))},h=window.$http,f=window.$fn,v=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={data:[]},e.getText=function(a){h.getText(a).then((function(a){e.setState({data:a.split("\n")})}))},e.getDart=function(a){h.getDart(a).then((function(a){e.setState({data:a.split("\n")})}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,a=this.props,t=a.type,r=a.url;return f.hasArray(this.state.data)||this.props.async||("text"===t?this.getText(r):"dart"===t&&this.getDart(r)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,a){return i.a.createElement("dt",{key:a},a+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,a){return i.a.createElement("dd",{key:a,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component),w=t(602);t.d(a,"a",(function(){return E}));var k=window.$fn,E=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={},e.onClick=function(){var a=e.props,t=a.code,r=a.link,n=a.hasShow,c=a.children;(k.hasArray(t)||n||c)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=this.props,t=a.title,n=a.type,c=a.children,s=a.pro,l=a.keyword,o=a.code,m=a.deviceTitle,p=a.isGray,d=a.link,u=a.url,h=a.order,f=a.noOrder,E=a.isValue,b=a.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(y,{show:N,hasArrow:k.hasArray(o)||b||c,hasClick:k.isString(d),order:f?null:h,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},l),t&&i.a.createElement("span",{className:"c0"},t),l&&!E?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),n&&l&&[i.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==N&&(k.hasArray(o)||b||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:k.hasArray(d)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map((function(e,a){return i.a.createElement("div",{key:a,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(v,{type:"text",url:e.path}))})),c,u&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(d)&&i.a.createElement("div",{className:"mt10"},d.map((function(a,t){return i.a.createElement(r.a,{key:t,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(a.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},a.title))})))):null))}}]),t}(i.a.Component)},584:function(e,a,t){"use strict";t.d(a,"a",(function(){return y}));t(582);var r=t(583),n=t(3),c=t(4),s=t(6),l=t(5),o=t(0),i=t.n(o),m=t(86),p=t(581),d=t(602),u=window.$fn,y=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={},e.onShow=function(a,t){e.setState({show:!e.state.show})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,a=this.props.data,t=a.isGroup,n=function(a){var t=a.data,n=a.index;return i.a.createElement("div",null,u.hasObject(t)&&t.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&i.a.createElement("b",{className:"f16 c1"},n,"\u3001"),t.grayText&&i.a.createElement("span",{className:"mr5 g9"},t.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},t.keyword),t.type&&t.keyword&&[i.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},t.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},t.title),t.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return u.showPhone(t.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,u.hasArray(t.data)&&t.data.map((function(a,t){return[a.title?i.a.createElement("h2",{key:"a"+t,className:"sub-title ptb10 bbor1"},a.title,":"):null,a.deviceTitle?i.a.createElement("h2",{key:"c"+t,className:"sub-title ptb10 c1 bbor1"},a.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+t,type:a.type,order:t+1,noOrder:a.noOrder,keyword:a.keyword,pro:a.pro,code:a.code,link:a.link,url:a.url,isGray:a.isGray,isValue:a.isValue},e.props))]}))))};return i.a.createElement(m.a,{className:"page-content"},t?a.data.map((function(e,a){return i.a.createElement(n,{key:a,data:e,index:a+1})})):i.a.createElement(n,{data:a}))}}]),t}(i.a.Component)}}]);