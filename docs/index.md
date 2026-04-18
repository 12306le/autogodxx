---
pageType: home

hero:
  name: AIGame
  text: 强大、安全、简洁
  tagline: 2025年最新一代安卓自动化脚本开发平台
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/index
    - theme: alt
      text: 资源下载
      link: /res/
    - theme: alt
      text: 开发文档
      link: /api_en/act
  image:
    src: /ag_logo.svg
    alt: AIGame
  theme: dark
features:
  - title: OCR文字识别
    details: 支持PaddleOCR、GoogleMLKit、PPOcrV5识别框架。
    icon: 👁️
    link: /api_en/ocr
  - title: Yolo目标检测
    details: 支持YoloV5、V6、V7、V8、V9、V10、V11、V12、V13以及YoloX等框架
    icon: 🧩
    link: /api_en/yolo
  - title: 拓展性强
    details: 支持加载apk、dex、jar、so文件，以及支持Plugin插件开发。
    icon: 🛡️
    link: /api_en/ext
  - title: 兼容性强
    details: 支持安卓5+到安卓16的安卓系统、支持雷电模拟器、云手机等平台。
    icon: 📱
  - title: 防HOOK
    details: 打包时源码转为不可逆混淆码，不遵循任何语法规则，因此APK中没有源码，使用VMP混淆引擎执行混淆码，完美避免所有HOOK方案
    icon: 🛡️
  - title: 防抓包
    details: 传输协议高仿HTTPS，JSON字段加密混淆，使用高强度非对称加密传输，保证数据安全；并且APK使用高强度混淆源码，无法进行有效的抓包分析
    icon: 🌐
  - title: 防离线破解
    details: 打包后的APK会进行本地与云端双端签名校验，不通过校验则无法使用脚本引擎，部分脚本引擎存于云端，避免离线破解
    icon: 🔒
  - title: 执行效率高
    details: 打包后的APK脚本引擎直接执行混淆码，如同开发阶段直接执行源码一样，效率旗鼓相当
    icon: ⚡
---
