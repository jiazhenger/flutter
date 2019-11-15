import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/ui/Card.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class UiRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/CardPage': (BuildContext context) => CardPage(title:'Card( )'),
	};
}