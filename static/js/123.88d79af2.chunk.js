(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[123],{288:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var r=a(3),n=a(4),s=a(6),c=a(5),l=a(0),o=a.n(l),i=a(593),f={title:"\u5bf9\u9f50\u65b9\u5f0f",isGroup:!0,data:[{title:"\u5bf9\u9f50\u65b9\u5f0f\uff0c\u7ee7\u627f\u4e8e Alignment",keyword:"FractionalOffset.x",type:"FractionalOffset",url:"FractionalOffsetPosition",data:[{keyword:"topLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"topRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0a"},{keyword:"centerLeft",pro:"\u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"center",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"centerRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e2d"},{keyword:"bottomLeft",pro:" \u6c34\u5e73\u5c45\u5de6\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomCenter",pro:"\u6c34\u5e73\u5c45\u4e2d\uff0c\u5782\u76f4\u5c45\u4e0b"},{keyword:"bottomRight",pro:"\u6c34\u5e73\u5c45\u53f3\uff0c\u5782\u76f4\u5c45\u4e0b"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/position"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset( )",type:"FractionalOffset",url:"FractionalOffsetXY",data:[{keyword:"x",type:"double",pro:"\u6c34\u5e73\u5bf9\u9f50",isValue:!0},{keyword:"y",type:"double",pro:"\u5782\u76f4\u5bf9\u9f50",isValue:!0},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/xy"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndRect( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndRect",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"rect",type:"Rect",pro:"",isValue:!0,link:"/flutter/style/Rect"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndRect"}]}]},{title:"\u81ea\u5b9a\u4e49\u5bf9\u9f50",keyword:"FractionalOffset.fromOffsetAndSize( )",type:"FractionalOffset",url:"FractionalOffsetFromOffsetAndSize",data:[{keyword:"offset",type:"Offset",pro:"\u504f\u79fb",isValue:!0,link:"/flutter/style/offset/Offset"},{keyword:"size",type:"Size",pro:"\u5927\u5c0f",isValue:!0,link:"/flutter/style/Size"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/align/FractionalOffset/fromOffsetAndSize"}]}]}]},m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement(i.a,Object.assign({data:f},this.props))}}]),a}(o.a.Component)},590:function(e,t,a){"use strict";a(591);var r=a(592),n=a(3),s=a(4),c=a(6),l=a(5),o=a(0),i=a.n(o),f=a(594),m=a(595),p=a(596),u=a(597),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},n?i.a.createElement("span",null,n,"\u3001"):i.a.createElement(f.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},r?i.a.createElement(m.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),s&&i.a.createElement("span",{className:"c0"},i.a.createElement(u.a,{className:"f24"})))},y=window.$http,h=window.$fn,w=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),k=a(598);a.d(t,"a",(function(){return b}));var g=window.$fn,b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,s=t.children;(g.hasArray(a)||n||s)&&e.setState({show:!e.state.show}),g.isString(r)&&e.props.history.push(r)},e.onShow=function(){g.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,c=t.pro,l=t.keyword,o=t.code,f=t.deviceTitle,m=t.isGray,p=t.link,u=t.url,y=t.order,h=t.noOrder,b=t.isValue,O=t.hasShow,v=this.state.show;return i.a.createElement(i.a.Fragment,null,f&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},f),i.a.createElement("section",{className:"box"},i.a.createElement(d,{show:v,hasArrow:g.hasArray(o)||O||s,hasClick:g.isString(p),order:h?null:y,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:g.stop},l),a&&i.a.createElement("span",{className:"c0"},a),l&&!b?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),n&&l&&[i.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(g.hasArray(o)||O||s)?i.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:g.hasArray(p)?"10px 0 5px":"10px 0"},onClick:g.stop},g.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(w,{type:"text",url:e.path}))})),s,u&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),g.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},593:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a(591);var r=a(592),n=a(3),s=a(4),c=a(6),l=a(5),o=a(0),i=a.n(o),f=a(82),m=a(590),p=a(598),u=window.$fn,d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return i.a.createElement("div",null,u.hasObject(a)&&a.keyword&&i.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&i.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&i.a.createElement("span",{className:"mr5 g9"},a.grayText),i.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[i.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],i.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&i.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return u.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),i.a.createElement("div",null,u.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?i.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return i.a.createElement(f.a,{className:"page-content"},a?t.data.map((function(e,t){return i.a.createElement(n,{key:t,data:e,index:t+1})})):i.a.createElement(n,{data:t}))}}]),a}(i.a.Component)},594:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},s=a(26),c=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ShareAltOutlined";t.a=r.forwardRef(c)},595:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},s=a(26),c=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="UpCircleOutlined";t.a=r.forwardRef(c)},596:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},s=a(26),c=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="DownCircleOutlined";t.a=r.forwardRef(c)},597:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},s=a(26),c=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="RightCircleOutlined";t.a=r.forwardRef(c)},598:function(e,t,a){"use strict";var r=a(0),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},s=a(26),c=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:n}))};c.displayName="ArrowRightOutlined";t.a=r.forwardRef(c)}}]);