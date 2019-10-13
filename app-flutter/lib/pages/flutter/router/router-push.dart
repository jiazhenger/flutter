import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
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
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(
                        child: Text("Navigator.of(context).push(MaterialPageRoute())"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context) => RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':5,'b':6} ))).then((dynamic value){
                                print(value);
                                setState(() { myText += '+' + value; });
                            });;
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context){ return RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':7,'b':8} ); }));"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).push(MaterialPageRoute(builder: (BuildContext context){ return RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':7,'b':8} ); })).then((dynamic value){
                                print(value);
                                setState(() { myText += '+' + value; });
                            });;
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("Navigator.push(context,MaterialPageRoute(builder: (BuildContext context) => RouterParam()))"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) => RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':0,'b':1} ))).then((dynamic value){
                                print(value);
                                setState(() { myText += '+' + value; });
                            });;
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("Navigator.push(context,MaterialPageRoute(builder: (BuildContext context){  return RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':7,'b':8} );  }));"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.push(context,MaterialPageRoute(builder: (BuildContext context){  return RouterParam( title:'接收第一个参数', name:'接收第二个参数', map:{'a':7,'b':8} );  })).then((dynamic value){
                                print(value);
                                setState(() { myText += '+' + value; });
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