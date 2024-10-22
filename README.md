# 科普网站

## 框架

### [Vue](https://v2.cn.vuejs.org/) [Vue-cli](https://cli.vuejs.org/zh/guide/) [Element](https://element.eleme.io/#/zh-CN)

## 后端

- [后端源码链接](https://github.com/chengnans/kepu_Server)

## 目录

- src

  - assets 静态资源
  - components 页面
    - Administrator 后台页面
    - page 各导航栏页面
  - api 封装接口
  - plugins Element ui
  - utils 请求方法
  - views 首页部分区域
    - homePage 主页更多部分的公共组件

#### 安装教程

1.  创建一个名为`news_website`的数据库
2.  导入数据库文件，可视化工具导入或使用命令行导入
3.  部署 jar 包，cmd 进入 jar 包在当前目录执行

    `java -jar school-of-journalism-and-communication-website-0.0.1-SNAPSHOT.jar`

    (注意：关闭 cmd 运行窗口将会终止程序运行)

4.  `npm install`
5.  运行项目

    `npm run serve`

#### 使用说明

    后台配置文件中自行修改数据库用户名和密码
    请求路径改为/login，即http://localhost:8080/#/login，即可进入登录界面，输入用户名和密码即可进入管理员界面

## 预览

![主页](./src/assets/preview/home.jpg)
![概况](./src/assets/preview/info.jpg)
![文件](./src/assets/preview/file.jpg)
![登录](./src/assets/preview/login.jpg)
![后台](./src/assets/preview/backstage.jpg)
![编辑](./src/assets/preview/bianJi.jpg)
![新闻](./src/assets/preview/info2.jpg)
![修改](./src/assets/preview/xiugai.jpg)
![删除](./src/assets/preview/delete.jpg)
![注册](./src/assets/preview/zhuce.jpg)
