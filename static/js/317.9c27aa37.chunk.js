(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[317],{485:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a(3),n=a(4),c=a(6),s=a(5),l=a(0),o=a.n(l),i=a(584),m={title:"\u8def\u7531\u914d\u7f6e",data:[{keyword:"< Switch >",pro:"\u6e32\u67d3\u4e0e\u4f4d\u7f6e\u5339\u914d\u7684\u7b2c\u4e00\u4e2a\u5b50\u5143\u7d20<Route> \u6216 <Redirect>\uff0c\u5373\uff1a\u4ec5\u4ec5\u6e32\u67d3\u4e00\u4e2a\u8def\u7531",code:[{path:"react/router/config/Switch"}]},{keyword:"< Route >",pro:"\u8def\u5f84\u4e0e\u5f53\u524dURL\u5339\u914d\u65f6\u5448\u73b0\u7684UI\u7ec4\u4ef6",code:[{path:"react/router/config/Route"}]},{keyword:"< Redirect >",pro:"\u91cd\u5b9a\u5411\u8def\u7531",code:[{path:"react/router/config/Redirect"}]},{pro:"404",code:[{path:"react/router/config/404"}]},{pro:"\u58f0\u660e\u5b50\u8def\u7531\u7684\u4e09\u79cd\u65b9\u5f0f ",code:[{path:"react/router/config/children"}]},{keyword:"withRouter( )",pro:"\u6dfb\u52a0 history, location, match \u5230\u7ec4\u4ef6 props \u4e2d ",code:[{path:"react/router/config/withRouter"}]},{keyword:"< Prompt >",pro:"\u63d0\u793a\u8def\u7531\u9000\u51fa\uff0c\u901a\u5e38\u662f\u5728\u8868\u5355\u8f93\u5165\u65f6\u4f7f\u7528",code:[{path:"react/router/config/Prompt"}]}]},p=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(i.a,Object.assign({data:m},this.props))}}]),a}(o.a.Component)},581:function(e,t,a){"use strict";a(582);var r=a(583),n=a(3),c=a(4),s=a(6),l=a(5),o=a(0),i=a.n(o),m=a(598),p=a(599),u=a(600),d=a(601),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},n?i.a.createElement("span",null,n,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},y=window.$http,f=window.$fn,w=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),E=a(602);a.d(t,"a",(function(){return b}));var k=window.$fn,b=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,c=t.children;(k.hasArray(a)||n||c)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,m=t.deviceTitle,p=t.isGray,u=t.link,d=t.url,y=t.order,f=t.noOrder,b=t.isValue,v=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:N,hasArrow:k.hasArray(o)||v||c,hasClick:k.isString(u),order:f?null:y,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},l),a&&i.a.createElement("span",{className:"c0"},a),l&&!b?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),n&&l&&[i.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==N&&(k.hasArray(o)||v||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:k.hasArray(u)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(w,{type:"text",url:e.path}))})),c,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(582);var r=a(583),n=a(3),c=a(4),s=a(6),l=a(5),o=a(0),i=a.n(o),m=a(86),p=a(581),u=a(602),d=window.$fn,h=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return i.a.createElement("div",null,d.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&i.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(m.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(n,{key:t,data:e,index:t+1})})):i.a.createElement(n,{data:t}))}}]),a}(i.a.Component)}}]);