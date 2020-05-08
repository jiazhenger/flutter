import 'package:flutter/material.dart';
// ======================================================================================================== 配置
final ThemeData iosTheme = ThemeData(
	primarySwatch: Colors.red,     // 主题颜色
	brightness:Brightness.dark,   // 应用程序整体主题的亮度。 由按钮等Widget使用，以确定在不使用主色或强调色时要选择的颜色
	primaryColorBrightness: Brightness.dark,    // primaryColor的亮度
	// Brightness.dark 表示颜色很暗，需要浅色文字颜色才能实现可读性, 白色
	// Brightness.light表示颜色很浅，需要深色文字颜色来实现可读性, 黑色
	primaryColor: Colors.red,           // App主要部分的背景色（ToolBar,Tabbar, AppBar等）
	highlightColor: Colors.red,         // 用于类似墨水喷溅动画或指示菜单被选中的高亮颜色
	hintColor: Colors.red,              // 用于提示文本或占位符文本的颜色，例如在TextField中
	textSelectionColor: Colors.red,     // 文本字段中选中文本的颜色，例如TextField
	backgroundColor: Colors.red,        // 背景颜色
	accentColor: Colors.red,            // 前景色（文本、按钮等）
	canvasColor: Colors.red,            // 画布颜色
	cardColor: Colors.red,              // 卡片颜色
	buttonColor: Colors.red,            // 按钮颜色
	dialogBackgroundColor: Colors.red,  // 对话框背景颜色
	disabledColor: Colors.red,          // 禁用颜色，用于Widget无效的颜色，无论任何状态。例如禁用复选框
	dividerColor: Colors.red,           // 分频器颜色
	errorColor: Colors.red,             // 用于输入验证错误的颜色，例如在TextField中
	indicatorColor: Colors.red,         // TabBar中选项选中的指示器颜色
	scaffoldBackgroundColor: Colors.red,// 作为Scaffold基础的Material默认颜色，典型Material应用或应用内页面的背景颜色
	secondaryHeaderColor: Colors.red,   // 次标头颜色,有选定行时PaginatedDataTable标题的颜色
	selectedRowColor: Colors.red,       // 选中行时的高亮颜色
	splashColor: Colors.red,            // 飞溅颜色, 墨水喷溅的颜色
	unselectedWidgetColor: Colors.red,  // 未选择的控件颜色,用于Widget处于非活动（但已启用）状态的颜色。 例如，未选中的复选框。 通常与accentColor形成对比
	textSelectionHandleColor:Colors.red,// 用于调整当前文本的哪个部分的句柄颜色
	toggleableActiveColor:Colors.red,   // 用于突出显示切换Widget（如Switch，Radio和Checkbox）的活动状态的颜色
	
	primaryColorDark:Colors.red,         // primaryColor的较暗版本
	primaryColorLight:Colors.red,        // primaryColor的较亮版本
	bottomAppBarColor:Colors.red,        // BottomAppBar的默认颜色

//	accentIconTheme:IconThemeData(),     // 突出颜色对照的图片主题
//	accentTextTheme:TextTheme(),         // 突出颜色对照的文本主题
//	textTheme:TextTheme(),               // 与卡片和画布对比的文本颜色
//	buttonTheme:ButtonThemeData(),       // 定义了按钮等控件的默认配置，像RaisedButton和FlatButton
//	chipTheme:ChipThemeData(),           // 用于渲染Chip的颜色和样式
//	iconTheme:IconThemeData(),           // 与卡片和画布颜色形成对比的图标主题
//	inputDecorationTheme:InputDecorationTheme(),    // InputDecorator，TextField和TextFormField的默认InputDecoration值基于此主题
//	primaryIconTheme:IconThemeData(),   // 一个与主色对比的图片主题
//	primaryTextTheme:TextTheme(),       // 一个与主色对比的文本主题
//	sliderTheme:SliderThemeData(),      // 用于渲染Slider的颜色和形状

	platform:TargetPlatform.iOS,         // Widget需要适配的目标类型
//	splashFactory:InteractiveInkFeatureFactory(), // 定义InkWall和InkResponse生成的墨水喷溅的外观
);

// android 主题
final ThemeData androidTheme = ThemeData(
	platform:TargetPlatform.fuchsia,
	// TextField,TextFormField 主题
	inputDecorationTheme:InputDecorationTheme(
		border: OutlineInputBorder(
			borderSide: BorderSide(color: Colors.green, width: 1.0)
		),
		enabledBorder: OutlineInputBorder( // 外边线
			borderSide: BorderSide(color: Colors.blue, width: 1.0),        // 边框样式
		),
		labelStyle: TextStyle(
			color: Colors.yellow,
			fontSize: 24.0
		),
	),
);