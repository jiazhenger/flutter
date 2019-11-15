import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// style
import 'package:flutter_web_study.app/pages/flutter/layout/style/FittedBox.dart';
// list
import 'package:flutter_web_study.app/pages/flutter/layout/list/Wrap.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/list/Flow.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/list/ListBody.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/style/LayoutBuilder.dart';
// position
import 'package:flutter_web_study.app/pages/flutter/layout/position/Stack.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class LayoutRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// style
		'/FittedBoxPage': (BuildContext context) => FittedBoxPage(title:'FittedBox( )'),
		'/LayoutBuilderPage': (BuildContext context) => LayoutBuilderPage(title:'LayoutBuilder( )'),
		// list
		'/WrapPage': (BuildContext context) => WrapPage(title:'Wrap( )'),
		'/FlowPage': (BuildContext context) => FlowPage(title:'Flow( )'),
		'/ListBodyPage': (BuildContext context) => ListBodyPage(title:'ListBody( )'),
		// position
		'/StackPage': (BuildContext context) => StackPage(title:'Stack( )'),
	};
}