# TODO List：

# 完成：

## 0. 博客如何快速部署发布

### 1. 使用插件

[使用IDEA插件Alibaba Cloud Toolkit一键部署JavaWeb项目](https://www.bilibili.com/video/BV1ga4y1474K?from=search&seid=14287346503286530686)



### 2. 其他

参考《开发日记3》的**服务器**章节



## 1. 评论的邮箱显示

使用Semantic UI的popup，中间遇到了坑，参考我的博客[JQuery为动态元素绑定事件](https://blog.csdn.net/weixin_43146572/article/details/119153445?spm=1001.2014.3001.5501)



## 2. 删除评论

管理员有权限删除评论，评论删除时有确认框modal；评论删除将从数据库删除，不保留数据，其子评论一并删除（也可使用MyBatisPlus的逻辑删除，以便未来恢复数据）



## 3. 博客点赞

点赞 ： https://bbs.csdn.net/topics/390995347?page=1

所有用户（都会被视为游客）都根据session来实现“禁止重复点赞”。



## 4. 图像上传

### 分析

1. **图床存储**：直接引用外部的图片链接，不进行本地文件保存，需要显示图片时直接访问url资源
2. **本地保存**：图片存储在本地服务器

当用户在编写博客时，需要在博文中插入图片，或是设置博文的首图，此时一些网络上已有的图片可以通过直接拷贝图片"copy image"，然后粘贴到markdown编辑器中，这样在复制博文转发到其他平台时依然能够访问到。各个平台都有自己的图片存储方法，在不使用图床的情况下，同一篇文章发布到不同的平台需要单独上传图片一次。这个真的无法接受，太麻烦。

此外，提供本地图片上传功能也是一个用户友好的设计，上传的图片不会存储在外部图床，而是本地服务器。此功能仅限于数量少，图片小的业务，如用户头像、主页背景图等。可通过一个**表单**下面的``<input type="file">``来实现上传。



### 图床

> 图床就是一个图片服务器，用来存储图片，以URL的形式来供其他平台获取图片。可以自己搭建，也可以使用别人搭建好后提供的服务。自己搭建肯定花钱，别人搭建给你提供服务，有的收费，有的一定范围内不收费，有的完全免费。



解决方案

- 这里分享一篇关于markdown图片上传和图床的博客，非常全面：[markdown图床](https://www.jianshu.com/p/ea1eb11db63f)

- 此外分享一些好用的、免费的图床网站：[分享8个高速稳定的图床网站](https://www.jianshu.com/p/c35091dcba84)

- 要实现从剪切板里直接复制粘贴图片实现图片上传，这里有一个思路：

> 简单的做法是：
>
> 监听输入区域的paste事件，获取剪贴板上的图片文件，调用七牛云的api上传到七牛并获得地址，然后向页面写入<img src="xxxx">
>
> 关于如何实现：（还没测试验证）
>
> 1. [editor.md实现拖拽剪切复制粘贴上传图片,文件插件](https://blog.csdn.net/weixin_37335761/article/details/102695967)
> 2. [js图片粘贴上传markdown文本编辑](https://blog.csdn.net/qq_43923045/article/details/113828461)
> 3. [markdown，实现粘贴图片上传](https://blog.csdn.net/jiangdaquan/article/details/113643293)

- 另外在[markdown图床](https://www.jianshu.com/p/ea1eb11db63f)这篇里提供了一个支持Mac系统的免费插件，非常好用，可以自定义图床服务器（默认使用免费的SMMS，可配置Github/Gitee等仓库）：[uPic](https://blog.svend.cc/upic/)



2022-04-23更新：

前一个图床崩了，因为人在国外，所以访问github没有压力，最近半年一直在使用github作为图床。此外Imgur这个图床网站似乎也可以，但是有每周上传图片数量的限制，不友好。

<img src="https://cdn.jsdelivr.net/gh/zewei94yomi/ImageLoader@master/uPic/kVdPbO.png" alt="kVdPbO" style="zoom:50%;" />



### 本地存储

暂不实现

## 5. 快速创建“分类”“标签”

在博客发布页面，允许用户快速创建“分类”“标签”，而无需退回到分类和标签创建页面操作。



# 未完成：

## 1. 草稿文章（优先级高）

a. 正在编辑的文章自动保存为草稿，避免因网络连接等原因导致文章丢失

b. 草稿博客允许被作者重新编辑发布

c. 草稿博客不支持游客访问（直接通过url访问应当被拦截）



## 2. 内容修改：“分类”改为“专栏”（优先级低）

“分类”和“标签”两个词在中文的意思相近，把“分类”改为“专栏”更贴切。



## 3. 错误页面的定制（优先级低）

仍有bug：后端出错和前端页面渲染错误，使用的错误页面不同。

想解决的问题：前端和后端出错时，导航栏的区别显示；或者使用统一页面

思路：后端在渲染``error.html``页面时本身发生了错误，所以跳到了``500.html``



## 4. 后台监控 每日浏览量/评论/喜欢（优先级低）



## 5. 后端没有错误操作的处理（优先级低）

包括DAO、Service层



## 6. 私信系统（优先级低）



## 7. 后台通知（优先级低）

当用户收到私信、点赞、评论时，应当通知用户，可通过邮件、后台消息的方式通知



## 8. 国际化

<img src="https://cdn.jsdelivr.net/gh/zewei94yomi/ImageLoader@master/uPic/nA96Gj.png" alt="nA96Gj" style="zoom:50%;" />

<img src="https://cdn.jsdelivr.net/gh/zewei94yomi/ImageLoader@master/uPic/f4loeY.png" alt="f4loeY" style="zoom: 33%;" />







# 新需求：

## 1. 博客标题字数限制

之前考虑到显示问题，对标题字数进行了限制，好像是25个字符。但在实际使用中发现，中文标题通常不会取到这么长，反而英文标题被大大限制住了，视觉上很短的一个英文标题，其实包含了几十个英文字母（字符），使用起来非常局限。建议把**限制长度翻倍**。



## 2. Markdown样式

太丑了



## 3. 评论/用户名/邮箱长度限制

前端+后段对传入的数据长度都要限制

更新：测试了一下，好像用户名过长，评论功能自动失效



## 4. [![Disqus](https://c.disquscdn.com/next/current/marketing/assets/img/brand/disqus-logo-blue.svg)](https://disqus.com/)

一个评论插件，例子：

https://bambielli.com/posts/2018-09-30-denver-startup-week-ambassadors/



## 5. Bug

### 搜索页面（分页）

搜索关键词后，进行分页跳转报错

![3n4tXi](https://cdn.jsdelivr.net/gh/zewei94yomi/ImageLoader@master/uPic/3n4tXi.png)
