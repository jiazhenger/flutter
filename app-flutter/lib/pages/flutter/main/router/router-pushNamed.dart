import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class RouterPushNamed extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    RouterPushNamed({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterPushNamed> {
    String myText = '';
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(
                        child: Text('pushNamed 无参数跳转'),
                        color: Colors.blueAccent,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).pushNamed('/RouterPop').then((value){
                                setState(() {
                                    myText = '';
                                });
                            });;
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("pushNamed 接收返回的参数"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pushNamed(context,'/RouterPop').then((value){
                                setState(() {
                                    myText = value.toString();
                                });
                            });
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("pushNamed 传参数"),
                        color: Colors.purple,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).pushNamed('/RouterParam',arguments:{'x':1,'y':2}).then((value){
                                setState(() {
                                    myText = '';
                                });
                            });
                        }
                    ),
                    Divider(),
                    Text(myText)
                ],
            )
        );
    }
}