import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== Image widget
import 'package:flutter_web_study.app/pages/flutter/Circle/CircleAvatar.dart';
import 'package:flutter_web_study.app/pages/flutter/Circle/ClipOval.dart';
import 'package:flutter_web_study.app/pages/flutter/Circle/ClipRRect.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class CircleRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== Image
		'/CircleAvatarPage': (BuildContext context) => CircleAvatarPage(title:'CircleAvatar( )'),
		'/ClipOvalPage': (BuildContext context) => ClipOvalPage(title:'ClipOval( )'),
		'/ClipRRectPage': (BuildContext context) => ClipRRectPage(title:'ClipRRect( )'),
	};
}