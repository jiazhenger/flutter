import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BoxDecorationPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BoxDecorationPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BoxDecorationPage> {
    // page
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
                    Container(
                        height: 80,
                        margin: EdgeInsets.only(bottom: 10.0,top:10.0),
                        decoration:BoxDecoration(
                            color:Colors.yellow,
                            border:Border.all(width:2.0,color:Colors.red, style: BorderStyle.solid),
                            borderRadius: BorderRadius.circular(10.0),
                            boxShadow: [
                                BoxShadow(color: Colors.blue, blurRadius:5.0, offset:Offset(5.0,5.0))
                            ],
                            gradient: LinearGradient(
                                colors: [Colors.red,Colors.yellow,Colors.blue],
                            ),
                            image: DecorationImage(
                                image: AssetImage(Config.staticUrl)
                            ),
                        ),
                    )
                ],
            )
        );
    }
}