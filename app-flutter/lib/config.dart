import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
// ======================================================================================================== 配置
class Config {
	static final mainColor = Colors.blue;
	// 主题配置
	static ThemeData themeData = ThemeData(
		primarySwatch: Colors.blue
	);

	// 返回按钮
	static BackButton backButton =  BackButton(color: Colors.white);
//	static BackButton backButton =  IconButton( icon:Icon(Icons.chevron_left), onPressed:() => Navigator.pop(context, false));

	// AppBar
	static dynamic appBar(String title){
		return AppBar(
			title: Text(title, style:TextStyle(fontSize: 13.0)),
			centerTitle:true,
//			leading: BackButton(color: Colors.white)
		);
	}
	// 判断平台
	static bool isIos = defaultTargetPlatform == TargetPlatform.iOS;
	static bool isAndroid = defaultTargetPlatform == TargetPlatform.android;
}
