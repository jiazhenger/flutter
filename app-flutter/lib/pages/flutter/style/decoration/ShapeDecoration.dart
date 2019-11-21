import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ShapeDecorationPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShapeDecorationPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShapeDecorationPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Container(
                        height: 80,
                        margin: EdgeInsets.only(bottom: 10.0,top:10.0),
                        decoration:ShapeDecoration(
                            color:Colors.yellow,
                            image: DecorationImage(
                                image:AssetImage(Config.staticUrl),
                                fit: BoxFit.contain
                            ),
                            shape: RoundedRectangleBorder(
                                side:BorderSide(color:Colors.blue,style: BorderStyle.solid,width:2),
                                borderRadius: BorderRadius.circular(60.0)
                            )
                        ),
                    ),
                    Container(
                        height: 80,
                        margin: EdgeInsets.only(bottom: 20.0),
                        decoration:ShapeDecoration(
                            shape: RoundedRectangleBorder(
                                side:BorderSide(color:Colors.blue,style: BorderStyle.solid,width:2),
                                borderRadius: BorderRadius.circular(50.0)
                            ),
                            gradient: LinearGradient(
                                colors: [Colors.red,Colors.yellow,Colors.blue],
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                                tileMode:TileMode.clamp
                            ),
                        ),
                    ),
                    Container(
                        height: 80,
                        margin: EdgeInsets.only(bottom: 30.0),
                        decoration:ShapeDecoration(
                            color: Colors.yellow,
                            shape: RoundedRectangleBorder(
                                side:BorderSide(color:Colors.blue,style: BorderStyle.solid,width:2),
                                borderRadius: BorderRadius.circular(30.0)
                            ),
                            shadows: [
                                BoxShadow(color: Colors.red, offset:Offset(5.0, -5.0), blurRadius: 20.0),
                            ]
                        ),
                    ),
                    Container(
                        height: 80,
                        margin: EdgeInsets.only(bottom: 20.0),
                        decoration:ShapeDecoration(
                            image: DecorationImage(
                                image:AssetImage(Config.staticUrl)
                            ),
                            shape: RoundedRectangleBorder(
                                side:BorderSide(color:Colors.blue,style: BorderStyle.solid,width:2),
                                borderRadius: BorderRadius.circular(10.0)
                            ),
                            gradient: LinearGradient(
                                colors: [Colors.red,Colors.yellow,Colors.blue],
                                begin: Alignment.centerLeft,
                                end: Alignment.centerRight,
                                tileMode:TileMode.clamp
                            ),
                            shadows: [
                                BoxShadow(color: Colors.red, offset:Offset(5.0, -5.0), blurRadius: 20.0),
                            ]
                        ),
                    )
                ],
            )
        );
    }
}