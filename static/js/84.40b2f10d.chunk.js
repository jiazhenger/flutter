(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[84],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(5),n=a(6),l=a(8),c=a(7),o=a(9),s=a(0),i=a.n(s),p=a(487),u={title:"\u7b80\u5355\u5bf9\u8bdd\u6846\u53ef\u4ee5\u663e\u793a\u9644\u52a0\u7684\u63d0\u793a\u6216\u64cd\u4f5c",keyword:"SimpleDialog( )",type:"SimpleDialog",url:"SimpleDialogPage",data:[{keyword:"content",type:"Widget",pro:"\u4e3b\u8981\u5185\u5bb9"},{keyword:"backgroundColor",type:"Color",pro:"\u80cc\u666f\u8272",link:"/flutter/style/Colors"},{keyword:"elevation",type:"double",pro:"\u9634\u5f71"},{keyword:"shape",type:"ShapeBorder",pro:"\u5f62\u72b6",link:"/flutter/public/shape"},{keyword:"behavior",type:"SnackBarBehavior",pro:"\u884c\u4e3a",code:[{path:"flutter/public/SnackBarBehavior"}]},{keyword:"duration",type:"Duration",pro:"\u52a8\u753b\u8fc7\u6e21\u65f6\u957f",link:"/flutter/time/Duration"},{keyword:"animation",type:"Animation<double>",pro:"\u52a8\u753b",code:[{path:"flutter/public/animation"}]},{keyword:"action",type:"SnackBarAction",pro:"\u5173\u95ed\u6309\u94ae\u63a7\u4ef6",link:"/flutter/popover/SnackBarAction"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/popover/SnackBar/SnackBar"}],link:[{title:"Builder",url:"/flutter/widget/Builder"},{title:"Center",url:"/flutter/layout/Center"},{title:"RaisedButton",url:"/flutter/button/RaisedButton"},{title:"SnackBarAction",url:"/flutter/popover/SnackBarAction"}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),l=a(5),c=a(6),o=a(8),s=a(7),i=a(9),p=a(0),u=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,c=e.hasClick,o=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:o},u.a.createElement("div",{className:"fxm"},l?u.a.createElement("span",null,l,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),c&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return k});var f=window.$fn,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,c=t.children,o=t.pro,s=t.keyword,i=t.code,p=t.isGray,d=t.link,y=t.url,k=t.order,w=t.noOrder,b=t.isValue,E=t.hasShow,v=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:v,hasArrow:f.hasArray(i)||E,hasClick:f.isString(d),order:w?null:k,onClick:this.onClick},s&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},s),a&&u.a.createElement("span",{className:"c0"},a),s&&!b?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),l&&s&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],o&&u.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==v&&(f.hasArray(i)||E)?u.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),c,y&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&u.a.createElement("div",{className:"mt10"},d.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(485);var r=a(486),n=(a(116),a(22)),l=a(5),c=a(6),o=a(8),s=a(7),i=a(9),p=a(0),u=a.n(p),m=a(86),d=a(484),y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return u.a.createElement("div",null,y.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&u.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?u.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(l,{key:t,data:e,index:t+1})}):u.a.createElement(l,{data:t}))}}]),t}(u.a.Component)}}]);