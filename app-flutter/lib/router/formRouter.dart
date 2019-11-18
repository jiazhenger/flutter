import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
import 'package:flutter_web_study.app/pages/flutter/widget/form/Form.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/Checkbox.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/Radio.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/Switch.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/Slider.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/showDatePicker.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/form/showTimePicker.dart';
// ======================================================================================================== 路由类
class FormRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		'/FormPage': (BuildContext context) => FormPage(title:'Form( )'),
		'/CheckboxPage': (BuildContext context) => CheckboxPage(title:'Checkbox( )'),
		'/RadioPage': (BuildContext context) => RadioPage(title:'Radio( )'),
		'/SwitchPage': (BuildContext context) => SwitchPage(title:'Switch( )'),
		'/SliderPage': (BuildContext context) => SliderPage(title:'Slider( )'),
		'/ShowDatePickerPage': (BuildContext context) => ShowDatePickerPage(title:'showDatePicker( )'),
        '/ShowTimePickerPage': (BuildContext context) => ShowTimePickerPage(title:'showTimePicker( )'),
	};
}