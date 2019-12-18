import 'package:flutter_web/material.dart';
import 'package:flutter_web/foundation.dart';
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
			textTheme: TextTheme(
				display1: TextStyle()
			),
//			leading: BackButton(color: Colors.white)
		);
	}
	// 判断平台
	static bool isIos = defaultTargetPlatform == TargetPlatform.iOS;
	static bool isAndroid = defaultTargetPlatform == TargetPlatform.android;
	// 测试图片
	static String imgUrl = 'https://jiazhenger.github.io/flutter/assets/images/test.png';
	static String staticUrl = './images/test.png';
}
