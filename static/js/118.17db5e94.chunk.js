(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[118],{285:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(3),l=a(4),n=a(6),o=a(5),c=a(0),s=a.n(c),i=a(588),u={title:"\u6587\u672c\u6837\u5f0f",keyword:"TextStyle( )",data:[{deviceTitle:"\u989c\u8272\u8bbe\u7f6e",keyword:"color",type:"Color",pro:"\u6587\u672c\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"backgroundColor",pro:"\u80cc\u666f\u989c\u8272",type:"Color",link:"/flutter/style/Colors"},{keyword:"foreground",type:"Paint",pro:"\u524d\u666f",code:[{path:"flutter/style/TextStyle/color/foreground"}],link:[{title:"Color",url:"/flutter/style/Colors"},{title:"Paint( )",url:"/flutter/style/Colors"},{title:"ui.Gradient.linear( )",url:"/flutter/style/Colors"}]},{keyword:"background",type:"Paint",pro:"\u80cc\u666f",code:[{path:"flutter/style/TextStyle/color/background"}],link:[{title:"Color",url:"/flutter/style/Colors"},{title:"Paint( )",url:"/flutter/style/Colors"},{title:"ui.Gradient.linear( )",url:"/flutter/style/Colors"}]},{deviceTitle:"\u5b57\u4f53\u8bbe\u7f6e",type:"String",keyword:"fontFamily",pro:"\u5b57\u4f53",code:[{path:"flutter/style/TextStyle/font/fontFamily"},{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53 ",path:"flutter/style/TextStyle/font/fontFamily-my"}]},{keyword:"fontFamilyFallback",type:"List<String>",pro:"\u5b57\u4f53\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFamilyFallback"}]},{keyword:"fontSize",type:"double",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"flutter/style/TextStyle/font/fontSize"}]},{keyword:"fontWeight",type:"FontWeight",pro:"\u52a0\u7c97",code:[{path:"flutter/style/TextStyle/font/fontWeight"}]},{keyword:"fontStyle",type:"FontStyle",pro:"\u503e\u659c",code:[{path:"flutter/style/TextStyle/font/fontStyle"}]},{keyword:"height",type:"double",pro:"\u500d\u6570\u9ad8\u5ea6"},{keyword:"package",type:"String",pro:"\u5f15\u7528\u5b57\u4f53\u5305",code:[{path:"flutter/style/TextStyle/font/package"}]},{keyword:"fontFeatures",type:"List<FontFeature>",pro:"\u5f71\u54cd\u5b57\u4f53\u7684\u5b57\u4f53\u7279\u6027\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFeatures"}]},{deviceTitle:"\u6587\u672c\u95f4\u8ddd",type:"double",keyword:"letterSpacing",pro:"\u5b57\u7b26\u95f4\u8ddd"},{keyword:"wordSpacing",type:"double",pro:"\u5355\u8bcd\u95f4\u8ddd"},{deviceTitle:"\u6587\u672c\u88c5\u9970",type:"TextDecoration",keyword:"decoration",pro:"\u88c5\u9970",code:[{path:"flutter/style/TextStyle/decoration/decoration"}]},{keyword:"decorationColor",type:"Color",pro:"\u88c5\u9970\u5668\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"decorationStyle",type:"TextDecorationStyle",pro:"\u88c5\u9970\u5668\u6837\u5f0f",code:[{path:"flutter/style/TextStyle/decoration/decorationStyle"}]},{keyword:"decorationThickness",type:"double",pro:"\u88c5\u9970\u5668\u539a\u5ea6"},{deviceTitle:"\u5176\u5b83",keyword:"textBaseline",type:"TextBaseline",pro:"\u6587\u672c\u7ed8\u5236\u57fa\u7ebf",code:[{path:"flutter/public/TextBaseline"}]},{keyword:"shadows",type:"List<Shadow/BoxShadow>",pro:"\u9634\u5f71",code:[{path:"/flutter/public/shadows"}],link:[{title:"Shadow",url:"/flutter/style/shadow/Shadow"},{title:"BoxShadow",url:"/flutter/style/shadow/BoxShadow"}]},{keyword:"locale",type:"Locale",pro:"\u8bed\u8a00",link:"/flutter/style/locale/Locale"},{keyword:"inherit",type:"bool",pro:"\u7ee7\u627f",code:[{path:"flutter/public/inherit"}]},{keyword:"debugLabel",type:"String",pro:"\u6587\u672c\u6837\u5f0f\u7684\u53ef\u8bfb\u63cf\u8ff0",code:[{path:"flutter/public/debugLabel"}]}]},d=function(e){Object(n.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement(i.a,Object.assign({data:u},this.props))}}]),a}(s.a.Component)},585:function(e,t,a){"use strict";a(586);var r=a(587),l=a(3),n=a(4),o=a(6),c=a(5),s=a(0),i=a.n(s),u=a(589),d=a(590),p=a(591),y=a(592),m=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,n=e.hasClick,o=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||n?"cp tap":""),style:{userSelect:"none"},onClick:o},i.a.createElement("div",{className:"fxm"},l?i.a.createElement("span",null,l,"\u3001"):i.a.createElement(u.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(d.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),n&&i.a.createElement("span",{className:"c0"},i.a.createElement(y.a,{className:"f24"})))},f=window.$http,h=window.$fn,w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={data:[]},e.getText=function(t){f.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){f.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),k=a(593);a.d(t,"a",(function(){return g}));var b=window.$fn,g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,l=t.hasShow,n=t.children;(b.hasArray(a)||l||n)&&e.setState({show:!e.state.show}),b.isString(r)&&e.props.history.push(r)},e.onShow=function(){b.showPhone(e.props.url)},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,n=t.children,o=t.pro,c=t.keyword,s=t.code,u=t.deviceTitle,d=t.isGray,p=t.link,y=t.url,f=t.order,h=t.noOrder,g=t.isValue,v=t.hasShow,x=this.state.show;return i.a.createElement(i.a.Fragment,null,u&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},u),i.a.createElement("section",{className:"box"},i.a.createElement(m,{show:x,hasArrow:b.hasArray(s)||v||n,hasClick:b.isString(p),order:h?null:f,onClick:this.onClick},c&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},c),a&&i.a.createElement("span",{className:"c0"},a),c&&!g?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),l&&c&&[i.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&i.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==x&&(b.hasArray(s)||v||n)?i.a.createElement("div",{className:"rel bbor1 ".concat(x?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(s)&&s.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(w,{type:"text",url:e.path}))})),n,y&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},588:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(586);var r=a(587),l=a(3),n=a(4),o=a(6),c=a(5),s=a(0),i=a.n(s),u=a(82),d=a(585),p=a(593),y=window.$fn,m=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return i.a.createElement("div",null,y.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&i.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,y.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(u.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(l,{key:t,data:e,index:t+1})})):i.a.createElement(l,{data:t}))}}]),a}(i.a.Component)},589:function(e,t,a){"use strict";var r=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},n=a(26),o=function(e,t){return r.createElement(n.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="ShareAltOutlined";t.a=r.forwardRef(o)},590:function(e,t,a){"use strict";var r=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},n=a(26),o=function(e,t){return r.createElement(n.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="UpCircleOutlined";t.a=r.forwardRef(o)},591:function(e,t,a){"use strict";var r=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},n=a(26),o=function(e,t){return r.createElement(n.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="DownCircleOutlined";t.a=r.forwardRef(o)},592:function(e,t,a){"use strict";var r=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},n=a(26),o=function(e,t){return r.createElement(n.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="RightCircleOutlined";t.a=r.forwardRef(o)},593:function(e,t,a){"use strict";var r=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},n=a(26),o=function(e,t){return r.createElement(n.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="ArrowRightOutlined";t.a=r.forwardRef(o)}}]);