import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class RouterPushReplacementNamed extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    RouterPushReplacementNamed({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterPushReplacementNamed> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(
                        child: Text('pushReplacementNamed 无参数跳转'),
                        color: Colors.blueAccent,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).pushReplacementNamed('/RouterPop');
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text('pushReplacementNamed 接收返回的参数'),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pushReplacementNamed(context,'/RouterPop').then((value){
                                print(value);
                            });
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text('pushReplacementNamed 传参数'),
                        color: Colors.purple,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pushReplacementNamed(context,'/RouterParam',result:[0,1,2],arguments: {'a':1,'b':2});
                        }
                    ),
                ],
            )
        );
    }
}