import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class SwitchPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    SwitchPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<SwitchPage> {
    bool _b =false;
    bool _c = true;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Switch(
                        value: _b,
                        onChanged: (v){ setState(() {
                          _b = v;
                        });},
                    ),
                    Switch(
                        value: _c,
                        activeColor: Colors.red,
                        activeTrackColor:Colors.yellow,
                        inactiveThumbColor:Colors.blueAccent,
                        inactiveTrackColor:Colors.pink,
                        onChanged: (v){ setState(() {
                            _c = v;
                        });},
                        inactiveThumbImage: AssetImage(Config.staticUrl),
                    ),
                ],
            )
        );
    }
}