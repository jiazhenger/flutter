import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== Image
import 'package:flutter_web_study.app/pages/flutter/image/widget/Image.dart';
// ======================================================================================================== x
import 'package:flutter_web_study.app/pages/flutter/image/style/x/BoxFit.dart';
import 'package:flutter_web_study.app/pages/flutter/image/style/x/ImageRepeat.dart';
import 'package:flutter_web_study.app/pages/flutter/image/style/x/BlendMode.dart';
import 'package:flutter_web_study.app/pages/flutter/image/style/x/ColorFilter.dart';
// ======================================================================================================== 路由类
class ImageRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== Image
		'/ImagePage': (BuildContext context) => ImagePage(title:'Image( )'),
		// ======================================================================================================== x
		'/BoxFitPage': (BuildContext context) => BoxFitPage(title:'BoxFit.x'),
		'/ImageRepeatPage': (BuildContext context) => ImageRepeatPage(title:'ImageRepeat.x'),
		'/BlendModePage': (BuildContext context) => BlendModePage(title:'BlendMode.x'),
		'/ColorFilterPage': (BuildContext context) => ColorFilterPage(title:'ColorFilter.x'),
	};
}