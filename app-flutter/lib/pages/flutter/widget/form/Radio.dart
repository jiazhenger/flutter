import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class RadioPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    RadioPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RadioPage> {
    int s = 0;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Radio(value:0,onChanged: (v){setState((){s=v;});}, activeColor: Colors.red, groupValue:s,),
                    Radio(value:1,onChanged: (v){setState((){s=v;});}, groupValue:s,),
                    Radio(value:2,onChanged: (v){setState((){s=v;});}, groupValue:s,),
                    Text(s.toString())
                ],
            )
        );
    }
}