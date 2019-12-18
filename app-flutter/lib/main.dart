import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'config.dart';
import 'theme.dart';
import 'flutterRouter.dart';
import 'dartRouter.dart';
// ======================================================================================================== pages
import 'pages/index.dart';
// ======================================================================================================== 启动 app, 不能命令为 App
void main() { runApp(FlutterApp());}
// ======================================================================================================== 入口组件
class MyObserver extends NavigatorObserver{
    @override
    void didPush(Route route, Route previousRoute) {
        // 当调用Navigator.push时回调
        super.didPush(route, previousRoute);
        //可通过route.settings获取路由相关内容
        //route.currentResult获取返回内容
        //....等等
        route.navigator.toDiagnosticsNode();
    }
}
class FlutterApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        GlobalKey<NavigatorState> _navigatorKey = new GlobalKey();
        return MaterialApp(
            // 在任务管理窗口中所显示的应用名字
            title: 'Flutter 教程',
            // 应用的主要颜色值（primary color），也就是安卓任务管理窗口中所显示的应用颜色
            color:Colors.green,
            // 主题配置，改变头部底色
            theme: androidTheme,
            // 入口页内容
            home: IndexPage(title:'Flutter 实例教程'),
//			home:new CustomeWidget(),   // 自定义组件
//			home:Scaffold(),            // 基本的纸墨设计布局结构
            // 路由
            initialRoute: '/',   // 第一个显示的路由名字，默认值为 Window.defaultRouteName
            // 路由，定义应用中页面跳转规则
            routes: {...FlutterRouter().router,...DartRouter().router},
            // 生成路由的回调函数，当导航的命名路由的时候，会使用这个来生成界面
            onGenerateRoute:(RouteSettings settings){
                return MaterialPageRoute(builder: (context) => IndexPage(title:'Flutter 实例教程4564'));
            },
//            builder:(BuildContext context, Widget widget ){
//                return MediaQuery(
//                    data: MediaQuery.of(context).copyWith(
//                        //字体大小
//                        textScaleFactor: 1.4,
//                    ),
//                    child: Text('13213'),
//                );
//            },
            navigatorObservers:[
                MyObserver()
            ],
            // 应用 Navigator 的监听器
//			navigatorObservers:
            navigatorKey: _navigatorKey,
            // 是否显示 纸墨设计 基础布局网格，用来调试 UI 的工具
//			debugShowMaterialGrid:true,
            // 显示性能标签
			showPerformanceOverlay:true,
            // 各种调试开关
            debugShowCheckedModeBanner: false, // 是否显示debug 图标, 默认显示 true
			checkerboardRasterCacheImages: true,
			showSemanticsDebugger: false,
            // 语言配置
//            localizationsDelegates: [ GlobalMaterialLocalizations.delegate, GlobalWidgetsLocalizations.delegate ],
            supportedLocales: [ const Locale('zh', 'CH'),const Locale('en', 'US') ],
        );
    }
}