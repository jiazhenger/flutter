import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== Button widget
import 'package:flutter_web_study.app/pages/flutter/widget/button/MaterialButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/RaisedButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/OutlineButton.dart';
// ======================================================================================================== 路由类
class ButtonRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== Text( )
		'/MaterialButtonPage': (BuildContext context) => MaterialButtonPage(title:'MaterialButton( )'),
		'/RaisedButtonPage': (BuildContext context) => RaisedButtonPage(title:'RaisedButton( )'),
		'/OutlineButtonPage': (BuildContext context) => OutlineButtonPage(title:'OutlineButton( )'),
	};
}