import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class DrawerPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    DrawerPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<DrawerPage> {
    final GlobalKey<ScaffoldState> _scaffoldKey = new GlobalKey<ScaffoldState>();
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            key:_scaffoldKey,
            appBar: Config.appBar(widget.title),
            drawer: Drawer(
                child: Container(
                    color: Colors.white,
                    child: ListView(
                        children: <Widget>[
                            AboutListTile(
                                icon:  CircleAvatar(child: new Text('1')),
                            ),
                            Divider(),
                            AboutListTile(
                                icon:  CircleAvatar(child: new Text('2')),
                            ),
                            MaterialButton(
                                color: Colors.red,
                                child: Text('关闭',style: TextStyle(color: Colors.white),),
                                onPressed: (){
                                    Navigator.of(context).pop();
                                },
                            )
                        ],
                    ),
                ),
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MaterialButton(
                        color: Colors.red,
                        child: Text('key 打开抽屉',style: TextStyle(color: Colors.white),),
                        onPressed: (){
                            _scaffoldKey.currentState.openDrawer();
                        },
                    ),
                    Builder(
                        builder: (BuildContext context){
                            return MaterialButton(
                                color: Colors.red,
                                child: Text('Scaffold 打开抽屉',style: TextStyle(color: Colors.white),),
                                onPressed: (){
                                    Scaffold.of(context).openDrawer();
                                },
                            );
                        },
                    ),
                    MaterialButton(
                        color: Colors.blue,
                        child: Text('返回首页',style: TextStyle(color: Colors.white),),
                        onPressed: (){
                            Navigator.of(context).pop();
                        },
                    ),
                ],
            )
        );
    }
}