import 'package:flutter/material.dart';
// ======================================================================================================== Widget 控件
class ListOneWidget extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
	final String title;
	final String subTitle;
	final dynamic child;
	
	ListOneWidget({ Key key, this.title, this.subTitle, this.child }) : super(key: key);
	
	@override
	_PageState createState() => _PageState();
}
class _PageState extends State<ListOneWidget> {
	@override
	Widget build(BuildContext context) {
		return Wrap(
			children: <Widget>[
				widget.title != null ?
				Row(
					children: <Widget>[
						Icon(Icons.lightbulb_outline, color:Colors.blue),
						Text(widget.title, style: TextStyle(color:Colors.pink)),
						Container(
							margin:EdgeInsets.only(left:10.0),
							child: widget.subTitle != null ? Text(widget.subTitle,style: TextStyle(color:Colors.teal)) : null
						),
					],
				) : Divider(height:0),
				Container(
					width: double.infinity,
					padding: EdgeInsets.all(10.0),
					margin:const EdgeInsets.symmetric(vertical:10.0),
					child: widget.child,
					decoration:BoxDecoration(
						color:Color(0xFFf5f5f5),
						borderRadius: BorderRadius.all(Radius.circular(5.0))
					)
				),
			],
		);
	}
}