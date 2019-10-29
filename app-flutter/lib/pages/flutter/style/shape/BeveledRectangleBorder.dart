import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BeveledRectangleBorderPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BeveledRectangleBorderPage({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BeveledRectangleBorderPage> {
    // 组件
    Widget MyWidget () => Container(
        height: 50,
        decoration:ShapeDecoration(
            color:Colors.yellow,
            shape: BeveledRectangleBorder(
                side:BorderSide(color:Colors.red,style: BorderStyle.solid,width:2),
                borderRadius: const BorderRadius.all(Radius.circular(20.0))
            )
        ),
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
                    MyWidget(),
                ],
            )
        );
    }
}