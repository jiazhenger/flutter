import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FloatingActionButtonPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FloatingActionButtonPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FloatingActionButtonPage> {
    FocusNode focusNode1 = new FocusNode();
    @override
    void initState() {
        focusNode1.addListener((){
            print("焦点1是否被选中："+focusNode1.hasFocus.toString());
        });
    }
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    FloatingActionButton(
                        child: Text('禁用'),
                        onPressed: null,
                    ),
                    FloatingActionButton(
                        child: Text('激活'),
                        onPressed: (){},
                        hoverElevation: 2.0,
                        hoverColor: Colors.purple,
                        focusColor: Colors.black,
                        disabledElevation: 3.0,

                        materialTapTargetSize:MaterialTapTargetSize.shrinkWrap,

                        focusNode: FocusNode(debugLabel: '1213',skipTraversal:true,onKey: (node,key){
                            print(1231);
                            return true;
                        }),
                    )
                ],
            )
        );
    }
}