(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[314],{442:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(3),l=a(4),r=a(6),c=a(5),o=a(0),s=a.n(o),i=a(82),m=a(590),u=window.$fn,p=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){u.setTitle("\u5e03\u5c14\u7c7b\u578b"),u.hidePhone()}},{key:"render",value:function(){return s.a.createElement(i.a,{className:"page-content"},s.a.createElement(m.a,{order:1,pro:"\u7c7b\u578b\u58f0\u660e",code:[{path:"js/grammar/data-type/boolean/base"}]}),s.a.createElement(m.a,{order:2,pro:"\u521b\u5efa\u5bf9\u8c61",code:[{path:"js/grammar/data-type/boolean/create"}]},s.a.createElement("ul",{className:"js-code-list"},s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(1) ",s.a.createElement("u",null,"=> ",Boolean(1).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(2) ",s.a.createElement("u",null,"=> ",Boolean(2).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(-1) ",s.a.createElement("u",null,"=> ",Boolean(-1).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(0) ",s.a.createElement("u",null,"=> ",Boolean(0).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(-0) ",s.a.createElement("u",null,"=> ",Boolean(-0).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(null) ",s.a.createElement("u",null,"=> ",Boolean(null).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(undefined) ",s.a.createElement("u",null,"=> ",Boolean(void 0).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(NaN) ",s.a.createElement("u",null,"=> ",Boolean(NaN).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"(false) ",s.a.createElement("u",null,"=> ",Boolean(!1).toString())),s.a.createElement("li",null,"var bool = ",s.a.createElement("b",null,"Boolean"),"( ) ",s.a.createElement("u",null,"=> ",Boolean().toString())))),s.a.createElement(m.a,Object.assign({pro:"\u5c5e\u6027",link:"/js/object/boolean/property"},this.props)),s.a.createElement(m.a,Object.assign({pro:"\u65b9\u6cd5",link:"/js/object/boolean/method"},this.props)))}}]),a}(s.a.Component)},590:function(e,t,a){"use strict";a(591);var n=a(592),l=a(3),r=a(4),c=a(6),o=a(5),s=a(0),i=a.n(s),m=a(594),u=a(595),p=a(596),d=a(597),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,l=e.order,r=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||r?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},l?i.a.createElement("span",null,l,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(u.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),r&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},f=window.$http,E=window.$fn,b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.getText=function(t){f.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){f.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),g=a(598);a.d(t,"a",(function(){return v}));var y=window.$fn,v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,l=t.hasShow,r=t.children;(y.hasArray(a)||l||r)&&e.setState({show:!e.state.show}),y.isString(n)&&e.props.history.push(n)},e.onShow=function(){y.showPhone(e.props.url)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,r=t.children,c=t.pro,o=t.keyword,s=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,f=t.order,E=t.noOrder,v=t.isValue,w=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:N,hasArrow:y.hasArray(s)||w||r,hasClick:y.isString(p),order:E?null:f,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:y.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!v?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),l&&o&&[i.a.createElement(g.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==N&&(y.hasArray(s)||w||r)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:y.hasArray(p)?"10px 0 5px":"10px 0"},onClick:y.stop},y.hasArray(s)&&s.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(b,{type:"text",url:e.path}))})),r,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},594:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},r=a(26),c=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};c.displayName="ShareAltOutlined";t.a=n.forwardRef(c)},595:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},r=a(26),c=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};c.displayName="UpCircleOutlined";t.a=n.forwardRef(c)},596:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},r=a(26),c=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};c.displayName="DownCircleOutlined";t.a=n.forwardRef(c)},597:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},r=a(26),c=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};c.displayName="RightCircleOutlined";t.a=n.forwardRef(c)},598:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},r=a(26),c=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};c.displayName="ArrowRightOutlined";t.a=n.forwardRef(c)}}]);