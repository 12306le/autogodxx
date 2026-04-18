# 训练模型-环境搭建

- 更新时间:2026-01-30 19:32:57

> 训练模型-环境搭建
> 
> 这个教程是适合小白的教程，但是你需要具备如下基础：会下载文件、会安装软件、会打字、会点按钮、会执行命令。




## 下载Python

下载python3.12.0 https://www.python.org/downloads/release/python-3120/

注意：不要下载最新版本，我规定下载这个版本当然是有说法的，不然后面安装依赖的时候报错别怪我。打开连接之后网页滑动到最后，找到适合自己电脑的版本下载安装即可，随便你安装到哪都行，但是你要知道自己安装的路径在哪，后面会用到。
这是专门用来执行python代码的。

[点击前往下载](https://www.python.org/downloads/release/python-3120/)

![](../img/395994874847000.png)


## 打开命令窗口执行一堆命令

当我们安装完python之后，需要安装一堆依赖，不过不用紧张，这个教程是给小白看的，你不需要有编程基础，会用电脑就行。

首先按住电脑快捷键Win+R，看到一个窗口输入"cmd"后回车就能打开黑窗口了。

![](../img/396597681211100.png)


当python安装完之后，打卡cmd黑色窗口直接按照寻徐运行下面的命令：(你不需要担心网速问题，这些命令用的都是国内的仓库地址，速度都很快)

注意：一定要只在一个黑色窗口中依次运行，不要为了方便开多个黑窗口执行命令，否则可能会造成pip安装工具冲突，严重点会损坏pip组件。

下面的命令是训练yolo模型需要的依赖
```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ torch torchvision torchaudio
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ ultralytics
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ PyYAML
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ matplotlib
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ polars
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ scipy
```

下面的命令是将pt模型转换为onnx模型需要的依赖
```bash
pip install onnx==1.16.0 -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install onnxruntime==1.22.0 -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install onnxscript==0.5.7.dev20251113 -i https://pypi.tuna.tsinghua.edu.cn/simple/
pip install onnxslim==0.1.74 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

下面的命令是将onnx模型转换为ncnn模型需要的依赖
```bash
pip install pnnx -i https://pypi.tuna.tsinghua.edu.cn/simple
```

我在安装onnxslim的时候遇到路径长度限制，解决方法：电脑下面搜索 power 就能看到 "Windows PowerShell"

以管理员身份打开PowerShell 执行命令：
```bash
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled"
-Value 1 -PropertyType DWORD -Force
```


## 下载PyCharm

下载PyCharm: https://www.jetbrains.com/pycharm/download/?section=windows

下载最新版就行，随便安装在什么位置。这个工具是帮助我们运行python代码的，不过不用担心，我都把代码写好了，你只需要会配置、会点运行按钮即可。

[点击前往下载](https://www.jetbrains.com/pycharm/download/?section=windows)

![](../img/396328945123500.png)


