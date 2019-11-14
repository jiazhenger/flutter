import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FormPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FormPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FormPage> {
    final _formKey = GlobalKey<FormState>();
    String _name = '这是一个默认值';
    String _pass;
    String _user = '这是一个用户';
    String changeText = '';
    DateTime _lastPressedAt; //上次点击时间

    @override
    Widget build(BuildContext context) {

        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: Form(
                key:_formKey,
                autovalidate:true, // 是否自动校验输入内容；当为 true 时，每一个子FormField内容发生变化时都会自动校验合法性，并直接显示错误信息。否则，需要通过调用 FormState.validate() 来手动校验
                // true 开启自动校验, false: FormState.validate() 提交时校验
                onWillPop: () async{      // 防止用户误触返回键退出，拦截返回的事件
                    print('要返回了');
                    // 双击返回
                    // 当用户在1秒内点击两次返回按钮时，则退出，如果间隔超过1秒则不退出，并重新记时
                    if ( _lastPressedAt == null || DateTime.now().difference(_lastPressedAt) > Duration(seconds: 1) ) {
                        //两次点击间隔超过1秒则重新计时
                        _lastPressedAt = DateTime.now();
                        return false;
                    }
                    return true;
                },
                // Form的任意一个子FormField内容发生变化时会触发此回调
                onChanged: () async{
                    print('表单改变了');
                    setState((){ changeText += "表单改变了";});
                },
                child:Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                        TextFormField(
                            validator: (value) { return value.isEmpty ?  '内容不能为空' : null; },
                            initialValue:_name,
                            onSaved: (val) { _name = val; } // 保存值
                        ),
                        TextFormField(
                            validator: (value) { return value.length < 4 ?  '长度必须大于4' : null;},
                            onSaved: (val) { _pass = val; } // 保存值
                        ),
                        TextField(
                            onChanged: (val) { _user = val; } // 保存值
                        ),
                        Padding(
                            padding: const EdgeInsets.symmetric(vertical: 16.0),
                            child: RaisedButton(
                                onPressed: () {
                                    var _form = _formKey.currentState; // 表单句柄
                                    if (_form.validate()) {
                                        _form.save(); // 保存表单值
                                        print(_name);
                                        print(_pass);
                                        print(_user);
                                    }
                                },
                                child: Text('Submit'),
                            ),
                        ),
                        Text('$changeText')
                    ],
                )
            )
        );
    }
}