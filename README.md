# daxueshi前端开发记录

## 5月4日
### 项目初始化
创建Git仓库daxueshi
1. 使用vue-cli创建vue项目。基于webpack、安装vue-router、使用ESLint、不进行单元测试、不使用端到端测试。
2. 使通过手指放大缩小操作无效，页面比例始终1：1
3. 引入reset.css，统一不同手机上的初始化样式
4. 引入border.css，一像素边框
5. 安装fastclick，解决移动端300ms点击事件延迟

## 5月8日
### 首页header区域
1. 使用stylus
2. 从iconfont查找图标，引入字体文件
3. 将背景颜色设为变量，存储在variables.styl中
4. 设置styles文件夹位置别名为'styles'，简化路径表达

## 5月10日
### 首页轮播图
创建分支index-swiper，完成后合并分支
1. 使用第三方轮播插件vue-awesome-swiper(v2.6.7)
2. 消除图片加载时抖动
3. 设置图片选中状态
4. 循环输出，支持左滑


## 5月12日
### 首页图标区域
创建分支index-icons，完成后合并分支
1. 初步定为6个图标(公司、学校、专业、论坛、帮助、我的)
2. 调整大小及布局，主页面显示4个图标
3. 实现图标拖动，左右轮播

## 5月13日
### 修改
1. 调整代码布局。实现循环输出,在data中定义数组，在swiper中进行循环
2. 实现自动轮播效果

## 5月15日
### 热门公司信息
创建index-recommend分支
1. 添加热门公司信息，包含名称、介绍、平均薪资
2. 相邻公司之间添加边框
3. 介绍分两行显示。过长时省略，末尾显示省略号

## 5月16日
### 热门学校信息
仿照热门公司信息，完成热门学校信息部分的内容

## 5月19日
### 修改
部分内容改为静态，写在前端
1. 删除图标自动滚动效果
2. 增加轮播图自动滚动效果

## 5月21日
### 侧边栏效果
1. 安装vux
2. 安装vuex
3. 设置侧边栏布局
