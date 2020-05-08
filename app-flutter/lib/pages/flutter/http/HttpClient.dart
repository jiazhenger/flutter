import 'package:flutter/material.dart';
import 'dart:io';
import 'dart:convert';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class HttpHttpClient extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    HttpHttpClient({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<HttpHttpClient> {

    _get() async{
        var responseBody;
        var httpClient = new HttpClient();

//        Uri uri = Uri.parse("http://t.weather.sojson.com/api/weather/city/101030100");
        Uri uri = Uri(scheme:'http',host:'t.weather.sojson.com/api/weather/city/101030100',queryParameters:{'a':0,'b':1});

        var httpClientRequest = await httpClient.getUrl(uri);
        var httpClientResponse = await httpClientRequest.close();
        httpClient.close();

        if (httpClientResponse.statusCode == 200) {
            responseBody = await httpClientResponse.transform(utf8.decoder).join();
            responseBody = json.decode(responseBody);
            return responseBody;
        }else{
            print('error');
        }
    }

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
                        child: Text("发起 http 请求"),
                        onPressed: (){
                            _get();
                        }
                    ),
                ],
            )
        );
    }
}