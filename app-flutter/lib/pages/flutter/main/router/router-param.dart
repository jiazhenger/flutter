import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class RouterParam extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    final List<int> list;
    Map<String, int> map;

    RouterParam({ Key key, this.title, this.list, this.map }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterParam> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Text('push 接收参数',style: TextStyle(fontWeight: FontWeight.bold)),
                    Text('title=${widget.list.toString()}'),
                    Text('list=${widget.list.toString()}'),
                    Text('map=${widget.map.toString()}'),
                    Divider(),
                    Text('arguments 接收参数',style: TextStyle(fontWeight: FontWeight.bold)),
                    Text('arguments=${ModalRoute.of(context).settings.arguments}'),
                    Text('settings 其它属性',style: TextStyle(fontWeight: FontWeight.bold)),
                    Text('settings.name=${ModalRoute.of(context).settings.name}'),
//                    Text('settings.isInitialRoute=${ModalRoute.of(context).settings.isInitialRoute}'),
                    Text('settings.hashCode=${ModalRoute.of(context).settings.hashCode}'),
                    Text('settings.runtimeType=${ModalRoute.of(context).settings.runtimeType}'),
                    Text('settings.toString( )=${ModalRoute.of(context).settings.toString()}'),
//                    Text('settings.copyWith( )=${ModalRoute.of(context).settings.copyWith(name:'/RouterPop',isInitialRoute:true,arguments:[1,2,3])}'),
                    Divider(),
                    RaisedButton(
                        child: Text('pop 返回'),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pop(context,'flutter');
                        }
                    ),
                ],
            )
        );
    }
}