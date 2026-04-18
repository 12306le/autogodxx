# $fc - 文件选择器

- 更新时间:2026-01-30 19:32:52

> 文件选择器




### show(callback)

> 显示文件选择器
> 
> 默认是单选文件

- 参数 : callback {(files)=>{}}回调
- 版本 : 1.0.0


```javascript
$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
});
```


### show(callback, options)

> 显示文件选择器

- 参数 : callback {(files)=>{}}回调
- 参数 : options {object} 配置参数
- 版本 : 1.0.0


```javascript
//多选：文件和目录
$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "m",
    type: "a"
});
//配置参数如下:
let options = {
    mode: "m", //多选模式("single","multi")写一个字母就行了
    type: "a", //文件和目录("file","mkdir","all")写一个字母就行了
    root: "/sdcard", //[可选]最高根路径
    path: "/sdcard/Pictures", //[可选]默认路径
    ext: "jpg,png" //[可选]后缀过滤
}
```


