(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[74],{240:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(3),n=a(4),o=a(6),c=a(5),s=a(0),i=a.n(s),l=a(588),p={title:"\u8def\u7531\u76d1\u542c\u4fe1\u606f",keyword:"Route.x",type:"Route",data:[{keyword:"currentResult",type:"dynamic",pro:"\u83b7\u53d6\u8fd4\u56de\u5185\u5bb9"},{deviceTitle:"\u5224\u65ad",keyword:"isCurrent",type:"bool",pro:"\u662f\u5426\u662f\u521d\u59cb\u59cb\u8def\u7531"},{keyword:"isActive",type:"bool",pro:"\u662f\u5426\u662f\u6d3b\u52a8\u8def\u7531"},{keyword:"isFirst",type:"bool",pro:"\u662f\u5426\u662f\u5165\u53e3\u8def\u7531"},{keyword:"willHandlePopInternally",type:"bool",pro:""},{deviceTitle:"\u66f4\u591a",keyword:"settings",type:"RouteSettings",pro:"\u83b7\u53d6\u8def\u7531\u76f8\u5173\u5185\u5bb9",link:"/flutter/app/router/settings"},{keyword:"navigator",type:"NavigatorState",pro:"\u5bfc\u822a\u72b6\u6001",link:"/flutter/app/router/navigator"},{keyword:"navigator",type:"List<OverlayEntry>",pro:"",link:"/flutter/app/router/overlayEntries"},{keyword:"popped",type:"Future<dynamic>",pro:"",link:"/flutter/app/router/popped"},{deviceTitle:"\u65b9\u6cd5",keyword:"changedExternalState( )",type:"void Function( )",pro:""},{keyword:"changedInternalState( )",type:"void Function( )",pro:""},{keyword:"dispose( )",type:"void Function( )",pro:"\u6e05\u9664"},{keyword:"didChangeNext( )",type:"void Function( Route<dynamic> nextRoute )",pro:""},{keyword:"didChangePrevious( )",type:"void Function( Route<dynamic> previousRoute )",pro:""},{keyword:"didComplete( )",type:"void Function( dynamic result )",pro:""},{keyword:"didPop( )",type:"void Function( dynamic result )",pro:""},{keyword:"didPopNext( )",type:"void Function( Route<dynamic> nextRoute )",pro:""},{keyword:"didPush( )",type:"void Function( )",pro:""},{keyword:"didReplace( )",type:"void Function( Route<dynamic> oldRoute )",pro:""},{keyword:"didPopNext( )",type:"void Function( Route<dynamic> nextRoute )",pro:""},{keyword:"install( )",type:"void Function( OverlayEntry insertionPoint )",pro:""},{keyword:"willPop( )",type:"Future<RoutePopDisposition> Function()",pro:""}]},d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(l.a,Object.assign({data:p},this.props))}}]),a}(i.a.Component)},585:function(e,t,a){"use strict";a(586);var r=a(587),n=a(3),o=a(4),c=a(6),s=a(5),i=a(0),l=a.n(i),p=a(589),d=a(590),u=a(591),m=a(592),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,o=e.hasClick,c=e.onClick;e.hasGo;return l.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:c},l.a.createElement("div",{className:"fxm"},n?l.a.createElement("span",null,n,"\u3001"):l.a.createElement(p.a,{className:"f14"}),l.a.createElement("div",{className:"ml10"},t)),a&&l.a.createElement("span",{className:"c0"},r?l.a.createElement(d.a,{className:"f24"}):l.a.createElement(u.a,{className:"f24"})),o&&l.a.createElement("span",{className:"c0"},l.a.createElement(m.a,{className:"f24"})))},h=window.$http,f=window.$fn,w=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.getText=function(t){h.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){h.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),l.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?l.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return l.a.createElement("dt",{key:t},t+1)}))),l.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(l.a.Component),v=a(593);a.d(t,"a",(function(){return g}));var k=window.$fn,g=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,o=t.children;(k.hasArray(a)||n||o)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,o=t.children,c=t.pro,s=t.keyword,i=t.code,p=t.deviceTitle,d=t.isGray,u=t.link,m=t.url,h=t.order,f=t.noOrder,g=t.isValue,b=t.hasShow,E=this.state.show;return l.a.createElement(l.a.Fragment,null,p&&l.a.createElement("h2",{className:"ptb10 c1 bbor1"},p),l.a.createElement("section",{className:"box"},l.a.createElement(y,{show:E,hasArrow:k.hasArray(i)||b||o,hasClick:k.isString(u),order:f?null:h,onClick:this.onClick},s&&l.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},s),a&&l.a.createElement("span",{className:"c0"},a),s&&!g?l.a.createElement("i",{className:"mlr10"},":"):l.a.createElement("i",{className:"ml10"}),n&&s&&[l.a.createElement(v.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&l.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==E&&(k.hasArray(i)||b||o)?l.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:k.hasArray(u)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(i)&&i.map((function(e,t){return l.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&l.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),l.a.createElement(w,{type:"text",url:e.path}))})),o,m&&l.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},l.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(u)&&l.a.createElement("div",{className:"mt10"},u.map((function(t,a){return l.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},l.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(l.a.Component)},588:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(586);var r=a(587),n=a(3),o=a(4),c=a(6),s=a(5),i=a(0),l=a.n(i),p=a(82),d=a(585),u=a(593),m=window.$fn,y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return l.a.createElement("div",null,m.hasObject(a)&&a.keyword&&l.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&l.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&l.a.createElement("span",{className:"mr5 g9"},a.grayText),l.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[l.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],l.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&l.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),l.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?l.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?l.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,l.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return l.a.createElement(p.a,{className:"page-content"},a?t.data.map((function(e,t){return l.a.createElement(n,{key:t,data:e,index:t+1})})):l.a.createElement(n,{data:t}))}}]),a}(l.a.Component)},589:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ShareAltOutlined";t.a=r.forwardRef(c)},590:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="UpCircleOutlined";t.a=r.forwardRef(c)},591:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="DownCircleOutlined";t.a=r.forwardRef(c)},592:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="RightCircleOutlined";t.a=r.forwardRef(c)},593:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)}}]);