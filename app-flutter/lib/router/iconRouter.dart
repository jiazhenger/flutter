import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/icon/Icon.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/icon/ImageIcon.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/icon/IconButton.dart';
// ======================================================================================================== 路由类
class IconRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/IconPage': (BuildContext context) => IconPage(title:'Icon( )'),
		'/ImageIconPage': (BuildContext context) => ImageIconPage(title:'ImageIcon( )'),
		'/IconButtonPage': (BuildContext context) => IconButtonPage(title:'IconButton( )'),
	};
}