import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// style
import 'package:flutter_web_study.app/pages/flutter/layout/style/FittedBox.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/list/ListBody.dart';
// list
import 'package:flutter_web_study.app/pages/flutter/layout/list/Wrap.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/list/Flow.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/style/LayoutBuilder.dart';
// position
import 'package:flutter_web_study.app/pages/flutter/layout/position/Stack.dart';
// scroll
import 'package:flutter_web_study.app/pages/flutter/layout/scroll/ListView.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/scroll/GridView.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/scroll/GridViewCount.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/scroll/GridViewExtend.dart';
// my-widget\
import 'package:flutter_web_study.app/pages/flutter/layout/my-widget/CustomSingleChildLayout.dart';
// title
import 'package:flutter_web_study.app/pages/flutter/layout/title/ListTile.dart';
import 'package:flutter_web_study.app/pages/flutter/layout/title/ExpansionTile.dart';

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
		// scroll
		'/ListViewPage': (BuildContext context) => ListViewPage(title:'ListView( )'),
		'/GridViewPage': (BuildContext context) => GridViewPage(title:'GridView( )'),
		'/GridViewCountPage': (BuildContext context) => GridViewCountPage(title:'GridView.count( )'),
		'/GridViewExtendPage': (BuildContext context) => GridViewExtendPage(title:'GridView.extend( )'),
		// my-widget
		'/CustomSingleChildLayoutPage': (BuildContext context) => CustomSingleChildLayoutPage(title:'CustomSingleChildLayout( )'),
		// 标题
		'/ListTilePage': (BuildContext context) => ListTilePage(title:'ListTile( )'),
		'/ExpansionTilePage': (BuildContext context) => ExpansionTilePage(title:'ExpansionTile( )'),
	};
}