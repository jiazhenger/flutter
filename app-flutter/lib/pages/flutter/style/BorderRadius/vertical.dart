import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BorderRadiusVertical extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderRadiusVertical({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderRadiusVertical> {
    // 组件
    Widget MyWidget (double top,double bottom) => Container(
        height: 50,
        margin: EdgeInsets.only(bottom:10.0),
        alignment:Alignment.center,
        decoration:BoxDecoration(
            color:Colors.red,
            borderRadius: BorderRadius.vertical(top: Radius.circular(top),bottom: Radius.circular(bottom)),
            border: Border.all(width: 5.0, color: Colors.red, style: BorderStyle.solid)
        ),
        child: Text('top=${top} bottom=${bottom}', style:TextStyle(color: Colors.white)),
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(20.0,50.0),
                    MyWidget(200.0,20.0),
                    MyWidget(50.0,20.0),
                ],
            )
        );
    }
}