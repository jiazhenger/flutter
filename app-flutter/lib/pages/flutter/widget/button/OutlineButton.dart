import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class OutlineButtonPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    OutlineButtonPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<OutlineButtonPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    OutlineButton(
                        child: Text('禁用按钮'),
                        onPressed: null,
                    ),
                    OutlineButton(
                        child: Text('激活按钮'),
                        onPressed: (){},
                        color:Colors.red,
                        highlightColor: Colors.yellow,
                        splashColor:Colors.blue,
                        hoverColor: Colors.purple,
                        focusColor: Colors.black,
                        shape: RoundedRectangleBorder(
                            side:BorderSide(color:Colors.black,style: BorderStyle.solid,width:5),
                            borderRadius: BorderRadius.circular(20.0)
                        ),
                        padding: EdgeInsets.all(20.0),
                        focusNode: FocusNode(debugLabel: '1213',skipTraversal:true,onKey: (node,key){
                            print(1231);
                            return true;
                        }),
                        textTheme: ButtonTextTheme.accent,
                        borderSide: BorderSide(width:1.0,color:Colors.blue),
                    )
                ],
            )
        );
    }
}