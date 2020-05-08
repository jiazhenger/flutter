import 'package:flutter/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== color:Colors.red
import 'package:flutter_web/pages/flutter/style/colors/Colors.dart';
import 'package:flutter_web/pages/flutter/style/colors/color16.dart';
import 'package:flutter_web/pages/flutter/style/colors/rgba.dart';
// ======================================================================================================== EdgeInsets 偏移量
import 'package:flutter_web/pages/flutter/style/EdgeInsets/all.dart';
import 'package:flutter_web/pages/flutter/style/EdgeInsets/only.dart';
import 'package:flutter_web/pages/flutter/style/EdgeInsets/symmetric.dart';
import 'package:flutter_web/pages/flutter/style/EdgeInsets/fromLTRB.dart';
import 'package:flutter_web/pages/flutter/style/EdgeInsets/lerp.dart';
import 'package:flutter_web/pages/flutter/style/EdgeInsets/fromWindowPadding.dart';
// ======================================================================================================== Alignment 对齐方式
import 'package:flutter_web/pages/flutter/style/align/Alignment/position.dart';
import 'package:flutter_web/pages/flutter/style/align/Alignment/xy.dart';
import 'package:flutter_web/pages/flutter/style/align/Alignment/lerp.dart';
// ======================================================================================================== FractionalOffset 对齐方式
import 'package:flutter_web/pages/flutter/style/align/FractionalOffset/position.dart';
import 'package:flutter_web/pages/flutter/style/align/FractionalOffset/xy.dart';
import 'package:flutter_web/pages/flutter/style/align/FractionalOffset/fromOffsetAndRect.dart';
import 'package:flutter_web/pages/flutter/style/align/FractionalOffset/fromOffsetAndSize.dart';
// ======================================================================================================== Border 边样式
import 'package:flutter_web/pages/flutter/style/border/Border/all.dart';
import 'package:flutter_web/pages/flutter/style/border/Border/BorderOne.dart';
// ======================================================================================================== BorderSide 边样式
import 'package:flutter_web/pages/flutter/style/border/BorderSide/BorderSide.dart';
import 'package:flutter_web/pages/flutter/style/border/BorderSide/merge.dart';
// ======================================================================================================== BorderRadius 圆角
import 'package:flutter_web/pages/flutter/style/borderRadius/BorderRadius/all.dart';
import 'package:flutter_web/pages/flutter/style/borderRadius/BorderRadius/circular.dart';
import 'package:flutter_web/pages/flutter/style/borderRadius/BorderRadius/horizontal.dart';
import 'package:flutter_web/pages/flutter/style/borderRadius/BorderRadius/vertical.dart';
import 'package:flutter_web/pages/flutter/style/borderRadius/BorderRadius/only.dart';
// ======================================================================================================== BoxShadow 阴影
import 'package:flutter_web/pages/flutter/style/shadow/BoxShadow.dart';
import 'package:flutter_web/pages/flutter/style/shadow/Shadow.dart';
// ======================================================================================================== 渐变
import 'package:flutter_web/pages/flutter/style/gradient/LinearGradient.dart';
import 'package:flutter_web/pages/flutter/style/gradient/RadialGradient.dart';
import 'package:flutter_web/pages/flutter/style/gradient/SweepGradient.dart';
// ======================================================================================================== 路由类
class StyleRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== 基本颜色
		'/Colors': (BuildContext context) => ColorsPage(title:'Colors.red 系统内置颜色'),
		'/Color16': (BuildContext context) => Color16(title:'十六进制颜色'),
		'/Rgba': (BuildContext context) => Rgba(title:'rgba颜色'),
		// ======================================================================================================== EdgeInsets 偏移量
		'/EdgeInsetsAll': (BuildContext context) => EdgeInsetsAll(title:'EdgeInsets.all()'),
		'/EdgeInsetsOnly': (BuildContext context) => EdgeInsetsOnly(title:'EdgeInsets.only()'),
		'/EdgeInsetsSymmetric': (BuildContext context) => EdgeInsetsSymmetric(title:'EdgeInsets.symmetric()'),
		'/EdgeInsetsFromLTRB': (BuildContext context) => EdgeInsetsFromLTRB(title:'EdgeInsets.fromLTRB()'),
		'/EdgeInsetsFromWindowPadding': (BuildContext context) => EdgeInsetsFromWindowPadding(title:'EdgeInsets.fromWindowPadding()'),
		'/EdgeInsetsLerp': (BuildContext context) => EdgeInsetsLerp(title:'EdgeInsets.lerp()'),
		// ======================================================================================================== Alignment 对齐方式
		'/AlignmentPosition': (BuildContext context) => AlignmentPosition(title:'Alignment.x'),
		'/AlignmentXY': (BuildContext context) => AlignmentXY(title:'Alignment(x,y)'),
		'/AlignmentLerp': (BuildContext context) => AlignmentLerp(title:'Alignment.lerp()'),
		// ======================================================================================================== FractionalOffset 对齐方式
		'/FractionalOffsetPosition': (BuildContext context) => FractionalOffsetPosition(title:'FractionalOffset.x'),
		'/FractionalOffsetXY': (BuildContext context) => FractionalOffsetXY(title:'FractionalOffset(x,y)'),
		'/FractionalOffsetFromOffsetAndRect': (BuildContext context) => FractionalOffsetFromOffsetAndRect(title:'FractionalOffset.fromOffsetAndRect(x,y)'),
		'/FractionalOffsetFromOffsetAndSize': (BuildContext context) => FractionalOffsetFromOffsetAndSize(title:'FractionalOffset.fromOffsetAndSize()'),
		// ======================================================================================================== Border 边样式
		'/BorderAll': (BuildContext context) => BorderAll(title:'Border.all()'),
		'/BorderOne': (BuildContext context) => BorderOne(title:'Border()'),
		// ======================================================================================================== BorderSide 边样式
		'/BorderSidePage': (BuildContext context) => BorderSidePage(title:'BorderSide()'),
		'/BorderSideMerge': (BuildContext context) => BorderSideMerge(title:'BorderSide.merge()'),
		// ======================================================================================================== BorderRadius 圆角
		'/BorderRadiusAll': (BuildContext context) => BorderRadiusAll(title:'BorderRadius.all()'),
		'/BorderRadiusCircular': (BuildContext context) => BorderRadiusCircular(title:'BorderRadius.circular()'),
		'/BorderRadiusHorizontal': (BuildContext context) => BorderRadiusHorizontal(title:'BorderRadius.horizontal()'),
		'/BorderRadiusVertical': (BuildContext context) => BorderRadiusVertical(title:'BorderRadius.vertical()'),
		'/BorderRadiusOnly': (BuildContext context) => BorderRadiusOnly(title:'BorderRadius.only()'),
		// ======================================================================================================== BoxShadow 阴影
		'/BoxShadowPage': (BuildContext context) => BoxShadowPage(title:'BoxShadow()'),
		'/ShadowPage': (BuildContext context) => ShadowPage(title:'Shadow()'),
		// ======================================================================================================== 渐变
		'/LinearGradientPage': (BuildContext context) => LinearGradientPage(title:'LinearGradient()'),
		'/RadialGradientPage': (BuildContext context) => RadialGradientPage(title:'RadialGradient()'),
		'/SweepGradientPage': (BuildContext context) => SweepGradientPage(title:'SweepGradient()'),
	};
}