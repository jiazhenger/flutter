(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[82],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return u});var a=r(9),n=r(10),o=r(12),l=r(11),c=r(13),s=r(0),i=r.n(s),d=r(316),p={title:"\u56db\u8fb9\u6837\u5f0f",keyword:"Border",data:[{keyword:"Border.all(double width, Color color, BorderStyle style)",type:"Border",pro:"\u56db\u8fb9\u6837\u5f0f",code:[{path:"flutter/style/border/Border/all"}],link:[{title:"Color",url:"/flutter/style/Colors"}],url:"BorderAll"},{keyword:"Border( BorderSide left, BorderSide top, BorderSide right, BorderSide bottom  )",type:"Border",pro:"\u5355\u8fb9\u6837\u5f0f",code:[{path:"flutter/style/border/Border/one"}],link:[{title:"BorderSide",url:"/flutter/style/border/BorderSide"}],url:"BorderOne"},{keyword:"Border.merge(BorderSide a, BorderSide b)",type:"BorderStyle",pro:"",code:[{path:"flutter/style/border/Border/merge"}],url:"BorderSideMerge"},{keyword:"BorderSide.lerp(Border a, Border b, double t)",type:"BorderStyle",pro:"",code:[{path:"flutter/style/border/Border/lerp"}]}]},u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},315:function(e,t,r){"use strict";r(317);var a=r(318),n=(r(101),r(21)),o=r(9),l=r(10),c=r(12),s=r(11),i=r(13),d=r(0),p=r.n(d),u=function(e){var t=e.children,r=e.hasArrow,a=e.show,o=e.order,l=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(r?"cp":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),r&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:a?"up-circle":"down-circle"})))},m=window.$http,y=window.$fn,h=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},r.getText=function(e){m.getText(e).then(function(e){r.setState({data:e.split("\n")})})},r.getDart=function(e){m.getDart(e).then(function(e){r.setState({data:e.split("\n")})})},r}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,r=t.type,a=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===r?this.getText(a):"dart"===r&&this.getDart(a)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);r.d(t,"a",function(){return b});var f=window.$fn,b=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},r.onClick=function(){r.setState({show:!r.state.show})},r.onShow=function(){f.showPhone(r.props.url)},r}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,r=t.title,o=t.type,l=t.children,c=t.pro,s=t.keyword,i=t.code,d=t.isGray,m=t.link,y=t.url,b=t.order,w=t.noOrder,k=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(d?"gray":"")},s),r&&p.a.createElement("span",{className:"c0"},r),c&&(r||s)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,o&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),p.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},void 0!==k&&f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),l,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(a.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,r){return p.a.createElement(a.a,{key:r,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},316:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var a=r(9),n=r(10),o=r(12),l=r(11),c=r(13),s=r(0),i=r.n(s),d=r(71),p=r(315),u=window.$fn,m=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(d.a,{className:"page-content"},this.props.data.keyword&&i.a.createElement("h2",{className:"b f16",style:{borderBottom:"2px solid red",padding:"10px 0"}},this.props.data.keyword),u.hasArray(t)&&t.map(function(t,r){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+r,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+r,type:t.type,order:r+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);