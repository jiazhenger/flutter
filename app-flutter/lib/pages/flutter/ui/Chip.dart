import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ChipPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ChipPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ChipPage> {
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
                    Chip(
                        avatar: Image.asset(Config.staticUrl),
                        label: Text('Chip'),
                        labelStyle: TextStyle(color:Colors.blueAccent),
                        backgroundColor: Colors.yellow,
                        shape: Border.all(color: Colors.red),
                        deleteIcon: Text('del'),
                        deleteIconColor: Colors.blue,
                        deleteButtonTooltipMessage: '提示',
                        shadowColor: Colors.pink,
                        onDeleted: (){
                            print('del');
                        }
                    )
                ],
            )
        );
    }
}