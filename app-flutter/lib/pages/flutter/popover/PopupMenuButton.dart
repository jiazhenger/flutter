import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class PopupMenuButtonPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    PopupMenuButtonPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<PopupMenuButtonPage> {
    int value = 2;
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
                    PopupMenuButton(
                        initialValue: value,
                        itemBuilder: (BuildContext context){
                            return [
                                PopupMenuItem(
                                    value: 0,
                                    child: Text('flutter'),
                                ),
                                PopupMenuItem(
                                    value: 1,
                                    child: Text('react'),
                                ),
                                PopupMenuItem(
                                    value: 2,
                                    child: Text('angular'),
                                )
                            ];
                        },
                        child:  Text('child click', style:TextStyle(height: 2.5)),
                        onSelected: (value){
                            setState(() {
                                value = value;
                            });
                            print(value);
                        },
                        onCanceled: (){
                            print('取消');
                        },
                    )
                ],
            )
        );
    }
}