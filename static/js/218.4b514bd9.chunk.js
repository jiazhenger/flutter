(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[218],{385:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(3),n=a(4),l=a(6),c=a(5),i=a(0),s=a.n(i),o=a(588),m={title:"\u5e26\u5c01\u9762\u56fe\u7684\u56fe\u7247\u63a7\u4ef6",keyword:"FadeInImage( )",type:"FadeInImage",url:"FadeInImagePage",data:[{keyword:"placeholder",type:"ImageProvider<dynamic>",pro:"\u56fe\u7247",code:[{path:"flutter/widget/image/image"}],link:[{title:"AssetImage",url:"/flutter/image/AssetImage"},{title:"NetworkImage",url:"/flutter/image/NetworkImage"}]},{keyword:"image",type:"ImageProvider<dynamic>",pro:"\u56fe\u7247",code:[{path:"flutter/widget/image/image"}],link:[{title:"AssetImage",url:"/flutter/image/AssetImage"},{title:"NetworkImage",url:"/flutter/image/NetworkImage"}]},{keyword:"imageSemanticLabel",type:"String",pro:"\u56fe\u50cf\u7684\u8bed\u4e49\u63cf\u8ff0"},{keyword:"excludeFromSemantics",type:"bool",pro:"\u662f\u5426\u4ece\u8bed\u4e49\u4e2d\u6392\u9664\u6b64\u56fe\u50cf"},{deviceTitle:"FadeInImage \u56fe\u7247\u516c\u5171\u5c5e\u6027",keyword:"fadeInDuration",type:"Duration",pro:"\u6de1\u51fa\u8fc7\u6e21\u65f6\u957f",code:[{path:"flutter/time/Duration"}],link:[{title:"Duration",url:"/flutter/time/Duration"}]},{keyword:"fadeOutDuration",type:"Duration",pro:"\u6de1\u9690\u8fc7\u6e21\u65f6\u957f",code:[{path:"flutter/time/Duration"}],link:[{title:"Duration",url:"/flutter/time/Duration"}]},{keyword:"fadeInCurve",type:"Curves",pro:"\u6de1\u51fa\u8fc7\u6e21\u6548\u679c",link:"/flutter/animation/Curves"},{keyword:"fadeOutCurve",type:"Curves",pro:"\u6de1\u9690\u8fc7\u6e21\u6548\u679c",link:"/flutter/animation/Curves"},{deviceTitle:"\u6240\u6709\u56fe\u7247\u516c\u5171\u5c5e\u6027",keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"height",type:"double",pro:"\u9ad8\u5ea6"},{keyword:"fit",type:"BoxFit",pro:"\u586b\u5145\u65b9\u5f0f",code:[{path:"flutter/widget/image/style/x/fit"}],link:[{title:"BoxFit",url:"/flutter/image/BoxFit"}]},{keyword:"repeat",type:"ImageRepeat",pro:"\u586b\u5145\u65b9\u5f0f",code:[{path:"flutter/widget/image/style/x/repeat"}],link:[{title:"ImageRepeat",url:"/flutter/image/ImageRepeat"}]},{keyword:"alignment",type:"AlignmentGeometry",pro:"\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/public/alignment"}],link:[{title:"Alignment",url:"/flutter/style/align/Alignment"},{title:"FractionalOffset",url:"/flutter/style/align/FractionalOffset"}]},{keyword:"matchTextDirection",type:"bool",pro:"\u662f\u5426\u5728\u6587\u672c\u65b9\u5411\u4e0a\u7ed8\u5236\u56fe\u50cf"}]},u=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(o.a,Object.assign({data:m},this.props))}}]),a}(s.a.Component)},585:function(e,t,a){"use strict";a(586);var r=a(587),n=a(3),l=a(4),c=a(6),i=a(5),s=a(0),o=a.n(s),m=a(589),u=a(590),p=a(591),d=a(592),f=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return o.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},o.a.createElement("div",{className:"fxm"},n?o.a.createElement("span",null,n,"\u3001"):o.a.createElement(m.a,{className:"f14"}),o.a.createElement("div",{className:"ml10"},t)),a&&o.a.createElement("span",{className:"c0"},r?o.a.createElement(u.a,{className:"f24"}):o.a.createElement(p.a,{className:"f24"})),l&&o.a.createElement("span",{className:"c0"},o.a.createElement(d.a,{className:"f24"})))},y=window.$http,h=window.$fn,g=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),o.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?o.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},o.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return o.a.createElement("dt",{key:t},t+1)}))),o.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return o.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):o.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(o.a.Component),w=a(593);a.d(t,"a",(function(){return v}));var k=window.$fn,v=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,l=t.children;(k.hasArray(a)||n||l)&&e.setState({show:!e.state.show}),k.isString(r)&&e.props.history.push(r)},e.onShow=function(){k.showPhone(e.props.url)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,c=t.pro,i=t.keyword,s=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,y=t.order,h=t.noOrder,v=t.isValue,b=t.hasShow,E=this.state.show;return o.a.createElement(o.a.Fragment,null,m&&o.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),o.a.createElement("section",{className:"box"},o.a.createElement(f,{show:E,hasArrow:k.hasArray(s)||b||l,hasClick:k.isString(p),order:h?null:y,onClick:this.onClick},i&&o.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:k.stop},i),a&&o.a.createElement("span",{className:"c0"},a),i&&!v?o.a.createElement("i",{className:"mlr10"},":"):o.a.createElement("i",{className:"ml10"}),n&&i&&[o.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&o.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==E&&(k.hasArray(s)||b||l)?o.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:k.hasArray(p)?"10px 0 5px":"10px 0"},onClick:k.stop},k.hasArray(s)&&s.map((function(e,t){return o.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&o.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),o.a.createElement(g,{type:"text",url:e.path}))})),l,d&&o.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),k.hasArray(p)&&o.a.createElement("div",{className:"mt10"},p.map((function(t,a){return o.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},o.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(o.a.Component)},588:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));a(586);var r=a(587),n=a(3),l=a(4),c=a(6),i=a(5),s=a(0),o=a.n(s),m=a(82),u=a(585),p=a(593),d=window.$fn,f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return o.a.createElement("div",null,d.hasObject(a)&&a.keyword&&o.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&o.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&o.a.createElement("span",{className:"mr5 g9"},a.grayText),o.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[o.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],o.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),o.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?o.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?o.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,o.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return o.a.createElement(m.a,{className:"page-content"},a?t.data.map((function(e,t){return o.a.createElement(n,{key:t,data:e,index:t+1})})):o.a.createElement(n,{data:t}))}}]),a}(o.a.Component)},589:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},l=a(26),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ShareAltOutlined";t.a=r.forwardRef(c)},590:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},l=a(26),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="UpCircleOutlined";t.a=r.forwardRef(c)},591:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},l=a(26),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="DownCircleOutlined";t.a=r.forwardRef(c)},592:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},l=a(26),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="RightCircleOutlined";t.a=r.forwardRef(c)},593:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},l=a(26),c=function(e,t){return r.createElement(l.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)}}]);