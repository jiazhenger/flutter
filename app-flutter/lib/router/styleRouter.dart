import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== color:Colors.red
import 'package:flutter_web_study.app/pages/flutter/style/colors/Colors.dart';
import 'package:flutter_web_study.app/pages/flutter/style/colors/color16.dart';
import 'package:flutter_web_study.app/pages/flutter/style/colors/rgba.dart';
// ======================================================================================================== EdgeInsets 偏移量
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/all.dart';
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/only.dart';
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/symmetric.dart';
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/fromLTRB.dart';
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/lerp.dart';
import 'package:flutter_web_study.app/pages/flutter/style/EdgeInsets/fromWindowPadding.dart';
// ======================================================================================================== Alignment 对齐方式
import 'package:flutter_web_study.app/pages/flutter/style/Alignment/position.dart';
import 'package:flutter_web_study.app/pages/flutter/style/Alignment/xy.dart';
import 'package:flutter_web_study.app/pages/flutter/style/Alignment/FractionalOffset.dart';
import 'package:flutter_web_study.app/pages/flutter/style/Alignment/lerp.dart';
// ======================================================================================================== 路由类
class StyleRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== 基本颜色
		'/Colors': (BuildContext context) => ColorsPage(title:'Colors.red 系统内置颜色'),
		'/Color16': (BuildContext context) => Color16(title:'十六进制颜色'),
		'/Rgba': (BuildContext context) => Rgba(title:'rgba颜色'),
		// ======================================================================================================== EdgeInsets 偏移量
		'/EdgeInsetsAll': (BuildContext context) => EdgeInsetsAll(title:'四边补白'),
		'/EdgeInsetsOnly': (BuildContext context) => EdgeInsetsOnly(title:'单边补白'),
		'/EdgeInsetsSymmetric': (BuildContext context) => EdgeInsetsSymmetric(title:'水平垂直补白'),
		'/EdgeInsetsFromLTRB': (BuildContext context) => EdgeInsetsFromLTRB(title:'四边补白'),
		'/EdgeInsetsLerp': (BuildContext context) => EdgeInsetsLerp(title:'四边补白'),
		'/EdgeInsetsFromWindowPadding': (BuildContext context) => EdgeInsetsFromWindowPadding(title:'根据机型屏幕尺寸定义'),
		// ======================================================================================================== Alignment 对齐方式
		'/AlignmentPosition': (BuildContext context) => AlignmentPosition(title:'位置对齐'),
		'/AlignmentXY': (BuildContext context) => AlignmentXY(title:'自定义对齐'),
		'/AlignmentFractionalOffset': (BuildContext context) => AlignmentFractionalOffset(title:'按比例对齐'),
		'/AlignmentLerp': (BuildContext context) => AlignmentLerp(title:'对齐'),
	};
}