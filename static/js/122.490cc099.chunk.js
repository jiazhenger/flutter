(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[122],{284:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(4),n=a(5),l=a(7),o=a(6),s=a(8),c=a(0),i=a.n(c),p=a(560),y={title:"\u652f\u6491\u6837\u5f0f",keyword:"StrutStyle( )",isGroup:!0,data:[{title:"\u7981\u7528",keyword:"StrutStyle.disabled",type:"StrutStyle"},{title:"\u652f\u6491\u6837\u5f0f",keyword:"StrutStyle( )",type:"StrutStyle",data:[{type:"String",keyword:"fontFamily",pro:"\u5b57\u4f53",code:[{path:"flutter/style/TextStyle/font/fontFamily"},{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53 ",path:"flutter/style/TextStyle/font/fontFamily-my"}]},{keyword:"fontFamilyFallback",type:"List<String>",pro:"\u5b57\u4f53\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFamilyFallback"}]},{keyword:"fontSize",type:"double",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"flutter/style/TextStyle/font/fontSize"}]},{keyword:"fontWeight",type:"FontWeight",pro:"\u52a0\u7c97",code:[{path:"flutter/style/TextStyle/font/fontWeight"}]},{keyword:"fontStyle",type:"FontStyle",pro:"\u503e\u659c",code:[{path:"flutter/style/TextStyle/font/fontStyle"}]},{keyword:"height",type:"double",pro:"\u884c\u9ad8"},{keyword:"forceStrutHeight",type:"double",pro:"\u5f3a\u5236\u9ad8\u5ea6"},{keyword:"leading",type:"double",pro:"\u81ea\u5b9a\u4e49\u591a\u4e2a\u5b57\u4f53\u5927\u5c0f"},{keyword:"debugLabel",type:"String",pro:"\u6587\u672c\u6837\u5f0f\u7684\u53ef\u8bfb\u63cf\u8ff0",code:[{path:"flutter/public/debugLabel"}]},{keyword:"package",type:"String",pro:"\u5305"}]},{title:"\u7981\u7528",keyword:"StrutStyle.fromTextStyle( )",type:"StrutStyle",data:[{keyword:"textStyle",type:"TextStyle",pro:"\u6587\u672c\u6837\u5f0f",isValue:!0,link:"/flutter/style/TextStyle"},{noOrder:!0,pro:"\u5176\u5b83\u5c5e\u6027\u540c\u4e0a"}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:y},this.props))}}]),t}(i.a.Component)},557:function(e,t,a){"use strict";a(558);var r=a(559),n=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),y=a(574),m=a(575),u=a(576),d=a(577),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(y.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(m.a,{className:"f24"}):p.a.createElement(u.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(d.a,{className:"f24"})))},f=window.$http,k=window.$fn,w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return k.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(578);a.d(t,"a",function(){return E});var S=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(S.hasArray(t)||n)&&a.setState({show:!a.state.show}),S.isString(r)&&a.props.history.push(r)},a.onShow=function(){S.showPhone(a.props.url)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,o=t.pro,s=t.keyword,c=t.code,i=t.isGray,y=t.link,m=t.url,u=t.order,d=t.noOrder,f=t.isValue,k=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:E,hasArrow:S.hasArray(c)||k,hasClick:S.isString(y),order:d?null:u,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:S.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&s&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==E&&(S.hasArray(c)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:S.hasArray(y)?"10px 0 5px":"10px 0"},onClick:S.stop},S.hasArray(c)&&c.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(w,{type:"text",url:e.path}))}),l,m&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),S.hasArray(y)&&p.a.createElement("div",{className:"mt10"},y.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(558);var r=a(559),n=a(4),l=a(5),o=a(7),s=a(6),c=a(8),i=a(0),p=a.n(i),y=a(88),m=a(557),u=a(578),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,d.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(u.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(y.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);