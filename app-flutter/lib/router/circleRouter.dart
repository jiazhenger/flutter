import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/circle/CircleAvatar.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/circle/ClipOval.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/circle/ClipRRect.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class CircleRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/CircleAvatarPage': (BuildContext context) => CircleAvatarPage(title:'CircleAvatar( )'),
		'/ClipOvalPage': (BuildContext context) => ClipOvalPage(title:'ClipOval( )'),
		'/ClipRRectPage': (BuildContext context) => ClipRRectPage(title:'ClipRRect( )'),
	};
}