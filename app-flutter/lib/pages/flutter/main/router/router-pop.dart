import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class RouterPop extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    RouterPop({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterPop> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(
                        child: Text('pop 返回，无参数'),
                        color: Colors.blueAccent,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).pop();
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text(" pop 返回，并携带参数"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pop(context,{'a':1,'b':2});
                        }
                    ),
                ],
            )
        );
    }
}