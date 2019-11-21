import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class CheckboxPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    CheckboxPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<CheckboxPage> {
    bool a;
    bool b = true;
    bool c = false;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Checkbox(value:a,activeColor: Colors.red,onChanged: (v){ setState(() { a = v; }); }, tristate: true,),
                    Checkbox(value:b,onChanged: (v){ setState(() { b = v; }); },),
                    Checkbox(value:c,onChanged: (v){ setState(() { c = v; }); })
                ],
            )
        );
    }
}