import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class Color16 extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    Color16({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<Color16> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RichText(
                        text:TextSpan(
                            text:'0x',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(A-F|a-f)',style:TextStyle(color:Colors.green)),
                                TextSpan(text:'ff0000',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xAAff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xBBff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xCCff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xDDff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xeeff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0xffff0000))),
                    Divider(),
                    RichText(
                        text:TextSpan(
                            text:'0x',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(0-9)(A-F||a-f)',style:TextStyle(color:Colors.green)),
                                TextSpan(text:'ff0000',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x0Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x1Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x2Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x3Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x4Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x5Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x6Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x7Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x8Fff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x9Fff0000))),
                    Divider(),
                    RichText(
                        text:TextSpan(
                            text:'0x',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'00-99',style:TextStyle(color:Colors.green)),
                                TextSpan(text:'ff0000',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x00ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x10ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x20ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x30ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x40ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x50ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x60ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x70ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x80ff0000))),
                    Text('16进制颜色值',style:TextStyle(color:Color(0x99ff0000))),
                ],
            )
        );
    }
}