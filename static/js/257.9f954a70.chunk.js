(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[257],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var r=a(3),n=a(4),l=a(6),c=a(5),s=a(0),i=a.n(s),o=a(584),p={title:"\u591a\u5143\u7d20\u5bb9\u5668",keyword:"Wrap( )",type:"Wrap",url:"WrapPage",data:[{keyword:"direction",type:"Axis",pro:"\u6392\u5217\u65b9\u5411\uff0c\u9ed8\u8ba4\u6c34\u5e73",code:[{path:"flutter/widget/layout/list/Wrap/Axis"}]},{deviceTitle:"\u5bf9\u9f50\u65b9\u5f0f",keyword:"alignment",type:"WrapAlignment",pro:"\u4e3b\u8f74\u5bf9\u9f50\u65b9\u5f0f\uff0c",code:[{path:"flutter/widget/layout/list/Wrap/WrapAlignment"}]},{keyword:"runAlignment",type:"WrapAlignment",pro:"\u526f\u8f74\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/widget/layout/list/Wrap/WrapAlignment"}]},{keyword:"crossAxisAlignment",type:"WrapCrossAlignment",pro:"\u6a2a\u8f74\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/widget/layout/list/Wrap/WrapCrossAlignment"}]},{deviceTitle:"\u95f4\u8ddd",keyword:"spacing",type:"double",pro:"\u6c34\u5e73\u95f4\u8ddd"},{keyword:"runSpacing",type:"double",pro:"\u5782\u76f4\u95f4\u8ddd"},{deviceTitle:"\u5176\u5b83",keyword:"verticalDirection",type:"VerticalDirection",pro:"\u6392\u5217\u6446\u653e\u987a\u5e8f",code:[{path:"flutter/widget/layout/list/Wrap/VerticalDirection"}]},{keyword:"textDirection",type:"TextDirection",pro:"\u6392\u5217\u987a\u5e8f",code:[{path:"flutter/widget/text/TextDirection"}]},{keyword:"children",type:"List<Widget>",pro:"\u5217\u8868\u63a7\u4ef6",code:[{path:"flutter/public/widget-children"}]}]},m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(o.a,Object.assign({data:p},this.props))}}]),a}(i.a.Component)},581:function(e,t,a){"use strict";a(582);var r=a(583),n=a(3),l=a(4),c=a(6),s=a(5),i=a(0),o=a.n(i),p=a(598),m=a(599),u=a(600),d=a(601),y=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return o.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},o.a.createElement("div",{className:"fxm"},n?o.a.createElement("span",null,n,"\u3001"):o.a.createElement(p.a,{className:"f14"}),o.a.createElement("div",{className:"ml10"},t)),a&&o.a.createElement("span",{className:"c0"},r?o.a.createElement(m.a,{className:"f24"}):o.a.createElement(u.a,{className:"f24"})),l&&o.a.createElement("span",{className:"c0"},o.a.createElement(d.a,{className:"f24"})))},h=window.$http,f=window.$fn,w=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.getText=function(t){h.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){h.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),o.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?o.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},o.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return o.a.createElement("dt",{key:t},t+1)}))),o.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return o.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):o.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(o.a.Component),k=a(602);a.d(t,"a",(function(){return b}));var E=window.$fn,b=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onClick=function(){var t=e.props,a=t.code,r=t.link,n=t.hasShow,l=t.children;(E.hasArray(a)||n||l)&&e.setState({show:!e.state.show}),E.isString(r)&&e.props.history.push(r)},e.onShow=function(){E.showPhone(e.props.url)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,c=t.pro,s=t.keyword,i=t.code,p=t.deviceTitle,m=t.isGray,u=t.link,d=t.url,h=t.order,f=t.noOrder,b=t.isValue,g=t.hasShow,v=this.state.show;return o.a.createElement(o.a.Fragment,null,p&&o.a.createElement("h2",{className:"ptb10 c1 bbor1"},p),o.a.createElement("section",{className:"box"},o.a.createElement(y,{show:v,hasArrow:E.hasArray(i)||g||l,hasClick:E.isString(u),order:f?null:h,onClick:this.onClick},s&&o.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&o.a.createElement("span",{className:"c0"},a),s&&!b?o.a.createElement("i",{className:"mlr10"},":"):o.a.createElement("i",{className:"ml10"}),n&&s&&[o.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&o.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==v&&(E.hasArray(i)||g||l)?o.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:E.hasArray(u)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(i)&&i.map((function(e,t){return o.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&o.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),o.a.createElement(w,{type:"text",url:e.path}))})),l,d&&o.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(u)&&o.a.createElement("div",{className:"mt10"},u.map((function(t,a){return o.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},o.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(o.a.Component)},584:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(582);var r=a(583),n=a(3),l=a(4),c=a(6),s=a(5),i=a(0),o=a.n(i),p=a(86),m=a(581),u=a(602),d=window.$fn,y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={},e.onShow=function(t,a){e.setState({show:!e.state.show})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return o.a.createElement("div",null,d.hasObject(a)&&a.keyword&&o.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&o.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&o.a.createElement("span",{className:"mr5 g9"},a.grayText),o.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[o.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),o.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],o.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&o.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),o.a.createElement("div",null,d.hasArray(a.data)&&a.data.map((function(t,a){return[t.title?o.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?o.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,o.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]}))))};return o.a.createElement(p.a,{className:"page-content"},a?t.data.map((function(e,t){return o.a.createElement(n,{key:t,data:e,index:t+1})})):o.a.createElement(n,{data:t}))}}]),a}(o.a.Component)}}]);