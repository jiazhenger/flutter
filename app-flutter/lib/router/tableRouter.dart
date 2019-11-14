import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/table/Table.dart';
// ======================================================================================================== 路由类
class TableRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/TablePage': (BuildContext context) => TablePage(title:'Table( )'),
	};
}