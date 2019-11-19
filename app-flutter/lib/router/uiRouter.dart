import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/ui/Card.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/Chip.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/Tooltip.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/DataTable.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/LinearProgressIndicator.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/CircularProgressIndicator.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/RefreshIndicator.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/Divider.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/Stepper.dart';

// ======================================================================================================== x

// ======================================================================================================== 路由类
class UiRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/CardPage': (BuildContext context) => CardPage(title:'Card( )'),
		'/ChipPage': (BuildContext context) => ChipPage(title:'Chip( )'),
		'/TooltipPage': (BuildContext context) => TooltipPage(title:'Tooltip( )'),
		'/DataTablePage': (BuildContext context) => DataTablePage(title:'DataTablePage( )'),
		'/LinearProgressIndicatorPage': (BuildContext context) => LinearProgressIndicatorPage(title:'LinearProgressIndicator( )'),
		'/CircularProgressIndicatorPage': (BuildContext context) => CircularProgressIndicatorPage(title:'CircularProgressIndicator( )'),
		'/RefreshIndicatorPage': (BuildContext context) => RefreshIndicatorPage(title:'RefreshIndicator( )'),
		'/DividerPage': (BuildContext context) => DividerPage(title:'Divider( )'),
		'/StepperPage': (BuildContext context) => StepperPage(title:'Stepper( )'),
	};
}