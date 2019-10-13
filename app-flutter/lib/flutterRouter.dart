import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/router/router-pushNamed.dart';
import 'package:flutter_web_study.app/pages/flutter/router/router-pushReplacementNamed.dart';
import 'package:flutter_web_study.app/pages/flutter/router/router-push.dart';
import 'package:flutter_web_study.app/pages/flutter/router/router-pop.dart';
import 'package:flutter_web_study.app/pages/flutter/router/router-pop-param.dart';
import 'package:flutter_web_study.app/pages/flutter/router/router-param.dart';
// ======================================================================================================== HttpClient
import 'package:flutter_web_study.app/pages/flutter/http/HttpClient.dart';
// ======================================================================================================== color:Colors.red
import 'package:flutter_web_study.app/pages/flutter/colors/Colors.dart';
import 'package:flutter_web_study.app/pages/flutter/colors/color16.dart';
import 'package:flutter_web_study.app/pages/flutter/colors/rgba.dart';
// ======================================================================================================== 获取主题 Theme.of(context).x
import 'package:flutter_web_study.app/pages/flutter/theme/get-theme.dart';
// ======================================================================================================== 路由类
class FlutterRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== 路由
		'/router-pushNamed': (BuildContext context) => RouterPushNamed(title:'跳转可返回'),
		'/router-pushReplacementNamed': (BuildContext context) => RouterPushReplacementNamed(title:'跳转不可返回'),
		'/router-push': (BuildContext context) => RouterPush(title:'跳转并传参'),
		'/router-pop': (BuildContext context) => RouterPop(title:'返回跳转'),
		'/router-pop-param': (BuildContext context) => RouterPopParam(title:'返回跳转携带参数'),
		'/router-param': (BuildContext context) => RouterParam(title:'接收参数'),
		// ======================================================================================================== 基本颜色
		'/Colors': (BuildContext context) => ColorsPage(title:'Colors.red 系统内置颜色'),
		'/color16': (BuildContext context) => Color16Page(title:'十六进制颜色'),
		'/rgba': (BuildContext context) => RgbaPage(title:'rgba颜色'),
		// ======================================================================================================== 获取主题 Theme.of(context).x
		'/get-theme': (BuildContext context) => GetTheme(title:'获取主题'),
		// ======================================================================================================== HttpClient
		'/http-httpClient': (BuildContext context) => HttpHttpClient(title:'http 请求'),
	};
}