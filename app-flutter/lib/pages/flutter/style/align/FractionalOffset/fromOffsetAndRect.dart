import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FractionalOffsetFromOffsetAndRect extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FractionalOffsetFromOffsetAndRect({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FractionalOffsetFromOffsetAndRect> {
    // 组件
    Widget MyWidget (Offset offset, Rect rect) => Container(
        color:Colors.black12,
        height: 50,
        margin: EdgeInsets.only(bottom: 10.0),
        alignment: FractionalOffset.fromOffsetAndRect(offset, rect),
        child: Container(
            color:Colors.red,
            height: 30.0,
            width:100.0,
            alignment: Alignment.center
        )
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
                    MyWidget(Offset(0.0, 0.0),Rect.fromCenter(center:Offset(0.0, 0.0), width:10.0, height: 10.0)),
                ],
            )
        );
    }
}