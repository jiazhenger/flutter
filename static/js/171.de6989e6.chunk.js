(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[171],{336:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),p=a(566),m={title:"tab \u5bfc\u822a",keyword:"BottomNavigationBar( )",type:"BottomNavigationBar",url:"BottomNavigationBarPage",data:[{keyword:"items",type:"List<BottomNavigationBarItem>",pro:"\u9009\u9879\u6309\u94ae",code:[{path:"flutter/ui/tab/BottomNavigationBar/items"}],link:[{title:"BottomNavigationBarItem",url:"/flutter/style/BottomNavigationBarItem"}]},{keyword:"currentIndex",type:"int",pro:"\u5f53\u524d\u7d22\u5f15\u503c\uff0c\u9ed8\u8ba4 0"},{keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"type",type:"BottomNavigationBarType",pro:"\u7c7b\u578b",code:[{path:"flutter/ui/tab/BottomNavigationBar/BottomNavigationBarType"}]},{keyword:"fixedColor",type:"Color",pro:"\u5f53\u524dtab\u6587\u5b57\u989c\u8272",link:"/flutter/style/Colors"},{keyword:"backgroundColor",type:"Color",pro:"\u6574\u4e2a\u80cc\u666f\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"tab color \u8bbe\u7f6e",keyword:"selectedItemColor",type:"Color",pro:"\u5f53\u524dtab\u6587\u5b57\u989c\u8272\uff0c\u4e0e fixedColor \u4e92\u65a5",link:"/flutter/style/Colors"},{keyword:"unselectedItemColor",type:"Color",pro:"\u975e\u5f53\u524dtab\u6587\u5b57\u989c\u8272",link:"/flutter/style/Colors"},{deviceTitle:"tab icon \u8bbe\u7f6e",keyword:"iconSize",type:"double",pro:"icon \u5c3a\u5bf8"},{keyword:"selectedIconTheme",type:"IconThemeData",pro:"\u5f53\u524d icon \u4e3b\u9898",link:"/flutter/style/IconThemeData"},{keyword:"unselectedIconTheme",type:"IconThemeData",pro:"\u975e\u5f53\u524d icon \u4e3b\u9898",link:"/flutter/style/IconThemeData"},{deviceTitle:"tab \u5b57\u4f53\u8bbe\u7f6e",keyword:"selectedFontSize",type:"double",pro:"\u5f53\u524dtab\u6587\u5b57\u5927\u5c0f"},{keyword:"unselectedFontSize",type:"double",pro:"\u975e\u5f53\u524dtab\u6587\u5b57\u5927\u5c0f"},{deviceTitle:"label \u8bbe\u7f6e",keyword:"selectedLabelStyle",type:"TextStyle",pro:"\u5f53\u524dtab\u6587\u672c\u6837\u5f0f"},{keyword:"unselectedLabelStyle",type:"TextStyle",pro:"\u975e\u5f53\u524dtab\u6587\u672c\u6837\u5f0f"},{keyword:"showSelectedLabels",type:"bool",pro:"\u662f\u5426\u663e\u793a\u5f53\u524d tab \u7684 labels"},{keyword:"showUnselectedLabels",type:"bool",pro:"\u662f\u5426\u663e\u793a\u975e\u5f53\u524d tab \u7684 labels"},{deviceTitle:"\u4e8b\u4ef6",keyword:"onTap",type:"void Function( int )",pro:"\u70b9\u51fb\u65f6\u6267\u884c",code:[{path:"flutter/ui/tab/onTap"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},563:function(e,t,a){"use strict";a(564);var r=a(565),n=a(4),o=a(5),l=a(7),c=a(6),s=a(8),i=a(0),p=a.n(i),m=a(580),u=a(581),d=a(582),y=a(583),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,o=e.hasClick,l=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),o&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},b=window.$http,f=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.getText=function(e){b.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){b.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),w=a(584);a.d(t,"a",function(){return E});var v=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(v.hasArray(t)||n)&&a.setState({show:!a.state.show}),v.isString(r)&&a.props.history.push(r)},a.onShow=function(){v.showPhone(a.props.url)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,o=t.children,l=t.pro,c=t.keyword,s=t.code,i=t.isGray,m=t.link,u=t.url,d=t.order,y=t.noOrder,b=t.isValue,f=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:E,hasArrow:v.hasArray(s)||f,hasClick:v.isString(m),order:y?null:d,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!b?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&c&&[p.a.createElement(w.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==E&&(v.hasArray(s)||f)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:v.hasArray(m)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(s)&&s.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(k,{type:"text",url:e.path}))}),o,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},566:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(564);var r=a(565),n=a(4),o=a(5),l=a(7),c=a(6),s=a(8),i=a(0),p=a.n(i),m=a(90),u=a(563),d=a(584),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);