import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'MaterialApp 入口', 
	keyword:'MaterialApp( )', 
	type:'MaterialApp',
	data:[
		{ keyword:'home', type:'Widget', pro:'主页面', code:[ {path:'flutter/app/MaterialApp/home'} ] },
		{ keyword:'builder', type:'Widget Function( BuildContext, Widget )', pro:'创建一个widget', code:[{path:'flutter/app/MaterialApp/builder'}] },
		{ deviceTitle:'主题', keyword:'color', type:'Color',  pro:'应用的主要颜色值，也就是安卓任务管理窗口中所显示的应用颜色' },
		{ keyword:'theme', type:'ThemeData', pro:'主题配置', link:'/flutter/style/ThemeData' },
		{ keyword:'darkTheme', type:'ThemeData', pro:'深色主题配置', link:'/flutter/style/ThemeData' },
		{ keyword:'themeMode', type:'ThemeMode', pro:'主题模式', code:[{path:'flutter/app/MaterialApp/ThemeMode'}] },
		
		
		{ deviceTitle:'标题', keyword:'title', type:'String',  pro:'andorid:任务管理器的程序快照之上; ios:程序切换管理器中; web: 浏览器中 title' },
		{ keyword:'onGenerateTitle', type:'String Function( BuildContext )', pro:'生成标题，浏览器中相当于 title', code:[{path:'flutter/app/MaterialApp/onGenerateTitle'}] },
		
		{ deviceTitle:'路由', keyword:'initialRoute', type:'String', pro:'初始路由，默认值为 Window.defaultRouteName', link:'/flutter/app/router/base-router' },
		{ keyword:'routes', type:'Map<String, WidgetBuilder>', pro:'路由挂载处', link:'/flutter/app/router/base-router' },
		{ 
			keyword:'navigatorObservers', type:'List<NavigatorObserver>', pro:'路由监听器', 
			code:[{path:'flutter/app/MaterialApp/navigatorObservers'}],
			link:[
				{ title:'settings', url:'/flutter/app/router/router-info' },
				{ title:'Route', url:'/flutter/app/router/Route' }
			]
		},
		{ keyword:'navigatorKey', type:'GlobalKey<NavigatorState>', pro:'导航键', code:[{path:'flutter/app/MaterialApp/navigatorKey'}] },
		{ 
			keyword:'onGenerateRoute', type:'Route<dynamic> Function( RouteSettings )', pro:'路由拦截，当应用程序被导航到指定路由时执行', 
			code:[{path:'flutter/app/MaterialApp/onGenerateRoute'}],
			link:[{ title:'settings', url:'/flutter/app/router/settings' }]
		},
		{ 
			keyword:'onUnknownRoute', type:'Route<dynamic> Function( RouteSettings )', pro:'路由未找到时执行', 
			code:[{path:'flutter/app/MaterialApp/onUnknownRoute'}],
			link:[{ title:'settings', url:'/flutter/app/router/router-info' }]
		},
		
		{ deviceTitle:'调试', keyword:'debugShowMaterialGrid:', type:'bool', pro:'调试显示材质网格，整个界面呈网格状, 默认 false' },
		{ keyword:'debugShowCheckedModeBanner:', type:'bool', pro:'显示 debug 图标, 默认 true' },
		{ keyword:'checkerboardRasterCacheImages:', type:'bool', pro:'打开棋盘格层渲染到屏幕外的位图, 默认 false' },
		{ keyword:'checkerboardOffscreenLayers:', type:'bool', pro:'棋盘格层, 默认 false' },
		{ keyword:'showPerformanceOverlay:', type:'bool', pro:'显示性能标签, 默认 false' },
		{ keyword:'showSemanticsDebugger:', type:'bool', pro:'显示语义调试器，打开显示框架报告的可访问性信息的覆盖，标注出所有的盒子， 默认 false' },
		
		{ deviceTitle:'语言', keyword:'locale:', type:'Locale', pro:'区域值', link:'/flutter/style/locale/Locale' },
		{ keyword:'localizationsDelegates:', type:'Iterable<LocalizationsDelegate<dynamic>>', pro:'本地化委托，这个回调负责在应用程序启动时以及用户更改设备的区域设置时选择应用程序的区域设置', code:[{path:'flutter/app/MaterialApp/localizationsDelegates'}] },
		{ keyword:'localeResolutionCallback:', type:'Locale Function( Locale, Iterable<Locale> )', pro:'更改系统语言设置时执行', code:[{path:'flutter/app/MaterialApp/localeResolutionCallback'}] },
		{ keyword:'localeListResolutionCallback:', type:'Locale Function( List<Locale>, Iterable<Locale> )', pro:'更改系统语言设置时执行', code:[{path:'flutter/app/MaterialApp/localeListResolutionCallback'}] },
		{
			keyword:'supportedLocales:', type:'Iterable<Locale>', pro:'支持区域，此应用程序已本地化的地区列表',
			code: [{path:'flutter/app/MaterialApp/supportedLocales'}],
			link: [{ title:'Locale', url:'/flutter/style/locale/Locale' }]
		}
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }