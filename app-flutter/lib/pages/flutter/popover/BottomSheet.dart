import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BottomSheetPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BottomSheetPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BottomSheetPage> {
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
                    RaisedButton(
                        color: Colors.blue,
                        child: new Text('点击上滑弹窗', style:TextStyle(color:Colors.white),),
                        onPressed: () {
                            showDialog(
                                context: context,
                                barrierDismissible: true,
                                builder: (BuildContext context) {
                                    return BottomSheet(
                                        builder: (BuildContext context){
                                            return MaterialButton(
                                                child: Text('关闭弹窗'),
                                                onPressed: (){
                                                    Navigator.of(context).pop();
                                                },
                                            );
                                        },
                                        onClosing: (){
                                            print('弹窗关闭了');
                                        },
                                        animationController: AnimationController(
                                            animationBehavior:AnimationBehavior.preserve,
                                            vsync:TickerProviderStateMixin()
                                        ),
                                    );
                                },
                            );
                        },
                    )
                ],
            )
        );
    }
}