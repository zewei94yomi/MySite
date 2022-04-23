create database if not exists `blog`;
use `blog`;

-- 博客分类表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `blog_type`;
create table `blog_type`(
 `type_id` int NOT NULL AUTO_INCREMENT,
 `type_name` varchar(64) DEFAULT NULL,
 PRIMARY KEY (`type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 博客标签表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `blog_tag`;
create table `blog_tag`(
 `tag_id` int NOT NULL AUTO_INCREMENT,
 `tag_name` varchar(64),
 PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 用户表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `user`;
create table `user`(
 `user_id` int NOT NULL AUTO_INCREMENT,
 `nickname` varchar(64) NOT NULL,
 `username` varchar(64) NOT NULL,
 `password` varchar(255) NOT NULL,
 `email` varchar(64) NOT NULL,
 `github` varchar(64) DEFAULT NULL,
 `linkedin` varchar(64) DEFAULT NULL,
 `csdn` varchar(64) DEFAULT NULL,
 `avatar` varchar(2000) DEFAULT NULL,
 `role` varchar(16) NOT NULL,
 `create_time` datetime NOT NULL,
 `update_time` datetime NOT NULL,
 PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 用户个人页表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `user_info`;
create table `user_info`(
	`user_id` int NOT NULL,
    `aboutMe` text DEFAULT NULL,
    `aboutBlog` text DEFAULT NULL,
    `aboutMePicture` varchar(2000) DEFAULT NULL,
    `adminIndexPicture` varchar(2000) DEFAULT NULL,
	`myTagString` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 博客表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `blog`;
create table `blog`(
 `blog_id` int NOT NULL AUTO_INCREMENT,
 `title` varchar(64) NOT NULL,
 `content` mediumtext NOT NULL,
 `first_picture` varchar(2000) DEFAULT NULL,
 `description` text NOT NULL COMMENT '前台博客预览',
 `flag` varchar(64) NOT NULL COMMENT '原创/翻译/转载',
 `views` int NOT NULL,
 `likes` int NOT NULL,
 `appreciation` int NOT NULL,
 `shareStatement` int NOT NULL,
 `commentable` int NOT NULL,
 `published` int NOT NULL,
 `recommend` int NOT NULL,
 `create_time` datetime NOT NULL,
 `update_time` datetime NOT NULL,
 `type_id` int DEFAULT NULL,
 `user_id` int NOT NULL,
 PRIMARY KEY (`blog_id`),
 CONSTRAINT FOREIGN KEY (`type_id`) REFERENCES `blog_type`(`type_id`) ON DELETE SET NULL,
 FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 评论表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `comment`;
create table `comment`(
 `comment_id` int NOT NULL AUTO_INCREMENT,
 `nickname` varchar(64) NOT NULL,
 `email` varchar(64) DEFAULT NULL,
 `content` text NOT NULL,
 `avatar` varchar(2000) DEFAULT NULL,
 `create_time` datetime NOT NULL,
 `fromAdmin` boolean DEFAULT FALSE,
 `blog_id` int NOT NULL, 
 `parent_id` int DEFAULT NULL,
 `root_parent_id` int DEFAULT NULL,
 PRIMARY KEY (`comment_id`),
 CONSTRAINT FOREIGN KEY (`blog_id`) REFERENCES `blog`(`blog_id`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT FOREIGN KEY (`parent_id`) REFERENCES `comment`(`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT FOREIGN KEY (`root_parent_id`) REFERENCES `comment`(`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 博客-标签表
SET FOREIGN_KEY_CHECKS = 0; 
DROP TABLE IF EXISTS `blog2tag`;
create table `blog2tag` (
 `blog_id` int NOT NULL,
 `tag_id` int NOT NULL,
 primary key(`blog_id`, `tag_id`),
 CONSTRAINT foreign key(`blog_id`) references `blog`(`blog_id`) ON DELETE CASCADE ON UPDATE CASCADE,
 CONSTRAINT foreign key(`tag_id`) references `blog_tag`(`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 添加user数据
insert into `user`
(`nickname`, `username`, `password`, `email`, `github`, `linkedin`, `csdn`, `avatar`, `role`, `create_time`, `update_time`)
value
('Admin', 'root', '5a8d7260c24ea80c12a455d9ab90777b', 'admin@gmail.com', 'github.com', 'www.linkedin.com', 'www.csdn.com', 'https://unsplash.it/100/100?image=1005', '爸爸', '2021-07-04 13:45:46.693', '2021-07-04 13:45:46.693');


-- 添加user_info数据
insert into `user_info`
(`user_id`, `aboutMe`, `aboutBlog`, `aboutMePicture`, `adminIndexPicture`, `myTagString`)
value
(1, '我也就是，是不一样的烟火', '我xjb做的', 'https://i.loli.net/2021/11/15/Pc8ZjtD2oLiIQhV.jpg', 'https://i.loli.net/2021/11/15/Pc8ZjtD2oLiIQhV.jpg', '大学生/Java工程师');


-- 添加type测试数据
insert into `blog_type`
(type_name)
values
('抖音'),
('编程'),
('健身'),
('旅游'),
('音乐');
 
-- 添加tag测试数据
insert into `blog_tag`
(tag_name)
value
('Java'),
('C'),
('C++'),
('Javascript'),
('Linux');

-- 添加blog测试数据
insert into `blog`
(title, content, first_picture, description, flag, views, likes, appreciation, shareStatement, commentable, published, recommend, create_time, update_time, type_id, user_id)
values
('养猪', '如何养猪是一个好问题', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述1', '原创', 102, 999, 1, 1, 1, 1, 1, '2021-07-01 13:45:46.693', '2021-07-01 13:45:46.693', 1, 1),
('吃鸡', '如何吃大大叔大婶的说', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述2', '转载', 232, 99, 0, 1, 1, 0, 1, '2021-07-02 13:45:46.693', '2021-07-02 13:45:46.693', 3, 1),
('健身', '鸡是一个好问题深爱的', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述3', '翻译', 113, 123, 0, 1, 1, 1, 0, '2021-07-03 13:45:46.693', '2021-07-09 13:45:46.693', 2, 1),
('吃饭', '好问题阿是大叔大婶说', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述4', '原创', 341, 55, 0, 1, 1, 0, 1, '2021-07-04 13:45:46.693', '2021-07-05 13:45:46.693', 2, 1),
('养猪', '如何养猪是一个好问题', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述1', '原创', 102, 999, 1, 1, 1, 1, 1, '2021-07-01 13:45:46.693', '2021-07-01 13:45:46.693', 1, 1),
('吃鸡', '如何吃大大叔大婶的说', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述2', '转载', 232, 99, 0, 1, 1, 0, 1, '2021-07-02 13:45:46.693', '2021-07-02 13:45:46.693', 3, 1),
('健身', '鸡是一个好问题深爱的', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述3', '翻译', 113, 123, 0, 1, 1, 1, 0, '2021-07-03 13:45:46.693', '2021-07-09 13:45:46.693', 3, 1),
('养猪', '如何养猪是一个好问题', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述1', '原创', 102, 999, 1, 1, 1, 1, 1, '2021-07-01 13:45:46.693', '2021-07-01 13:45:46.693', 2, 1),
('吃鸡', '如何吃大大叔大婶的说', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述2', '转载', 232, 99, 0, 1, 1, 0, 1, '2021-07-02 13:45:46.693', '2021-07-02 13:45:46.693', 2, 1),
('健身', '鸡是一个好问题深爱的', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述3', '翻译', 113, 123, 0, 1, 1, 1, 0, '2021-07-03 13:45:46.693', '2021-07-09 13:45:46.693', 2, 1),
('睡觉', '哈哈哈哈哈哈哈请求其', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述5', '转载', 446, 33, 0, 1, 1, 0, 0, '2021-07-05 13:45:46.693', '2021-07-05 13:45:46.693', 4, 1),
('吃鸡', '嘻嘻呜呜呜呜为此而去', 'https://unsplash.it/800/450?image=1005', '这是这篇博客的描述6', '翻译', 126, 123, 0, 1, 1, 1, 0, '2021-07-06 13:45:46.693', '2021-07-07 13:45:46.693', 1, 1);

-- 添加blog-tag测试数据
insert into `blog2tag`
(blog_id, tag_id)
values
(1, 3),
(2, 1),
(1, 1),
(2, 2),
(4, 3),
(4, 1),
(4, 2);

-- 添加comment测试数据
insert into `comment`
(nickname, email, content, avatar, create_time, fromAdmin, blog_id, parent_id, root_parent_id)
values
('小明', '1wq23@qq.com', '请请问问怎么养猪', 'https://unsplash.it/100/100?image=1005', '2021-07-04 13:45:46.693', false, 1, null, null),
('章三', '123ada@qq.com', '啊啊请问怎么说的啊养猪', 'https://unsplash.it/100/100?image=1005', '2021-07-04 13:45:46.693', false, 1, 1, 1),
('张三', '121233@qq.com', '完全请问怎啊啥的么养猪', 'https://unsplash.it/100/100?image=1005', '2021-07-04 13:45:46.693', false,1, 2, 1),
('李四', '12adsa3@qq.com', '呃呃请问阿斯顿怎么养猪', 'https://unsplash.it/100/100?image=1005', '2021-07-04 13:45:46.693', false, 2, null, null);

