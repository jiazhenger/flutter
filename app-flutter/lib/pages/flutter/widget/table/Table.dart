import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class TablePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    TablePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<TablePage> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Container(
                        margin: EdgeInsets.only(bottom: 10.0),
                        child: Table(
                            border: TableBorder.all(color: Colors.red),
                            children: const <TableRow>[
                                TableRow(
                                    children: <Widget>[
                                        // td 列表
                                        TableCell(child: Center(child: Text('标题一'),heightFactor: 2.0)),
                                        TableCell(child: Center(child: Text('标题二'),heightFactor: 2.0)),
                                        TableCell(child: Center(child: Text('标题三'),heightFactor: 2.0)),
                                    ],
                                ),
                                TableRow(
                                    children: <Widget>[
                                        // td 列表
                                        Center(child: Text('内容'),heightFactor: 2.0),
                                        Center(child: Text('内容'),heightFactor: 2.0),
                                        Center(child: Text('内容'),heightFactor: 2.0),
                                    ],
                                )
                            ],
                        ),
                    ),
                    Table(
                        border: TableBorder.symmetric(inside: BorderSide(color:Colors.black),outside: BorderSide(color: Colors.blue)),
                        children: const <TableRow>[
                            TableRow(
                                children: <Widget>[
                                    // td 列表
                                    TableCell(child: Center(child: Text('标题一'),heightFactor: 2.0)),
                                    TableCell(child: Center(child: Text('标题二'),heightFactor: 2.0)),
                                    TableCell(child: Center(child: Text('标题三'),heightFactor: 2.0)),
                                ],
                            ),
                            TableRow(
                                children: <Widget>[
                                    // td 列表
                                    Center(child: Text('内容'),heightFactor: 2.0),
                                    Center(child: Text('内容'),heightFactor: 2.0),
                                    Center(child: Text('内容'),heightFactor: 2.0),
                                ],
                            )
                        ],
                    )
                ],
            )
        );
    }
}