import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/button/MaterialButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/RaisedButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/OutlineButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/FlatButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/FloatingActionButton.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/button/DropdownButton.dart';
// ======================================================================================================== 路由类
class ButtonRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/MaterialButtonPage': (BuildContext context) => MaterialButtonPage(title:'MaterialButton( )'),
		'/RaisedButtonPage': (BuildContext context) => RaisedButtonPage(title:'RaisedButton( )'),
		'/OutlineButtonPage': (BuildContext context) => OutlineButtonPage(title:'OutlineButton( )'),
		'/FlatButtonPage': (BuildContext context) => FlatButtonPage(title:'FlatButton( )'),
		'/FloatingActionButtonPage': (BuildContext context) => FloatingActionButtonPage(title:'FloatingActionButton( )'),
		'/DropdownButtonPage': (BuildContext context) => DropdownButtonPage(title:'DropdownButton( )'),
	};
}