(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[16],{456:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(3),l=a(4),c=a(6),r=a(5),o=a(0),i=a.n(o),s=a(82),u=a(590),m=a(600),d=window.$fn;function p(){this.code="react"}var h=new p;p.prototype.name="prototype",h.age=123;var f=new function(){p.call(this)};function E(e,t){return e+t}var y=new function(){p.bind(this)()},b=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){d.setTitle("Function \u5bf9\u8c61\u7684\u65b9\u6cd5"),d.hidePhone()}},{key:"render",value:function(){return i.a.createElement(s.a,{className:"page-content"},i.a.createElement(u.a,{order:1,keyword:"Function",pro:"\u6784\u9020\u51fd\u6570",code:[{path:"js/object/function/function-method/Function"}]},i.a.createElement(m.a,null,i.a.createElement("li",null,i.a.createElement("b",null,"(new Function(",i.a.createElement("i",null,"'a','b','return a+b'"),"))"),"(10,20) ",i.a.createElement("u",null,"=> 30")),i.a.createElement("li",null,i.a.createElement("b",null,"(Function(",i.a.createElement("i",null,"'a','b','return a+b'"),"))"),"(10,20) ",i.a.createElement("u",null,"=> 30"))),i.a.createElement(m.a,{title:"\u6bcf\u4e2a JavaScript \u51fd\u6570\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u4e2a Function \u5bf9\u8c61"},i.a.createElement("li",null,"var bool = ",i.a.createElement("b",null,"(function()",").constructor === Function")," ",i.a.createElement("u",null,"=>",JSON.stringify(function(){}.constructor===Function))))),i.a.createElement(u.a,{order:2,keyword:"Function.prototype.call( )",pro:"\u5728\u4e00\u4e2a\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u4e2d\u5e94\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff1b\u53c2\u6570\u80fd\u591f\u4ee5\u5217\u8868\u5f62\u5f0f\u4f20\u5165",code:[{path:"js/object/function/function-method/call"}]},i.a.createElement(m.a,{title:"\u53c2\u6570\u4f20\u9012",className:"mt10"},i.a.createElement("li",null,"function my( x, y )\uff5b return x+y \uff5d"),i.a.createElement("li",null,"var v = my.",i.a.createElement("b",null,"call"),"(null,10,20) ",i.a.createElement("u",null,"=> ",E.call(null,10,20)))),i.a.createElement(m.a,{title:"\u7ee7\u627f\u521d\u59cb\u5316\u503c",className:"mt10"},i.a.createElement("li",null,"function Parent( )\uff5b this.code = 'react' \uff5d"),i.a.createElement("li",null,"function Child( )\uff5b Parent.",i.a.createElement("b",null,"call(this)")," \uff5d ",i.a.createElement("q",null,"# \u7ee7\u627f Parent\uff0c\u5373\u5c06 Parent \u7684 this \u7ed1\u5b9a\u5230 Child \u51fd\u6570\uff0c\u4e0d\u5f71\u54cd Parent \u7684 this")),i.a.createElement("li",null,"var code = obj.code ",i.a.createElement("u",null,"=> ",f.code)))),i.a.createElement(u.a,{order:3,keyword:"Function.prototype.apply( )",pro:"\u5728\u4e00\u4e2a\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u4e2d\u5e94\u7528\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\uff1b\u53c2\u6570\u80fd\u591f\u4ee5\u6570\u7ec4\u5f62\u5f0f\u4f20\u5165",code:[{path:"js/object/function/function-method/apply"}]},i.a.createElement(m.a,{title:"\u53c2\u6570\u4f20\u9012",className:"mt10"},i.a.createElement("li",null,"function my( x, y )\uff5b return x+y \uff5d"),i.a.createElement("li",null,"var v = my.",i.a.createElement("b",null,"call"),"(null,",i.a.createElement("b",null,"[")," 10,20 ",i.a.createElement("b",null,"]"),") ",i.a.createElement("u",null,"=> ",E.apply(null,[10,20]))))),i.a.createElement(u.a,{order:4,keyword:"Function.prototype.bind( )",pro:"\u521b\u5efa\u4e00\u4e2a\u65b0\u51fd\u6570\uff0c\u79f0\u4e3a\u7ed1\u5b9a\u51fd\u6570",code:[{path:"js/object/function/function-method/bind"}]},i.a.createElement(m.a,{title:"\u53c2\u6570\u4f20\u9012",className:"mt10"},i.a.createElement("li",null,"function my( x, y )\uff5b return x+y \uff5d"),i.a.createElement("li",null,"var v = my.",i.a.createElement("b",null,"bind("),"null,10,20",i.a.createElement("b",null,")( )")," ",i.a.createElement("u",null,"=> ",E.bind(null,10,20)()))),i.a.createElement(m.a,{title:"\u7ee7\u627f\u521d\u59cb\u5316\u503c"},i.a.createElement("li",null,"function Parent( )\uff5b this.code = 'react' \uff5d"),i.a.createElement("li",null,"function Child( )\uff5b Parent.",i.a.createElement("b",null,"bind(this)( )")," \uff5d ",i.a.createElement("q",null,"# \u7ee7\u627f Parent\uff0c\u5373\u5c06 Parent \u7684 this \u7ed1\u5b9a\u5230 Child \u51fd\u6570\uff0c\u4e0d\u5f71\u54cd Parent \u7684 this")),i.a.createElement("li",null,"var code = obj.code ",i.a.createElement("u",null,"=> ",y.code)))),i.a.createElement(u.a,{order:5,keyword:"Function.prototype.isGenerator( )",pro:"\u5224\u65ad\u4e00\u4e2a\u51fd\u6570\u662f\u5426\u662f\u4e00\u4e2a\u751f\u6210\u5668",code:[{path:"js/object/function/function-method/isGenerator"}]}),i.a.createElement(u.a,{order:6,keyword:"Function.prototype.toString( )",pro:"\u83b7\u53d6\u51fd\u6570\u7684\u5b9e\u73b0\u6e90\u7801\u7684\u5b57\u7b26\u4e32",code:[{path:"js/object/function/function-method/toString"}]},i.a.createElement(m.a,null,i.a.createElement("li",null,"function my( x, y )\uff5b return x+y \uff5d"),i.a.createElement("li",null,"var v = my.",i.a.createElement("b",null,"toString( )")," ",i.a.createElement("u",null,"=> ",E.toString())))))}}]),a}(i.a.Component)},590:function(e,t,a){"use strict";a(591);var n=a(592),l=a(3),c=a(4),r=a(6),o=a(5),i=a(0),s=a.n(i),u=a(594),m=a(595),d=a(596),p=a(597),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,l=e.order,c=e.hasClick,r=e.onClick;e.hasGo;return s.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:r},s.a.createElement("div",{className:"fxm"},l?s.a.createElement("span",null,l,"\u3001"):s.a.createElement(u.a,{className:"f14"}),s.a.createElement("div",{className:"ml10"},t)),a&&s.a.createElement("span",{className:"c0"},n?s.a.createElement(m.a,{className:"f24"}):s.a.createElement(d.a,{className:"f24"})),c&&s.a.createElement("span",{className:"c0"},s.a.createElement(p.a,{className:"f24"})))},f=window.$http,E=window.$fn,y=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){f.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){f.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),s.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?s.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},s.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return s.a.createElement("dt",{key:t},t+1)}))),s.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return s.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):s.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(s.a.Component),b=a(598);a.d(t,"a",(function(){return w}));var v=window.$fn,w=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,l=t.hasShow,c=t.children;(v.hasArray(a)||l||c)&&e.setState({show:!e.state.show}),v.isString(n)&&e.props.history.push(n)},e.onShow=function(){v.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,c=t.children,r=t.pro,o=t.keyword,i=t.code,u=t.deviceTitle,m=t.isGray,d=t.link,p=t.url,f=t.order,E=t.noOrder,w=t.isValue,g=t.hasShow,N=this.state.show;return s.a.createElement(s.a.Fragment,null,u&&s.a.createElement("h2",{className:"ptb10 c1 bbor1"},u),s.a.createElement("section",{className:"box"},s.a.createElement(h,{show:N,hasArrow:v.hasArray(i)||g||c,hasClick:v.isString(d),order:E?null:f,onClick:this.onClick},o&&s.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},o),a&&s.a.createElement("span",{className:"c0"},a),o&&!w?s.a.createElement("i",{className:"mlr10"},":"):s.a.createElement("i",{className:"ml10"}),l&&o&&[s.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),s.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],r&&s.a.createElement("span",{className:"g6 f13",key:2},r)),void 0!==N&&(v.hasArray(i)||g||c)?s.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:v.hasArray(d)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(i)&&i.map((function(e,t){return s.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&s.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),s.a.createElement(y,{type:"text",url:e.path}))})),c,p&&s.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},s.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(d)&&s.a.createElement("div",{className:"mt10"},d.map((function(t,a){return s.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},s.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(s.a.Component)},594:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},c=a(26),r=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:l}))};r.displayName="ShareAltOutlined";t.a=n.forwardRef(r)},595:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},c=a(26),r=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:l}))};r.displayName="UpCircleOutlined";t.a=n.forwardRef(r)},596:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},c=a(26),r=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:l}))};r.displayName="DownCircleOutlined";t.a=n.forwardRef(r)},597:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},c=a(26),r=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:l}))};r.displayName="RightCircleOutlined";t.a=n.forwardRef(r)},598:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},c=a(26),r=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:l}))};r.displayName="ArrowRightOutlined";t.a=n.forwardRef(r)},600:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),l=a(4),c=a(6),r=a(5),o=a(0),i=a.n(o),s=window.$fn,u=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=e.sub,l=e.className;return i.a.createElement("section",{className:"case-js ".concat(l||"")},t&&i.a.createElement("h2",{className:"b",style:{fontSize:"16px",color:s.c0}},t),n&&i.a.createElement(i.a.Fragment,null,s.hasArray(n)?n.map((function(e,t){return i.a.createElement("h3",{key:t,className:"tj",style:{fontSize:"13px",color:"#999"}},t+1,"\u3001",e)})):i.a.createElement("h3",{className:"tj",style:{fontSize:"13px",color:"#999"}},n)),i.a.createElement("ul",{className:"js-code-list"},a))}}]),a}(i.a.Component)}}]);