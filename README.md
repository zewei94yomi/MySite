# MySite

个人博客项目，跟着b站资源从0搭建，已经部署：http://www.yomi.host

### 关于项目源码
原本都整理好了准备上传github，但因为个人严重手残失误，误删了源码并且无法恢复，只得将已经部署在服务器上的jar包下载下来放在项目里，好在thymeleaf、js这些静态文件的代码都原封不动在项目里，
而被编译过后的java代码没有了注释，一些写法也被修改，可读性很差，建议查看笔记而非源码；想要运行可以直接下载jar包。

这个项目本来也很水，页面也不美观，很多功能的实现方式也比较原始，但它是我从零写的第一个web项目，所以希望保存下来（可惜就在上传前作最后整理时误删了...）

想了解博客效果可登陆我的网站http://www.yomi.host

想了解技术细节可查看开发日记123，以及TODO

### 博客效果：

![AUfVKn](https://cdn.jsdelivr.net/gh/zewei94yomi/ImageLoader@master/uPic/AUfVKn.png)


### 技术栈：

- 后端：SpringBoot + Thymeleaf模板 + MyBatis（原视频使用的是JPA）

- 数据库：MySQL（Docker）

- 前端UI：Semantic UI



### 评价：

这个项目是在学完SSM和SpringBoot框架后跟着视频搭建的，初衷只是为了熟悉SpringBoot的使用，但是在实际开发过程中花了大量时间在页面和前端UI上，熟悉了thymeleaf的使用，也复习了一下HTML，CSS，JS的知识。页面效果比较普通，和原版没有多少区别，原视频下面评论区中也有很多效果酷炫的并且已经部署的博客网站。笔记是一边开发一边记录的，许多不重要的地方都一笔带过或是略过，具体细节可参考视频与源码。可作为未来想要维护功能、借鉴功能时一个查阅的文档。


整个项目下来，个人觉得有学习借鉴意义的地方就是：

1. “博客-评论”的设计：[博客-评论系统数据库设计及实现](https://blog.csdn.net/weixin_43146572/article/details/118488986?spm=1001.2014.3001.5501)
2. PageHelper插件的使用：[PageHelper的使用以及遇到的坑总结](https://blog.csdn.net/weixin_43146572/article/details/118584253)

