# $media - 媒体播放

- 更新时间:2026-01-30 19:32:54

> 媒体播放




### play(path)

> 播放音频
> 
> 直接播放音频，播放结束之后我将自动回收音频资源。
> 
> 注意:如果音频资源加载失败会返回null，资源文件已经处于播放状态也会返回null(不过一般不会出现这个情况，因为每次调用play函数的时候都会重新创建新的媒体播放器，因此播放状态也是未播放的)。

- 参数 : path {string} 音频路径(支持相对路径) 
- 返回 : {MediaPlayer} 媒体播放器
- 版本 : 1.5.2


```javascript
$media.play("res/mTip.mp3");
```


### create()

> 创建媒体播放器
> 
> 当你拿到MediaPlayer对象之后，它的所有方法请参考{android.media.MediaPlayer}类

- 返回 : {MediaPlayer} 媒体播放器
- 版本 : 1.5.2


```javascript
let mediaPlayer = $media.create();
//常用的{MediaPlayer}方法有:其他方法请参考{android.media.MediaPlayer}类
//mediaPlayer.isPlaying();//是否处于播放状态
//mediaPlayer.isLooping();//是否是循环播放
//mediaPlayer.start();//开始播放
//mediaPlayer.stop();//停止播放
//mediaPlayer.getDuration();//总时长
//mediaPlayer.getCurrentPosition();//当前进度
//mediaPlayer.seekTo(long,int);//跳转到进度
//mediaPlayer.seekTo(int);//跳转到进度
//mediaPlayer.prepare();//准备资源
//mediaPlayer.reset();//重置
//mediaPlayer.release();//释放资源
```


### create(path)

> 创建媒体播放器
> 
> 创建媒体播放器，并且加载音频路径，如果加载成功则返回媒体播放器，如果加载失败则返回null。

- 参数 : path {string} 音频路径(支持相对路径) 
- 返回 : {MediaPlayer} 媒体播放器
- 版本 : 1.5.2


### setPath(mediaPlayer, path)

> 为媒体播放器设置音频路径
> 
> 如果音频资源没有找到，则会返回false，如果成功设置，则会准备音频，并且返回true。
> 
> 如果此函数被重复调用，可能会抛出异常。

- 参数 : mediaPlayer {MediaPlayer} 媒体播放器 
- 参数 : path {string} 音频路径 
- 返回 : {boolean} 是否设置成功
- 版本 : 1.5.2


