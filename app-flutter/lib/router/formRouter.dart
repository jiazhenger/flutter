import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/form/Form.dart';
// ======================================================================================================== 路由类
class FormRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/FormPage': (BuildContext context) => FormPage(title:'Form( )'),
	};
}