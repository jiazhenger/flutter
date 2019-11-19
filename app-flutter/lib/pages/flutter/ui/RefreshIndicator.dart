import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class  RefreshIndicatorPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    RefreshIndicatorPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RefreshIndicatorPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: Container(
                alignment: Alignment.center,
                child: SizedBox(
                    width: 100.0,
                    height: 100.0,
                    child: RefreshIndicator(
                        color: Colors.red,
                        backgroundColor: Colors.black87,
                        child: Text('1231'),
                        displacement: 20.0,
                        onRefresh: (){
                            return Future((){
                                return 0;
                            });
                        },
                        notificationPredicate: (ScrollNotification scroll){
                            return false;
                        },
                    ),
                ),
            )
        );
    }
}