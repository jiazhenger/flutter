(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[300],{468:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(3),r=a(4),s=a(6),c=a(5),l=a(0),o=a.n(l),i=a(584),m={title:"Hook",data:[{keyword:"useState( )",pro:"\u58f0\u660e\u4e00\u4e2a state \u53d8\u91cf\u4e0e this.setState( ) \u7c7b\u4f3c",code:[{path:"react/hook/useState"}]},{keyword:"useEffect( )",pro:"\u51fd\u6570\u7ec4\u4ef6\u589e\u52a0\u4e86\u64cd\u4f5c\u526f\u4f5c\u7528\u7684\u80fd\u529b, \u4e0e\u751f\u547d\u5468\u671f\u51fd\u6570\u7c7b\u4f3c",code:[{path:"react/hook/useEffect"}]},{keyword:"useCallback( )",pro:"\u628a\u533f\u540d\u56de\u8c03\u201c\u5b58\u201d\u8d77\u6765",code:[{path:"react/hook/useCallback"}]},{keyword:"useRef( )",pro:"\u83b7\u53d6\u5143\u7d20\u4e0a\u7684 dom \u5bf9\u8c61\u6216 props \u5bf9\u8c61",code:[{path:"react/hook/useRef"}]}]},p=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement(i.a,Object.assign({data:m},this.props))}}]),a}(o.a.Component)},581:function(e,t,a){"use strict";a(582);var n=a(583),r=a(3),s=a(4),c=a(6),l=a(5),o=a(0),i=a.n(o),m=a(598),p=a(599),u=a(600),d=a(601),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),s&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},y=window.$http,f=window.$fn,k=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),E=a(602);a.d(t,"a",(function(){return b}));var w=window.$fn,b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,s=t.children;(w.hasArray(a)||r||s)&&e.setState({show:!e.state.show}),w.isString(n)&&e.props.history.push(n)},e.onShow=function(){w.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,c=t.pro,l=t.keyword,o=t.code,m=t.deviceTitle,p=t.isGray,u=t.link,d=t.url,y=t.order,f=t.noOrder,b=t.isValue,v=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:N,hasArrow:w.hasArray(o)||v||s,hasClick:w.isString(u),order:f?null:y,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},l),a&&i.a.createElement("span",{className:"c0"},a),l&&!b?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&l&&[i.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==N&&(w.hasArray(o)||v||s)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:w.hasArray(u)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(k,{type:"text",url:e.path}))})),s,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(582);var n=a(583),r=a(3),s=a(4),c=a(6),l=a(5),o=a(0),i=a.n(o),m=a(86),p=a(581),u=a(602),d=window.$fn,h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return i.a.createElement("div",null,d.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&i.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(m.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(r,{key:t,data:e,index:t+1})})):i.a.createElement(r,{data:t}))}}]),a}(i.a.Component)}}]);