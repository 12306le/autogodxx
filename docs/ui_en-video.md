# 视频

- 更新时间:2026-01-30 19:33:13

> 视频-video




### onComplete(callback)

> 视频播放完成回调
> 
> 回调参数含义：mp {MediaPlayer} 视频播放对象

- 参数 : callback {(mp)=>{}} 回调


### onPrepare(callback)

> 视频播放准备好回调
> 
> 回调参数含义：mp {MediaPlayer} 视频播放对象

- 参数 : callback {(mp)=>{}} 回调


### onError(callback)

> 设置视频播放错误的监听器
> 
> 回调参数含义：mp {MediaPlayer} 视频播放对象，what {int} 事件类型，extra {int} 额外信息

- 参数 : callback {(mp, what, extra)=>{return false;}} 回调


### onInfo(callback)

> 设置视频播放信息的监听器（如缓冲开始 / 结束）
> 
> 回调参数含义：mp {MediaPlayer} 视频播放对象，what {int} 事件类型，extra {int} 额外信息

- 参数 : callback {(mp, what, extra)=>{return false;}} 回调


### path(path)

> 设置视频的路径

- 参数 : path {string} 视频的路径


### uri(uri)

> 设置视频的URI

- 参数 : uri {string} 视频的 URI 可以是本地文件或网络视频地址


### start()

> 开始播放


### pause()

> 暂停播放


### stop()

> 停止并释放资源


### resume()

> 恢复之前暂停的视频播放


### suspend()

> 暂停并释放资源


### keepScreen(keep)

> 保持屏幕常亮

- 参数 : keep {boolean} 是否保持屏幕常亮


### seekTo(ms)

> 跳转到指定的时间点

- 参数 : ms {int} 毫秒


### isPlaying()

> 是否正在播放

- 返回 : {boolean} 是否正在播放


### getDur()

> 获取视频的总时长

- 返回 : {int} 视频的总时长（毫秒），返回 -1 表示时长未知


### getCur()

> 获取当前播放位置（毫秒）

- 返回 : {int} 当前播放位置（毫秒）


### canPause()

> 判断视频是否可以暂停

- 返回 : {boolean} 是否可以暂停


### canSeekBackward()

> 判断视频是否可以向后快退

- 返回 : {boolean} 是否可以向后快退


### canSeekForward()

> 判断视频是否可以向前快进

- 返回 : {boolean} 是否可以向前快进


### getBufferPercentage()

> 获取视频缓冲的百分比

- 返回 : {int} 视频缓冲的百分比


