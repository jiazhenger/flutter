import 'package:flutter/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web/router/mainRouter.dart';
import 'package:flutter_web/router/styleRouter.dart';
import 'package:flutter_web/router/httpRouter.dart';
// ======================================================================================================== 路由类
class FlutterRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		...MainRouter().router,
		...StyleRouter().router,
		...HttpRouter().router
	};
}