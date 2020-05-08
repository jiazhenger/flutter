import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
import 'package:flutter_web/widget/list-one.dart';
// ======================================================================================================== Widget 控件
class GetTheme extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    final String name;
    Map<String, int> map;

    GetTheme({ Key key, this.title, this.name, this.map }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<GetTheme> {
    Widget cWidget (Color color,String text){
        return Container(
            padding: const EdgeInsets.symmetric(vertical: 5.0),
            child: Text(text,textAlign: TextAlign.center),
            decoration:BoxDecoration(
                color:color,
                border: Border.all(width: 1.0, color: Colors.white, style: BorderStyle.solid)
            )
        );
    }
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    ListOneWidget(title:'primaryColor',child:cWidget(Theme.of(context).primaryColor,'App主要部分的背景色（ToolBar,Tabbar等）')),
                    ListOneWidget(title:'highlightColor',child:cWidget(Theme.of(context).highlightColor,'用于类似墨水喷溅动画或指示菜单被选中的高亮颜色')),
                    ListOneWidget(title:'hintColor',child:cWidget(Theme.of(context).hintColor,'用于提示文本或占位符文本的颜色，例如在TextField中')),
                    ListOneWidget(title:'textSelectionColor',child:cWidget(Theme.of(context).textSelectionColor,'文字选择颜色')),
                    ListOneWidget(title:'backgroundColor',child:cWidget(Theme.of(context).backgroundColor,'背景颜色')),
                    ListOneWidget(title:'accentColor',child:cWidget(Theme.of(context).accentColor,'前景色（文本、按钮等）')),
                    ListOneWidget(title:'canvasColor',child:cWidget(Theme.of(context).canvasColor,'画布颜色')),
                    ListOneWidget(title:'cardColor',child:cWidget(Theme.of(context).cardColor,'卡片颜色')),
                    ListOneWidget(title:'buttonColor',child:cWidget(Theme.of(context).buttonColor,'按钮背景颜色')),
                    ListOneWidget(title:'dialogBackgroundColor',child:cWidget(Theme.of(context).dialogBackgroundColor,'对话框背景颜色')),
                    ListOneWidget(title:'disabledColor',child:cWidget(Theme.of(context).disabledColor,'禁用颜色，用于Widget无效的颜色，无论任何状态。例如禁用复选框')),
                    ListOneWidget(title:'dividerColor',child:cWidget(Theme.of(context).dividerColor,'分频器颜色')),
                    ListOneWidget(title:'errorColor',child:cWidget(Theme.of(context).errorColor,'错误颜色')),
                    ListOneWidget(title:'indicatorColor',child:cWidget(Theme.of(context).indicatorColor,'指示灯颜色')),
                    ListOneWidget(title:'scaffoldBackgroundColor',child:cWidget(Theme.of(context).scaffoldBackgroundColor,'脚手架背景颜色')),
                    ListOneWidget(title:'secondaryHeaderColor',child:cWidget(Theme.of(context).secondaryHeaderColor,'次标头颜色')),
                    ListOneWidget(title:'selectedRowColor',child:cWidget(Theme.of(context).selectedRowColor,'选择行颜色')),
                    ListOneWidget(title:'splashColor',child:cWidget(Theme.of(context).splashColor,'飞溅颜色, 墨水喷溅的颜色')),
                    ListOneWidget(title:'unselectedWidgetColor',child:cWidget(Theme.of(context).unselectedWidgetColor,'未选择的控件颜色,用于Widget处于非活动（但已启用）状态的颜色。 例如，未选中的复选框。 通常与accentColor形成对比')),
                    ListOneWidget(title:'textSelectionHandleColor',child:cWidget(Theme.of(context).textSelectionHandleColor,'用于调整当前文本的哪个部分的句柄颜色')),
                    ListOneWidget(title:'toggleableActiveColor',child:cWidget(Theme.of(context).toggleableActiveColor,'用于突出显示切换Widget（如Switch，Radio和Checkbox）的活动状态的颜色')),
                    ListOneWidget(title:'primaryColorDark',child:cWidget(Theme.of(context).primaryColorDark,'primaryColor的较暗版本')),
                    ListOneWidget(title:'primaryColorLight',child:cWidget(Theme.of(context).primaryColorLight,'primaryColor的较亮版本')),
                    ListOneWidget(title:'bottomAppBarColor',child:cWidget(Theme.of(context).bottomAppBarColor,'BottomAppBar的默认颜色'))
                ],
            )
        );
    }
}