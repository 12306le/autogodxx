# 示例：$tts

> 来源：上传 zip 中 `2` 个原始示例文件自动合并。

## $tts-语音阅读-01.播放文本(配置)

```javascript
// AIGame官方示例


let options = {
    rate: 1,//速度
    pitch: 1,//音调
    volume: 1,//音量
    language: "zh",//语言
    streamType: "system"//播放流('system'播放声音最大)
}


$tts.read("你好呀，早安~",options);




// 示例结束
```

## $tts-语音阅读-02.播放文本

```javascript
// AIGame官方示例


$tts.read("你好呀，早安~");




// 示例结束
```
