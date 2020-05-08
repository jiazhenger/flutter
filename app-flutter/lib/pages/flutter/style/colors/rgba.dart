import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class Rgba extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    Rgba({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<Rgba> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RichText(
                        text:TextSpan(
                            text:'Color.fromRGBO',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(A-F|a-f)',style:TextStyle(color:Colors.green)),
                                TextSpan(text:'ff0000',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('Color.fromRGBO(207, 5, 214, 0.5)',style:TextStyle(color: Color.fromRGBO(207, 5, 214, 0.5))),
                    Divider(),
                    RichText(
                        text:TextSpan(
                            text:'Color.fromARGB',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(0x(AA-FF|aa-ff), 0x42, 0xA5, 0xF5)',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('Color.fromARGB(0xAA, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xAA, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xBB, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xBB, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xCC, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xCC, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xDD, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xDD, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xEE, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xEE, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xFF, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xFF, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0xff, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0xff, 0x42, 0xA5, 0xF5))),
                    Divider(),
                    RichText(
                        text:TextSpan(
                            text:'Color.fromARGB',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(0x(0-9)(A-F|a-f), 0x42, 0xA5, 0xF5)',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('Color.fromARGB(0x0A, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x0A, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x1B, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x1B, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x2C, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x2C, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x3D, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x3D, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x4E, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x4E, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x5F, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x5F, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x6f, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x6f, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x7f, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x7f, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x8f, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x8f, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x9f, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x9f, 0x42, 0xA5, 0xF5))),
                    Divider(),
                    RichText(
                        text:TextSpan(
                            text:'Color.fromARGB',
                            style:TextStyle(color:Colors.red),
                            children: <TextSpan>[
                                TextSpan(text:'(0x(00-99), 0x42, 0xA5, 0xF5)',style:TextStyle(color:Colors.black)),
                            ]
                        )
                    ),
                    Text('Color.fromARGB(0x00, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x00, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x10, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x10, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x20, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x20, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x30, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x30, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x40, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x40, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x50, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x50, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x60, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x60, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x70, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x70, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x80, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x80, 0x42, 0xA5, 0xF5))),
                    Text('Color.fromARGB(0x90, 0x42, 0xA5, 0xF5)',style:TextStyle(color: Color.fromARGB(0x90, 0x42, 0xA5, 0xF5)))
                ],
            )
        );
    }
}