import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class UserAccountsDrawerHeaderPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    UserAccountsDrawerHeaderPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<UserAccountsDrawerHeaderPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    UserAccountsDrawerHeader(
                        accountName: Text('accountName',style: TextStyle(height: 1.5),),
                        accountEmail: Text('accountEmail'),
                        currentAccountPicture: CircleAvatar(
                            backgroundImage: AssetImage(Config.staticUrl),
                        ),
                        otherAccountsPictures: <Widget>[
                            CircleAvatar(backgroundImage: AssetImage(Config.staticUrl) ),
                            CircleAvatar(backgroundImage: AssetImage(Config.staticUrl) ),
                            CircleAvatar(backgroundImage: AssetImage(Config.staticUrl) )
                        ],
                        onDetailsPressed: (){
                            print('onDetailsPressed');
                        },
                    ),
                ],
            )
        );
    }
}