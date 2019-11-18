import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/popover/showModalBottomSheet.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/SnackBar.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/PopupMenuButton.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/showDialog.dart';
import 'package:flutter_web_study.app/pages/flutter/popover/AlertDialog.dart';
// ======================================================================================================== x

// ======================================================================================================== 路由类
class PopoverRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/ShowModalBottomSheetPage': (BuildContext context) => ShowModalBottomSheetPage(title:'showModalBottomSheet( )'),
		'/SnackBarPage': (BuildContext context) => SnackBarPage(title:'SnackBar( )'),
		'/PopupMenuButtonPage': (BuildContext context) => PopupMenuButtonPage(title:'PopupMenuButton( )'),
		'/ShowDialogPage': (BuildContext context) => ShowDialogPage(title:'showDialog( )'),
		'/AlertDialogPage': (BuildContext context) => AlertDialogPage(title:'AlertDialog( )'),
	};
}