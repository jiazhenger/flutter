(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[78],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a(3),n=a(4),o=a(6),c=a(5),i=a(0),s=a.n(i),l=a(593),u={title:"\u8def\u7531\u76d1\u542c\u4fe1\u606f",keyword:"Route.navigator.x",type:"NavigatorState",data:[{keyword:"userGestureInProgress",type:"bool",pro:""},{keyword:"mounted",type:"bool",pro:""},{deviceTitle:"\u66f4\u591a",keyword:"widget",type:"Navigator",pro:"\u83b7\u53d6\u63a7\u4ef6"},{keyword:"context",type:"BuildContext",pro:"\u83b7\u53d6\u4e0a\u4e0b\u6587"},{keyword:"focusScopeNode",type:"FocusScopeNode",pro:""},{keyword:"overlay",type:"OverlayState",pro:""},{deviceTitle:"\u8def\u7531\u8df3\u8f6c",keyword:"pushNamed( )",type:"Future<Object> Function(String routeName, {arguments: Object})",pro:"\u8def\u7531\u8df3\u8f6c => pushNamed( )",link:"/flutter/app/router/router-skip"},{keyword:"push( )",type:"Future<dynamic> Function( Route<dynamic> route )",pro:"\u8def\u7531\u8df3\u8f6c => push( )",link:"/flutter/app/router/router-skip"},{keyword:"canPop( )",type:"bool",pro:"\u662f\u5426\u53ef\u4ee5\u8fd4\u56de"},{keyword:"pop( )",type:"bool Function( [Object result] )",pro:"\u8def\u7531\u8df3\u8f6c => pop( )",link:"/flutter/app/router/router-skip"},{keyword:"popAndPushNamed( )",type:"Future<Object> Function( String routeName, {result: Object, arguments: Object} )",pro:""},{keyword:"popUntil( )",type:"void Function( bool Function(Route<dynamic> predicate) )",pro:""},{keyword:"pushAndRemoveUntil( )",type:"Future<Object> Function( Route<Object> newRoute, bool Function(Route<dynamic>) predicate )",pro:""},{keyword:"pushNamedAndRemoveUntil( )",type:"Future<Object> Function( String newRouteName, bool Function(Route<dynamic>) predicate, {arguments: Object} )",pro:""},{keyword:"pushReplacement( )",type:"Future<Object> Function( Route<Object> newRoute, {result: Object} )",pro:""},{keyword:"pushReplacementNamed( )",type:"Future<Object> Function( String routeName, {result: Object, arguments: Object} )",pro:""},{deviceTitle:"\u65b9\u6cd5",keyword:"dispose( )",type:"void Function( )",pro:"\u6e05\u9664"},{keyword:"deactivate( )",type:"void Function( )",pro:"\u5728\u6253\u5f00\u65b0\u7684 widget\u3001\u56de\u5230\u5f53\u524d widget \u65f6\u4f1a\u6267\u884c"},{keyword:"build( )",type:"Widget Function(BuildContext context)",pro:"\u521b\u5efa\u4e0a\u4e0b\u6587\u63a7\u4ef6"},{keyword:"createTicker( )",type:"Ticker Function(void Function( Duration ) onTick)",pro:"\u521b\u5efa\u65f6\u8ba1\u5668"},{keyword:"didChangeDependencies( )",type:"void Function( )",pro:""},{keyword:"didStartUserGesture( )",type:"void Function( )",pro:""},{keyword:"didStopUserGesture( )",type:"void Function( )",pro:""},{keyword:"didUpdateWidget( )",type:"void Function( Navigator oldWidget )",pro:""},{keyword:"finalizeRoute( )",type:"void Function( Route<dynamic> route )",pro:""},{keyword:"initState( )",type:"void Function( )",pro:""},{keyword:"maybePop( )",type:"Future<bool> Function( [Object result] )",pro:""},{keyword:"reassemble( )",type:"void Function( )",pro:""},{keyword:"removeRoute( )",type:"void Function( Route<dynamic> route )",pro:"\u79fb\u9664\u8def\u7531"},{keyword:"removeRouteBelow( )",type:"void Function( Route<dynamic> anchorRoute )",pro:""},{keyword:"replace( )",type:"void Function( {oldRoute: Route<dynamic>, newRoute: Route<Object>} )",pro:""},{keyword:"replaceRouteBelow( )",type:"void Function( {anchorRoute: Route<dynamic>, newRoute: Route<Object>} )",pro:""},{keyword:"setState( )",type:"void Function( void Function( ) )",pro:"\u6539\u53d8\u6570\u636e"},{keyword:"toDiagnosticsNode( )",type:"DiagnosticsNode Function({name: String, style: DiagnosticsTreeStyle})",pro:""}]},p=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(l.a,Object.assign({data:u},this.props))}}]),a}(s.a.Component)},590:function(e,t,a){"use strict";a(591);var r=a(592),n=a(3),o=a(4),c=a(6),i=a(5),s=a(0),l=a.n(s),u=a(594),p=a(595),d=a(596),m=a(597),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,o=e.hasClick,c=e.onClick;e.hasGo;return l.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:c},l.a.createElement("div",{className:"fxm"},n?l.a.createElement("span",null,n,"\u3001"):l.a.createElement(u.a,{className:"f14"}),l.a.createElement("div",{className:"ml10"},t)),a&&l.a.createElement("span",{className:"c0"},r?l.a.createElement(p.a,{className:"f24"}):l.a.createElement(d.a,{className:"f24"})),o&&l.a.createElement("span",{className:"c0"},l.a.createElement(m.a,{className:"f24"})))},h=window.$http,f=window.$fn,w=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={data:[]},e.getText=function(t){h.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){h.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),l.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?l.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return l.a.createElement("dt",{key:t},t+1)}))),l.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(l.a.Component),k=a(598);a.d(t,"a",(function(){return v}));var b=window.$fn,v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,o=t.children;(b.hasArray(a)||n||o)&&e.setState({show:!e.state.show}),b.isString(r)&&e.props.history.push(r)},e.onShow=function(){b.showPhone(e.props.url)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,o=t.children,c=t.pro,i=t.keyword,s=t.code,u=t.deviceTitle,p=t.isGray,d=t.link,m=t.url,h=t.order,f=t.noOrder,v=t.isValue,g=t.hasShow,N=this.state.show;return l.a.createElement(l.a.Fragment,null,u&&l.a.createElement("h2",{className:"ptb10 c1 bbor1"},u),l.a.createElement("section",{className:"box"},l.a.createElement(y,{show:N,hasArrow:b.hasArray(s)||g||o,hasClick:b.isString(d),order:f?null:h,onClick:this.onClick},i&&l.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},i),a&&l.a.createElement("span",{className:"c0"},a),i&&!v?l.a.createElement("i",{className:"mlr10"},":"):l.a.createElement("i",{className:"ml10"}),n&&i&&[l.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&l.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==N&&(b.hasArray(s)||g||o)?l.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:b.hasArray(d)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(s)&&s.map((function(e,t){return l.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&l.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),l.a.createElement(w,{type:"text",url:e.path}))})),o,m&&l.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},l.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(d)&&l.a.createElement("div",{className:"mt10"},d.map((function(t,a){return l.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},l.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(l.a.Component)},593:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(591);var r=a(592),n=a(3),o=a(4),c=a(6),i=a(5),s=a(0),l=a.n(s),u=a(82),p=a(590),d=a(598),m=window.$fn,y=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return l.a.createElement("div",null,m.hasObject(a)&&a.keyword&&l.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&l.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&l.a.createElement("span",{className:"mr5 g9"},a.grayText),l.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[l.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],l.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&l.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),l.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?l.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?l.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,l.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return l.a.createElement(u.a,{className:"page-content"},a?t.data.map((function(e,t){return l.a.createElement(n,{key:t,data:e,index:t+1})})):l.a.createElement(n,{data:t}))}}]),a}(l.a.Component)},594:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ShareAltOutlined";t.a=r.forwardRef(c)},595:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="UpCircleOutlined";t.a=r.forwardRef(c)},596:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="DownCircleOutlined";t.a=r.forwardRef(c)},597:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="RightCircleOutlined";t.a=r.forwardRef(c)},598:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},o=a(26),c=function(e,t){return r.createElement(o.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)}}]);