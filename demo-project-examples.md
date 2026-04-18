# 示例：拓展示例

> 来源：上传 zip 中 `5` 个原始示例文件自动合并。

## 拓展示例-01.授权无障碍-根据包名判断是否有无障碍

```javascript
//AIGame官方示例

//这个示例很好的展现了脚本与安卓API的交互，你可以实现任何你想实现的功能

//这里就是与java交互的代码：新版本中，直接定义即可：
var Settings = android.provider.Settings;
var TextUtils = android.text.TextUtils;


let hasAccessibilityPermis = function(pkgName) {
    let accessibilityEnabled = 0;
    let packageName = pkgName.toUpperCase();
    let contentResolver = context.getContentResolver();
    try {
        accessibilityEnabled = Settings.Secure.getInt(contentResolver, Settings.Secure.ACCESSIBILITY_ENABLED);
    } catch (err) {
        //系统不支持无障碍服务
        return false;
    }
    let splitter = new TextUtils.SimpleStringSplitter(':');
    if (accessibilityEnabled == 1) {
        let settingValue = Settings.Secure.getString(contentResolver, Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        if (settingValue != null) {
            splitter.setString(settingValue);
            while (splitter.hasNext()) {
                let acServiceName = splitter.next().toUpperCase();
                if (acServiceName.contains(packageName)) {
                    return true;
                }
            }
        }
    }
    return false;
}



//测试一下：应用"org.aigame.pro"是否获取了无障碍权限
//alert("类名",hasAccessibilityPermis("org.aigame.pro"));




//导出这个函数
hasAccessibilityPermis;



//示例结束
```

## 拓展示例-01.授权无障碍-根据包名获取无障碍类名

```javascript
//AIGame官方示例

//这个示例很好的展现了脚本与安卓API的交互，你可以实现任何你想实现的功能

//这里就是与java交互的代码：新版本中，不再使用任何关键字或者方法属性来导入包，而是直接定义即可：
var PackageInfo = android.content.pm.PackageInfo;
var PackageManager = android.content.pm.PackageManager;
var PackageInfo = android.content.pm.ServiceInfo;
var AccessibilityService = android.accessibilityservice.AccessibilityService;
var Intent = android.content.Intent;

// 判断ServiceInfo是否为无障碍服务
let isAccessibilityService = function(serviceInfo) {
    // 方法1：检查服务权限
    if (serviceInfo.permission != null && serviceInfo.permission.equals("android.permission.BIND_ACCESSIBILITY_SERVICE")) {
        return true;
    }
    // 方法2：使用 GET_RESOLVED_FILTER 标志获取 intent filter
    let intent = new Intent(AccessibilityService.SERVICE_INTERFACE);
    let resolveInfoList = context.getPackageManager().queryIntentServices(intent, PackageManager.GET_RESOLVED_FILTER);
    for (let resolveInfo of resolveInfoList) {
        if (resolveInfo.serviceInfo.name.equals(serviceInfo.name) && resolveInfo.serviceInfo.packageName.equals(serviceInfo.packageName)) {
            return true;
        }
    }
    return false;
}


// 获取应用的无障碍服务类名列表
let getAccessibilityServiceClass = function(packageName) {
    // 获取应用服务信息（包含无障碍服务）
    let packageInfo = context.getPackageManager().getPackageInfo(packageName, PackageManager.GET_SERVICES | PackageManager.GET_META_DATA);
    if (packageInfo.services != null) {
        for (let service of packageInfo.services) {
            // 通过权限和 intent-filter 判断是否为无障碍服务
            if (isAccessibilityService(service)) {
                return service.name;
            }
        }
    }
    return null;
}

//测试一下：获取包名为"org.aigame.pro"的无障碍类名
//alert("类名",getAccessibilityServiceClass("org.aigame.pro"));




//导出这个函数
getAccessibilityServiceClass;





//示例结束
```

## 拓展示例-01.授权无障碍-main

```javascript
//AIGame官方示例

//注意：本示例并不完善，只用于参考和学习

let hasAccessibilityPermis = require("example/拓展示例/01.授权无障碍/根据包名判断是否有无障碍.js");
let getAccessibilityServiceClassName = require("example/拓展示例/01.授权无障碍/根据包名获取无障碍类名.js");

//解析界面并且显示
let ui = $ui.layout("example/拓展示例/01.授权无障碍/ui.xml");
ui.show();
ui.id("mAppbar").back(()=> {
    ui.finish();
});
ui.id("mAppbar").menu((title)=> {
    if(title=="帮助"){
        alert("帮助","你需要先获取Shizuku的授权，之后就可以给其他应用授权无障碍服务了");
    }
});

//获取列表控件
let ls = ui.id("mLs");

//刷新列表中的应用信息数据
let flushList = function() {
    //获取应用列表信息
    let allAppList = $app.lsUserApp(); //所有的应用：但是不是所有的应用都需要无障碍
    let newAppList = [];
    for (let info of allAppList) {
        let clsName = getAccessibilityServiceClassName(info.pkgName);
        if (clsName == null || clsName.trim().isEmpty()) {
            //无障碍类名为空说明这个app就不需要获取无障碍权限
            continue;
        }
        newAppList.push(info);
    }
    //刷新列表数据：只显示需要无障碍授权的应用
    ls.flush(newAppList);
}


//绑定视图解析
ls.bindHolder((holder,data,position)=> {
    holder.id("appName").setText(data.appName);
    holder.id("pkgName").setText(data.pkgName);
    holder.id("appIcon").setImg(data.icon.getBitmap());
    //设置图标放在子线程中
//    $thread.run(()=>{
//        let iconImg = $app.getIcon(data.pkgName);
//        if(iconImg!=null){
//            holder.id("appIcon").setImg(iconImg.getBitmap());
//        }
//    });

    let permitStatus = holder.id("permitStatus");
    if (hasAccessibilityPermis(data.pkgName)) {
        permitStatus.setText("已授权");
        permitStatus.setColor("#3574F0");
    } else {
        permitStatus.setText("未授权");
        permitStatus.setColor("#FF0000");
    }
    holder.id("card").click(()=> {
        //点击后开始给当前应用进行授权
        if ($szk.hasPermit()) {
            let clsName = getAccessibilityServiceClassName(data.pkgName);
            if (clsName == null || clsName.trim().isEmpty()) {
                toast("当前应用无需无障碍权限");
            } else {
                $tip.show(data.appName,"点击确定开始为应用授权无障碍权限：\n\n应用:"+data.appName+"\n包名:"+data.pkgName+"\n类名:\n"+clsName,()=> {
                    $szk.exe("settings put secure enabled_accessibility_services "+data.pkgName+"/"+clsName,(info)=> {
                        $log.d(info);
                    },(err)=> {
                        $log.e(err);
                    },(result)=> {
                        holder.id("permitStatus").snack("正在授权...");
                        //如果result为null一般就说明当前命令执行成功，没有任何异常信息产生
                        log(result);
                        if (result == null || result == "null") {
                            log("执行成功");
                        }
                        sleep(3000); //该命令执行后未必马上生效，所以3秒后刷新一下列表
                        holder.id("permitStatus").snack("授权完毕");
                        flushList(); //刷新列表
                    });
                });
            }
        } else {
            alert("无Shizuku授权","请先用Shizuku为本app授权");
        }
    });
});



//界面显示后自动刷新一下列表
flushList();

//下拉刷新控件
ui.id("mFlush").flush(()=> {
    flushList();
});


//结束示例
```

## 拓展示例-02.备份应用-main

```javascript
//AIGame官方示例

//注意：本示例并不完善，只用于参考和学习
//本实例主要用来教学AppInfo的原生交互
//具体在代码的40行左右位置

//解析界面并且显示
let ui = $ui.layout("example/拓展示例/02.备份应用/ui.xml");
ui.show();
ui.id("mAppbar").back(()=> {
    ui.finish();
});
ui.id("mAppbar").menu((title)=> {
    if(title=="帮助"){
        alert("帮助","本示例教学如何使用AppInfo的原生交互来实现备份应用的功能,具体在代码的40行左右位置");
    }
});

//获取列表控件
let ls = ui.id("mLs");

//刷新列表中的应用信息数据
let flushList = function() {
    //获取应用列表信息
    let appList = $app.lsUserApp(); //获取用户应用：而不是系统应用
    ls.flush(appList); //每个元素的对象都是AppInfo类型的，参考文档{AppInfo}
}


//绑定视图解析
ls.bindHolder((holder,data,position)=> {
    holder.id("appName").setText(data.appName);
    holder.id("pkgName").setText(data.pkgName);
    //data本身就是AppInfo对象，参考文档{AppInfo}我们发现它存在icon属性
    //icon属性的类型是Image，参考文档{Image}它可以获取Bitmap对象
    holder.id("appIcon").setImg(data.icon.getBitmap());
    holder.id("card").click((view)=> {
        //点击后开始给当前应用进行备份
        $tip.input("备份路径","/sdcard/Pictures/"+data.appName+".apk",(value)=>{
            //接下来就涉及到原生交互了
            //我们通过AppInfo的info属性拿到：{ApplicationInfo}对象(android.content.pm.ApplicationInfo)
            let applicationInfo = data.info;
            //在安卓中{ApplicationInfo}有属性sourceDir可以获得apk的安装位置
            let apkPath = applicationInfo.sourceDir;
            log("Apk安装位置："+apkPath);
            //我们把这个路径下的apk拷贝到输入的路径下面就行了
            $file.copy(apkPath,value);
            holder.id("card").snack("拷贝完成!");
        });
    });
});



//界面显示后自动刷新一下列表
flushList();

//下拉刷新控件
ui.id("mFlush").flush(()=> {
    flushList();
});


//结束示例
```

## 拓展示例-03.DeepSeek对话-main

```javascript
let ui = $ui.layout("example/拓展示例/03.DeepSeek对话/xml/main.xml");
ui.show(); //显示界面

//[存储]
let storage = $storage.create("org.aigame.demo.deepseek");

//[组件]
let mAppbar = ui.id("mAppbar"); //应用条
let nested = ui.id("nested"); //显示对话内容的
let layout = ui.id("layout"); //显示对话内容的

mAppbar.back(()=> {
    ui.finish();
});

mAppbar.menu((title)=> {
    if (title == "清除") {
        $tip.show("清除对话","确认清空对话内容吗？",()=> {
            //清空所有布局
            layout.removeAll();
        });
    }
    if (title == "设置") {
        $tip.input("Api Key",(value)=> {
            if ($str.isEmpty(value)) {
                toast("不允许输入空值");
                return;
            }
            storage.put("apiKey",value);
        });
    }
});


//(1)创建deepseek对话视图
let createDsView = function(content) {
    let ui = $ui.layout("example/拓展示例/03.DeepSeek对话/xml/DeepSeek.xml");
    ui.id("content").setText(content);
    return {
        ui: ui,
        view: ui.getView()
    };
}

//(2)创建我的对话视图
let createMwView = function(content) {
    let ui = $ui.layout("example/拓展示例/03.DeepSeek对话/xml/Mine.xml");
    ui.id("content").setText(content);
    return ui.getView();
}

//(3)请求调用
let requireContent = function(apiKey,content) {
    let res = $http.post({
        url: "https://api.deepseek.com/chat/completions",
        readTimeout: 60,//deepseek响应有时候会很慢，如果超时了，就设置这个
        head: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+apiKey,//输入ApiKey
        },
        data: {
            model: "deepseek-chat",
            messages: [{
                role: "system",
                content: "你是一个智能生活助手"
            },
                {
                    role: "user",
                    //我的对话内容：
                    content: content
                }],
            stream: false
        }
    });

    //解析json内容
    let data = res.json();

    return data.choices[0].message.content;
}

//(4)滑动NestedScrollView到最底部
let scrollBottom = function() {
    //通过安卓原生类的post函数，可以直接发送一条ui线程事件(确保视图刷新后在ui线程中调用)
    layout.getView().post(()=> {
        let nestedScrollView = nested.getView(); //获取原生对象
        //要滑动到的高度
        let toH = layout.getH();
        //开始滑动
        nestedScrollView.smoothScrollTo(0,toH);
        //调用安卓原生类{NestedScrollView}的smoothScrollTo方法(请参考安卓api)
    });
}


//输入内容
ui.id("input").click((view)=> {
    //判断ApiKey是否是空的
    let apiKey = storage.get("apiKey","");
    if ($str.isEmpty(apiKey)) {
        alert("ApiKey为空","请前往DeepSeek官网申请ApiKey后，点击右上角设置图标，配置ApiKey内容。\n类似于：sk-c4c165374f72bbf90f6326f 这样的字符串");
        return null;
    }
    $tip.input("输入内容",(value)=> {
        if ($str.isEmpty(value)) {
            return null;
        }
        //创建我的对话视图
        layout.addView(createMwView(value));
        //创建deepseek对话视图
        let dsView = createDsView("正在思考...");
        layout.addView(dsView.view);
        //网络请求不允许在ui线程中进行，于是就用线程
        $thread.run(()=> {
            //调用请求
            let answer = requireContent(apiKey,value);
            //设置回答
            dsView.ui.id("content").setText(answer);
            //滑动到底部
            scrollBottom();
        });
    });
});





//..
```
