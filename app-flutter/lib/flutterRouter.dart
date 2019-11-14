import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/router/mainRouter.dart';
import 'package:flutter_web_study.app/router/styleRouter.dart';
import 'package:flutter_web_study.app/router/httpRouter.dart';
// widget
import 'package:flutter_web_study.app/router/imageRouter.dart';
import 'package:flutter_web_study.app/router/circleRouter.dart';
import 'package:flutter_web_study.app/router/textRouter.dart';
import 'package:flutter_web_study.app/router/buttonRouter.dart';
import 'package:flutter_web_study.app/router/iconRouter.dart';
import 'package:flutter_web_study.app/router/formRouter.dart';
import 'package:flutter_web_study.app/router/tableRouter.dart';
// ======================================================================================================== 路由类
class FlutterRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		...MainRouter().router,
		...StyleRouter().router,
		...HttpRouter().router,
		// widget
		...ImageRouter().router,
		...CircleRouter().router,
		...TextRouter().router,
		...ButtonRouter().router,
		...IconRouter().router,
		...FormRouter().router,
		...TableRouter().router,
	};
}