import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/text/Text.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/text/TextRich.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/text/Text_rich.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/text/Baseline.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/text/x/TextSpan.dart';
// ======================================================================================================== 路由类
class TextRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/TextPage': (BuildContext context) => TextPage(title:'Text( )'),
		'/RichTextPage': (BuildContext context) => RichTextPage(title:'TextRich( )'),
		'/TextRichPage': (BuildContext context) => TextRichPage(title:'Text.rich( )'),
		'/BaselinePage': (BuildContext context) => BaselinePage(title:'Baseline( )'),
		'/TextSpanPage': (BuildContext context) => TextSpanPage(title:'TextSpan( )'),
	};
}