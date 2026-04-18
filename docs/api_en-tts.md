# $tts - 语音阅读

- 更新时间:2026-01-30 19:32:57

> 语音阅读




### read(text, options)

> 播放文本(配置)
> 
> 对于没有TTS引擎的设备而言，此函数执行后无任何效果

- 参数 : text {string} 文本
- 参数 : options {TtsOptions} 配置
- 版本 : 1.0.0


```javascript
let options = {
    rate: 1,//速度
    pitch: 1,//音调
    volume: 1,//音量
    language: "zh",//语言
    streamType: "system"//播放流('system'播放声音最大)
}
$tts.read("你好呀，早安~",options);
```


### read(text)

> 播放文本
> 
> 对于没有TTS引擎的设备而言，此函数执行后无任何效果

- 参数 : text {string} 文本
- 版本 : 1.0.0


```javascript
$tts.read("你好呀，早安~");
```


