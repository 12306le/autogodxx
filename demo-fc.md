# 示例：$fc

> 来源：上传 zip 中 `7` 个原始示例文件自动合并。

## $fc-文件选择器-01.默认单选文件

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
});



//..
```

## $fc-文件选择器-02.单选目录

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "s",
    type: "m"
});



//..
```

## $fc-文件选择器-03.单选所有

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "s",
    type: "a"
});



//..
```

## $fc-文件选择器-04.单选文件

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "s",
    type: "f"
});



//..
```

## $fc-文件选择器-05.多选目录

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "m",
    type: "m"
});



//..
```

## $fc-文件选择器-06.多选所有

```javascript
//文件选择器

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



//..
```

## $fc-文件选择器-07.多选文件

```javascript
//文件选择器

$fc.show((files)=> {
    for (let i = 0; i < files.length; i++) {
        log(files[i]);
    }
}, {
    root: "/sdcard",
    path: "/sdcard/Pictures",
    mode: "m",
    type: "f"
});



//..
```
