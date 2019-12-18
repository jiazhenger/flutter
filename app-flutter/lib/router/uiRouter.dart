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
import 'package:flutter_web_study.app/pages/flutter/ui/UserAccountsDrawerHeader.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/FlutterLogo.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/Placeholder.dart';
// 标题
import 'package:flutter_web_study.app/pages/flutter/ui/title/Title.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/title/ListTile.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/title/ExpansionTile.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/title/AboutListTile.dart';
// tab
import 'package:flutter_web_study.app/pages/flutter/ui/tab/BottomNavigationBar.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/tab/TabBar.dart';
import 'package:flutter_web_study.app/pages/flutter/ui/tab/TabBarView.dart';
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
		'/UserAccountsDrawerHeaderPage': (BuildContext context) => UserAccountsDrawerHeaderPage(title:'UserAccountsDrawerHeader( )'),
		'/FlutterLogoPage': (BuildContext context) => FlutterLogoPage(title:'FlutterLogo( )'),
		'/PlaceholderPage': (BuildContext context) => PlaceholderPage(title:'Placeholder( )'),
		// 标题
		'/TitlePage': (BuildContext context) => TitlePage(title:'Title( )'),
		'/ListTilePage': (BuildContext context) => ListTilePage(title:'ListTile( )'),
		'/ExpansionTilePage': (BuildContext context) => ExpansionTilePage(title:'ExpansionTile( )'),
		'/AboutListTilePage': (BuildContext context) => AboutListTilePage(title:'AboutListTile( )'),
		// tab
		'/BottomNavigationBarPage': (BuildContext context) => BottomNavigationBarPage(title:'BottomNavigationBar( )'),
		'/TabBarPage': (BuildContext context) => TabBarPage(title:'TabBar( )'),
		'/TabBarViewPage': (BuildContext context) => TabBarViewPage(title:'TabBarView( )'),
	};
}