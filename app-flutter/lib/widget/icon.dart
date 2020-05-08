import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class IconWidget extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
	final dynamic icon;
	final String name;
	
	IconWidget({ Key key, this.icon, this.name }) : super(key: key);
	
	@override
	_PageState createState() => _PageState();
}

class _PageState extends State<IconWidget> {
	@override
	Widget build(BuildContext context) {
		return Container(
			color:Color(0xFFf5f5f5),
			height: 50.0,
			alignment: Alignment.center,
			child: Wrap(
				children: <Widget>[
					Container(width:double.infinity,alignment: Alignment.center,child: Icon(widget.icon)),
					Container(width:double.infinity,alignment: Alignment.center,child: Text(widget.name))
				]
			),
		);
	}
}