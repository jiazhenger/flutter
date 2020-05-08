import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class ColorsPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    ColorsPage({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ColorsPage> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Text('Colors.red 内置颜色',style:TextStyle(color:Colors.red)),
                    Text('Colors.red[50] 内置颜色',style:TextStyle(color:Colors.red[50])),
                    Text('Colors.red[100] 内置颜色',style:TextStyle(color:Colors.red[100])),
                    Text('Colors.red[200] 内置颜色',style:TextStyle(color:Colors.red[200])),
                    Text('Colors.red[300] 内置颜色',style:TextStyle(color:Colors.red[300])),
                    Text('Colors.red[400] 内置颜色',style:TextStyle(color:Colors.red[400])),
                    Text('Colors.red[500] 内置颜色',style:TextStyle(color:Colors.red[500])),
                    Text('Colors.red[600] 内置颜色',style:TextStyle(color:Colors.red[600])),
                    Text('Colors.red[700] 内置颜色',style:TextStyle(color:Colors.red[700])),
                    Text('Colors.red[800] 内置颜色',style:TextStyle(color:Colors.red[800])),
                    Text('Colors.red[900] 内置颜色',style:TextStyle(color:Colors.red[900])),
                ],
            )
        );
    }
}