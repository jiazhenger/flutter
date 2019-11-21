import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ExpansionPanelListPagePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ExpansionPanelListPagePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ExpansionPanelListPagePage> {
    bool _isExpanded = false;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    ExpansionPanelList(
                        children: <ExpansionPanel>[
                            ExpansionPanel(
                                headerBuilder:(BuildContext context, bool isExpanded) {
                                    return ListTile(
                                        title: Text('我是标题'),
                                    );
                                },
                                body: Padding(
                                    padding: EdgeInsets.all(10.0),
                                    child: ListBody(
                                        children: <Widget>[
                                            Container(child: Text('内容')),
                                            Container(child: Text('内容')),
                                            Container(child: Text('内容'))
                                        ],
                                    ),
                                ),
                                isExpanded:_isExpanded,
                            ),
                        ],
                        expansionCallback: (int index,bool isExpanded){
                            print(isExpanded);
                            setState(() {
                                _isExpanded = !isExpanded;
                            });
                        },
                    )
                ],
            )
        );
    }
}