(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[127],{297:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(3),n=a(4),s=a(6),l=a(5),i=a(0),c=a.n(i),o=a(593),d={title:"\u5706\u89d2",isGroup:!0,data:[{title:"\u65e0\u5706\u89d2",grayText:"const",keyword:"BorderRadius.zero",type:"BorderRadius"},{title:"\u56db\u89d2\u5706\u89d2",grayText:"const",keyword:"BorderRadius.all( )",type:"BorderRadius",link:"/flutter/style/borderRadius/Radius",url:"BorderRadiusAll",data:[{keyword:"radius",type:"Radius",pro:"\u5706\u89d2\u503c",isValue:!0,link:"/flutter/style/borderRadius/Radius"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/borderRadius/BorderRadius/all"}]}]},{title:"\u56db\u89d2\u5706\u89d2",keyword:"BorderRadius.circular( )",type:"BorderRadius",url:"BorderRadiusCircular",data:[{keyword:"radius",type:"double",pro:"\u5706\u89d2\u503c",isValue:!0}]},{title:"\u6c34\u5e73\u5706\u89d2",grayText:"const",keyword:"BorderRadius.horizontal( )",type:"BorderRadius",url:"BorderRadiusHorizontal",data:[{keyword:"left",type:"Radius",pro:"\u5de6\u4fa7",isValue:!0,link:"/flutter/style/borderRadius/Radius"},{keyword:"right",type:"Radius",pro:"\u53f3\u4fa7",isValue:!0,link:"/flutter/style/borderRadius/Radius"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/borderRadius/BorderRadius/horizontal"}]}]},{title:"\u5782\u76f4\u5706\u89d2",grayText:"const",keyword:"BorderRadius.vertical( )",type:"BorderRadius",url:"BorderRadiusVertical",data:[{keyword:"top",type:"Radius",pro:"\u9876\u90e8",isValue:!0,link:"/flutter/style/borderRadius/Radius"},{keyword:"bottom",type:"Radius",pro:"\u5e95\u90e8",isValue:!0,link:"/flutter/style/borderRadius/Radius"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/borderRadius/BorderRadius/vertical"}]}]},{title:"\u5782\u76f4\u5706\u89d2",grayText:"const",keyword:"BorderRadius.only( )",type:"BorderRadius",url:"BorderRadiusOnly",data:[{keyword:"topLeft",type:"Radius",pro:"\u5de6\u4e0a\u89d2",link:"/flutter/style/borderRadius/Radius"},{keyword:"topRight",type:"Radius",pro:"\u53f3\u4e0a\u89d2",link:"/flutter/style/borderRadius/Radius"},{keyword:"bottomLeft",type:"Radius",pro:"\u5de6\u4e0b\u89d2",link:"/flutter/style/borderRadius/Radius"},{keyword:"bottomRight",type:"Radius",pro:"\u53f3\u4e0b\u89d2",link:"/flutter/style/borderRadius/Radius"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/borderRadius/BorderRadius/only"}]}]}]},u=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(o.a,Object.assign({data:d},this.props))}}]),a}(c.a.Component)},590:function(e,t,a){"use strict";a(591);var r=a(592),n=a(3),s=a(4),l=a(6),i=a(5),c=a(0),o=a.n(c),d=a(594),u=a(595),p=a(596),m=a(597),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return o.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},o.a.createElement("div",{className:"fxm"},n?o.a.createElement("span",null,n,"\u3001"):o.a.createElement(d.a,{className:"f14"}),o.a.createElement("div",{className:"ml10"},t)),a&&o.a.createElement("span",{className:"c0"},r?o.a.createElement(u.a,{className:"f24"}):o.a.createElement(p.a,{className:"f24"})),s&&o.a.createElement("span",{className:"c0"},o.a.createElement(m.a,{className:"f24"})))},f=window.$http,h=window.$fn,w=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){f.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){f.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),o.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?o.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},o.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return o.a.createElement("dt",{key:t},t+1)}))),o.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return o.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):o.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(o.a.Component),b=a(598);a.d(t,"a",(function(){return g}));var k=window.$fn,g=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,s=t.children;(k.hasArray(a)||n||s)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,l=t.pro,i=t.keyword,c=t.code,d=t.deviceTitle,u=t.isGray,p=t.link,m=t.url,f=t.order,h=t.noOrder,g=t.isValue,R=t.hasShow,v=this.state.show;return o.a.createElement(o.a.Fragment,null,d&&o.a.createElement("h2",{className:"ptb10 c1 bbor1"},d),o.a.createElement("section",{className:"box"},o.a.createElement(y,{show:v,hasArrow:k.hasArray(c)||R||s,hasClick:k.isString(p),order:h?null:f,onClick:this.onClick},i&&o.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},i),a&&o.a.createElement("span",{className:"c0"},a),i&&!g?o.a.createElement("i",{className:"mlr10"},":"):o.a.createElement("i",{className:"ml10"}),n&&i&&[o.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],l&&o.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(k.hasArray(c)||R||s)?o.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:k.hasArray(p)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(c)&&c.map((function(e,t){return o.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&o.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),o.a.createElement(w,{type:"text",url:e.path}))})),s,m&&o.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(p)&&o.a.createElement("div",{className:"mt10"},p.map((function(t,a){return o.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},o.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(o.a.Component)},593:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(591);var r=a(592),n=a(3),s=a(4),l=a(6),i=a(5),c=a(0),o=a.n(c),d=a(82),u=a(590),p=a(598),m=window.$fn,y=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return o.a.createElement("div",null,m.hasObject(a)&&a.keyword&&o.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&o.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&o.a.createElement("span",{className:"mr5 g9"},a.grayText),o.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[o.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],o.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return m.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),o.a.createElement("div",null,m.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?o.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?o.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,o.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return o.a.createElement(d.a,{className:"page-content"},a?t.data.map((function(e,t){return o.a.createElement(n,{key:t,data:e,index:t+1})})):o.a.createElement(n,{data:t}))}}]),a}(o.a.Component)},594:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},s=a(26),l=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="ShareAltOutlined";t.a=r.forwardRef(l)},595:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},s=a(26),l=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="UpCircleOutlined";t.a=r.forwardRef(l)},596:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},s=a(26),l=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="DownCircleOutlined";t.a=r.forwardRef(l)},597:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},s=a(26),l=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="RightCircleOutlined";t.a=r.forwardRef(l)},598:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},s=a(26),l=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};l.displayName="ArrowRightOutlined";t.a=r.forwardRef(l)}}]);