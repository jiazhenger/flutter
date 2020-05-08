import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
import './router-param.dart';
// ======================================================================================================== Widget 控件
class RouterPush extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    RouterPush({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterPush> {
    String myText = '';
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(
                        child: Text("push 传参数"),
                        color: Colors.blueAccent,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
//                            Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context) => RouterParam( title:'somebody', list:[1,2,3], map:{'a':5,'b':6} ))).then((dynamic value){
//                                setState(() { myText =''; });
//                            });
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("push 接收返回的参数"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
//                            Navigator.push(context,MaterialPageRoute(builder: (BuildContext context){  return RouterParam( title:'everybody', list:[4,5,6], map:{'a':7,'b':8} );  })).then((dynamic value){
//                                setState(() { myText = value; });
//                            });
                        }
                    ),
                    Divider(),
                    Text(myText)
                ],
            )
        );
    }
}