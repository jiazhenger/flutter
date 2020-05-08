import 'package:flutter/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web/pages/flutter/main/router/router-pushNamed.dart';
import 'package:flutter_web/pages/flutter/main/router/router-pushReplacementNamed.dart';
import 'package:flutter_web/pages/flutter/main/router/router-push.dart';
import 'package:flutter_web/pages/flutter/main/router/router-pop.dart';
import 'package:flutter_web/pages/flutter/main/router/router-param.dart';
// ======================================================================================================== 获取主题 Theme.of(context).x
import 'package:flutter_web/pages/flutter/main/theme/get-theme.dart';
// ======================================================================================================== 路由类
class MainRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== 路由
		'/RouterPushNamed': (BuildContext context) => RouterPushNamed(title:'pushNamed()'),
		'/RouterPushReplacementNamed': (BuildContext context) => RouterPushReplacementNamed(title:'pushReplacementNamed()'),
		'/RouterPush': (BuildContext context) => RouterPush(title:'push()'),
		'/RouterPop': (BuildContext context) => RouterPop(title:'pop()'),
		'/RouterParam': (BuildContext context) => RouterParam(title:'接收参数'),
		// ======================================================================================================== 获取主题 Theme.of(context).x
		'/get-theme': (BuildContext context) => GetTheme(title:'获取主题'),
	};
}