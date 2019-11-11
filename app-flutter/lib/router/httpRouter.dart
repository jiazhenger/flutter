import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/http/HttpClient.dart';
// ======================================================================================================== 路由类
class HttpRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/http-httpClient': (BuildContext context) => HttpHttpClient(title:'http 请求'),
	};
}