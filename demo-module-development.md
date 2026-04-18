# 示例：模块开发

> 来源：上传 zip 中 `6` 个原始示例文件自动合并。

## 模块开发-01.函数模块-模块代码

```javascript
//写一个函数
let add = function(a,b){
    return a+b
}
//导出函数
add;//不要写成"add()"了这个是调用函数
```

## 模块开发-01.函数模块-调用模块

```javascript
let mFunc = require("example/模块开发/01.函数模块/模块代码.js");

//执行函数
alert("函数模块","结果："+mFunc(1, 2));
```

## 模块开发-02.对象模块-模块代码

```javascript
//写一个对象
let obj = {
    name:"张三",
    age:18,
    sex:"男"
}

//导出对象
obj;
```

## 模块开发-02.对象模块-调用模块

```javascript
let mObj = require("example/模块开发/02.对象模块/模块代码.js");

//使用对象
alert("对象模块",mObj.name+"\n"+mObj.age+"\n"+mObj.sex);
```

## 模块开发-03.类模块-模块代码

```javascript
function MyClass(){
    this.name = "张三";
    this.age = 18;

    this.show = function(){
        alert("我的信息",this.name+"\n"+this.age);
    }
}

MyClass;//导出类
```

## 模块开发-03.类模块-调用模块

```javascript
let mClass = require("example/模块开发/03.类模块/模块代码.js");

//使用这个类:创建对象
let m = new mClass();
//调用类的show方法
m.show();
```
