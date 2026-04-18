# 示例：$permit

> 来源：上传 zip 中 `19` 个原始示例文件自动合并。

## $permit-权限工具-01.写入日历权限

```javascript
//判断是否有写入日历权限
let has = $permit.hasWriteCalendar();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取写入日历权限
        $permit.writeCalendar();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-02.写入联系人权限

```javascript
//判断是否有写入联系人权限
let has = $permit.hasWriteContact();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取写入联系人权限
        $permit.writeContact();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-03.单独判断某个权限

```javascript
//使用安卓原生类中定义的权限字符串
let has = $permit.hasPermit(android.Manifest.permission.GET_ACCOUNTS);

if (has) {
    toast("有权限");
} else {
    toast("无权限");
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-04.单独获取某个权限

```javascript
//使用安卓原生类中定义的权限字符串

$permit.getPermit(android.Manifest.permission.GET_ACCOUNTS);





//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-05.发送短信权限

```javascript
//判断是否有发送短信权限
let has = $permit.hasSendSms();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取发送短信权限
        $permit.sendSms();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-06.外部存储权限

```javascript
//判断是否有外部存储权限
let has = $permit.hasSd();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取外部存储权限
        $permit.sd();
    });
}





//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-07.定位权限

```javascript
//判断是否有定位权限
let has = $permit.hasLoc();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取定位权限
        $permit.loc();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-08.录音权限

```javascript
//判断是否有录音权限
let has = $permit.hasRecord();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取录音权限
        $permit.record();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-09.悬浮窗权限

```javascript
//判断是否有悬浮窗权限
let has = $permit.hasFloaty();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取悬浮窗权限
        $permit.floaty();
    });
}



//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-10.无障碍权限

```javascript
//判断是否有无障碍权限
let has = $permit.hasWza();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取无障碍权限
        $permit.wza();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-11.权限组判断权限

```javascript
// 电话权限组

let permits = [
    "android.permission.READ_PHONE_STATE",
    "android.permission.CALL_PHONE"
];


let has = $permit.hasPermit(permits);

if (has) {
    toast("有权限");
} else {
    toast("无权限");
}






//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-12.权限组获取权限

```javascript
// 电话权限组

let permits = [
    "android.permission.READ_PHONE_STATE",
    "android.permission.CALL_PHONE"
];


$permit.getPermit(permits);






//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-13.相机权限

```javascript
//判断是否有相机权限
let has = $permit.hasCamera();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取相机权限
        $permit.camera();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-14.系统设置权限

```javascript
//判断是否有系统设置权限
let has = $permit.hasSet();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取系统设置权限
        $permit.set();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-15.网络权限

```javascript
//判断是否有网络权限
let has = $permit.hasNet();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取网络权限
        $permit.net();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-16.读取信息

```javascript
//判断是否有读取信息权限
let has = $permit.hasReadSms();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取读取信息权限
        $permit.readSms();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-17.读取日历权限

```javascript
//判断是否有读取日历权限
let has = $permit.hasReadCalendar();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取读取日历权限
        $permit.readCalendar();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-18.读取联系人权限

```javascript
//判断是否有读取联系人权限
let has = $permit.hasReadContact();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取读取联系人权限
        $permit.readContact();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```

## $permit-权限工具-19.通话权限

```javascript
//判断是否有通话权限
let has = $permit.hasCall();

if (has) {
    toast("有权限");
} else {
    toast("无权限");
    $tip.show("获取权限","是否获取权限?",()=> {
        //获取通话权限
        $permit.call();
    });
}




//测试记录:
/*
【1】：模拟器
雷电    安卓9   完美
雷电    安卓7   完美


【2】：真机
OPPO A92S     安卓12     完美






*/
```
