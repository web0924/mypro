SET NAMES UTF8;
DROP DATABASE IF EXISTS myvue;
CREATE DATABASE myvue CHARSET=UTF8;
USE myvue;
/*健身器材商品图片*/
CREATE TABLE product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              #商品列表编号
  img VARCHAR(128)            #图片路径
);
 /* 用户信息*/
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) ,
  upwd VARCHAR(32)
);
-- 用户意见收集
CREATE TABLE user_message(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  email VARCHAR(32),
  phone INT(16),
  content VARCHAR(16)
);
/* -- 数据导入*/
INSERT INTO product_pic VALUES
(NULL, 1, 'hot_main1.jpg'),
(NULL, 1, 'hot_main2.jpg'),
(NULL, 1, 'hot_main3.jpg'),
(NULL, 1, 'hot_main4.jpg'),
(NULL, 2, 'hot_main5.jpg'),
(NULL, 2, 'hot_main6.jpg'),
(NULL, 2, 'hot_main7.jpg'),
(NULL, 2, 'hot_main8.jpg');

INSERT INTO user VALUES
(NULL, 'dingding', '123456'),
(NULL, 'dangdang', '123456');

-- 意见收集
INSERT INTO user_message VALUES
(NULL, '王小花', '123@sin.com',13783572357,"非常好");