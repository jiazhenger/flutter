import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/popover/BottomSheet.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/showModalBottomSheet.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/showBottomSheet.dart';

import 'package:flutter_web_study.app/pages/flutter/popover/SnackBar.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/PopupMenuButton.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/showDialog.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/AlertDialog.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/SimpleDialog.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/ExpansionPanelList.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class PopoverRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/BottomSheetPage': (BuildContext context) => BottomSheetPage(title:'BottomSheet( )'),
		'/ShowModalBottomSheetPage': (BuildContext context) => ShowModalBottomSheetPage(title:'showModalBottomSheet( )'),
		'/showBottomSheetPage': (BuildContext context) => showBottomSheetPage(title:'showBottomSheet( )'),
		'/SnackBarPage': (BuildContext context) => SnackBarPage(title:'SnackBar( )'),
		'/PopupMenuButtonPage': (BuildContext context) => PopupMenuButtonPage(title:'PopupMenuButton( )'),
		'/ShowDialogPage': (BuildContext context) => ShowDialogPage(title:'showDialog( )'),
		'/AlertDialogPage': (BuildContext context) => AlertDialogPage(title:'AlertDialog( )'),
		'/SimpleDialogPage': (BuildContext context) => SimpleDialogPage(title:'SimpleDialog( )'),
		'/ExpansionPanelListPagePage': (BuildContext context) => ExpansionPanelListPagePage(title:'ExpansionPanelList( )'),


	};
}