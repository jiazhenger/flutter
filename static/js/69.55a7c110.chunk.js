(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[69],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(4),c=a(6),s=a(5),l=a(0),i=a.n(l),o=a(593),m={title:"\u603b\u662f\u505c\u6b62\u7684\u52a8\u753b",keyword:"AlwaysStoppedAnimation( )",type:"AlwaysStoppedAnimation<T>",data:[{keyword:"value",type:"T",pro:"\u4efb\u610f\u6570\u636e\u7c7b\u578b"}]},u=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(o.a,Object.assign({data:m},this.props))}}]),a}(i.a.Component)},590:function(e,t,a){"use strict";a(591);var n=a(592),r=a(3),c=a(4),s=a(6),l=a(5),i=a(0),o=a.n(i),m=a(594),u=a(595),p=a(596),d=a(597),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return o.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},o.a.createElement("div",{className:"fxm"},r?o.a.createElement("span",null,r,"\u3001"):o.a.createElement(m.a,{className:"f14"}),o.a.createElement("div",{className:"ml10"},t)),a&&o.a.createElement("span",{className:"c0"},n?o.a.createElement(u.a,{className:"f24"}):o.a.createElement(p.a,{className:"f24"})),c&&o.a.createElement("span",{className:"c0"},o.a.createElement(d.a,{className:"f24"})))},f=window.$http,y=window.$fn,w=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){f.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){f.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),o.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?o.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},o.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return o.a.createElement("dt",{key:t},t+1)}))),o.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return o.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):o.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(o.a.Component),b=a(598);a.d(t,"a",(function(){return E}));var v=window.$fn,E=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(v.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),v.isString(n)&&e.props.history.push(n)},e.onShow=function(){v.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,i=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,f=t.order,y=t.noOrder,E=t.isValue,g=t.hasShow,k=this.state.show;return o.a.createElement(o.a.Fragment,null,m&&o.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),o.a.createElement("section",{className:"box"},o.a.createElement(h,{show:k,hasArrow:v.hasArray(i)||g||c,hasClick:v.isString(p),order:y?null:f,onClick:this.onClick},l&&o.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},l),a&&o.a.createElement("span",{className:"c0"},a),l&&!E?o.a.createElement("i",{className:"mlr10"},":"):o.a.createElement("i",{className:"ml10"}),r&&l&&[o.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&o.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==k&&(v.hasArray(i)||g||c)?o.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:v.hasArray(p)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(i)&&i.map((function(e,t){return o.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&o.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),o.a.createElement(w,{type:"text",url:e.path}))})),c,d&&o.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},o.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(p)&&o.a.createElement("div",{className:"mt10"},p.map((function(t,a){return o.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},o.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(o.a.Component)},593:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(591);var n=a(592),r=a(3),c=a(4),s=a(6),l=a(5),i=a(0),o=a.n(i),m=a(82),u=a(590),p=a(598),d=window.$fn,h=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return o.a.createElement("div",null,d.hasObject(a)&&a.keyword&&o.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&o.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&o.a.createElement("span",{className:"mr5 g9"},a.grayText),o.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[o.a.createElement(p.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],o.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&o.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),o.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?o.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?o.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,o.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return o.a.createElement(m.a,{className:"page-content"},a?t.data.map((function(e,t){return o.a.createElement(r,{key:t,data:e,index:t+1})})):o.a.createElement(r,{data:t}))}}]),a}(o.a.Component)},594:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},c=a(26),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="ShareAltOutlined";t.a=n.forwardRef(s)},595:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M518.5 360.3a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"up-circle",theme:"outlined"},c=a(26),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="UpCircleOutlined";t.a=n.forwardRef(s)},596:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"down-circle",theme:"outlined"},c=a(26),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="DownCircleOutlined";t.a=n.forwardRef(s)},597:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},c=a(26),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="RightCircleOutlined";t.a=n.forwardRef(s)},598:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},c=a(26),s=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};s.displayName="ArrowRightOutlined";t.a=n.forwardRef(s)}}]);