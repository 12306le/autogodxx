# $html - 网页操作

- 更新时间:2026-01-30 19:32:53

> 网页操作




### escape(html)

> 转义HTML字符
> 
> 此函数会遍历么一个字符，将特殊字符进行转义。
> 

- 参数 : html 被转义的文本
- 返回 : 转义后的文本


```javascript
let html = "<div>123</div>";
let escapeHtml = $html.escape(html);
```


### unescape(text)

> 还原被转义的HTML特殊字符

- 参数 : text {string} HTML字符串
- 返回 : {string} 转换后的字符串


### cleanHtmlTag(text)

> 清除所有HTML标签

- 参数 : text {string} 文本
- 返回 : {string} 清除标签后的文本


### removeHtmlTag(text, tagNames)

> 删除HTML标签(包括内容)

- 参数 : text {string} 文本
- 参数 : tagNames {string...} 要清除的标签
- 返回 : 去除标签后的文本


### unwrapHtmlTag(text, tagNames)

> 清除指定HTML标签(不包括内容)

- 参数 : text {string} 文本
- 参数 : tagNames {string...} 要清除的标签
- 返回 : {string} 去除标签后的文本


### removeHtmlTag(text, withTagContent, tagNames)

> 清除指定HTML标签

- 参数 : text {string} 文本
- 参数 : withTagContent {boolean} 是否去掉被包含在标签中的内容
- 参数 : tagNames {string...}  要清除的标签
- 返回 : {string} 去除标签后的文本


### removeHtmlAttr(html, attrs)

> 去除HTML标签中的所有属性

- 参数 : html {string} 文本
- 参数 : attrs {string...} 属性名
- 返回 : {string} 处理后的文本


### removeAllHtmlAttr(html, tagNames)

> 去除指定标签的所有属性

- 参数 : html {string} 内容
- 参数 : tagNames {string...} 指定标签
- 返回 : {string} 处理后的文本


### filter(html)

> 过滤HTML文本，防止XSS攻击

- 参数 : html {string} HTML内容
- 返回 : {string} 过滤后的内容


### getWeiYunNote(shortLink)

> 处理腾讯微笔记
> 
> 我们可以在[腾讯微云]->[我的]->[笔记]中创建一个纯文本笔记(切记不要有特殊字符，例如粗体或者改变文本颜色等等特殊处理都不要有)，之后我们点击分享，就可以看到链接最后面的一个字段，我称之为短链接，把短链接放入到这个函数中来，我将解析你的微云笔记，最后把处理好的文本字符串返回给你。
> 
> 这样以来，你可以把腾讯微云当作你的免费云数据库来使用，写一个微云笔记，把自己的数据(例如json字符)存入到笔记中，需要使用的时候使用这个函数拉取后解析成json对象(JSON.parse(str))，就可以使用数据了。

- 参数 : shortLink {string} 短链接 
- 返回 : {string} 处理好的字符串
- 版本 : 1.5.0


```javascript
// 微云笔记链接：https://share.weiyun.com/bnaMAKsa
// 短链接：bnaMAKsa
let noteContent = $html.getWeiYunNote("bnaMAKsa");
// 解析json字符串
let jsonObj = JSON.parse(noteContent);
```


