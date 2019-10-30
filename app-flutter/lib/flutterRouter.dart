import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/router/mainRouter.dart';
import 'package:flutter_web_study.app/router/styleRouter.dart';
import 'package:flutter_web_study.app/router/imageRouter.dart';

import 'package:flutter_web_study.app/router/httpRouter.dart';
// ======================================================================================================== 路由类
class FlutterRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		...MainRouter().router,
		...StyleRouter().router,
		...ImageRouter().router,
		...HttpRouter().router
	};
}