---
layout: post
title: "Jekyll + GitHub Pages 搭建个人博客完整指南"
date: 2024-01-20 14:30:00 +0800
categories: [技术, 教程]
tags: [jekyll, github-pages, 博客搭建, 教程]
author: 张志超
---

在这个数字化时代，拥有一个个人博客是展示自己技术能力和分享知识的绝佳方式。今天我将详细介绍如何使用Jekyll和GitHub Pages搭建一个完全免费的个人博客。

## 为什么选择Jekyll + GitHub Pages？

### Jekyll的优势
- **静态网站生成器**：生成的是纯静态HTML文件，访问速度快
- **Markdown支持**：使用Markdown编写文章，简单高效
- **主题丰富**：有大量免费主题可选择
- **插件系统**：功能可扩展，满足各种需求

### GitHub Pages的优势
- **完全免费**：无需购买服务器和域名
- **自动部署**：代码推送后自动构建和部署
- **CDN加速**：全球CDN节点，访问速度快
- **稳定可靠**：基于GitHub的强大基础设施

## 准备工作

在开始之前，你需要：

1. **GitHub账号**：注册一个GitHub账号
2. **Git基础知识**：了解基本的Git操作
3. **文本编辑器**：推荐使用VS Code或其他代码编辑器

## 第一步：创建GitHub仓库

1. 登录GitHub，创建一个新仓库
2. 仓库名称格式：`username.github.io`（将username替换为你的GitHub用户名）
3. 设置为Public（公开）
4. 勾选"Add a README file"

## 第二步：配置Jekyll

### 安装Jekyll（本地开发）

如果你想在本地预览博客，需要安装Jekyll：

```bash
# 安装Ruby（Jekyll依赖Ruby）
# macOS
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full

# 安装Jekyll
gem install jekyll bundler
```

### 初始化Jekyll项目

```bash
# 克隆仓库
git clone https://github.com/username/username.github.io.git
cd username.github.io

# 初始化Jekyll项目
jekyll new . --force
```

## 第三步：项目结构

Jekyll项目的基本结构：

```
username.github.io/
├── _config.yml      # 配置文件
├── _includes/       # 可复用的模板片段
├── _layouts/        # 页面布局模板
├── _posts/          # 博客文章
├── _sass/           # Sass样式文件
├── assets/          # 静态资源
├── index.html       # 首页
└── Gemfile         # Ruby依赖
```

## 第四步：配置_config.yml

```yaml
title: "你的博客标题"
description: "博客描述"
url: "https://username.github.io"
baseurl: ""

# 作者信息
author:
  name: "你的名字"
  email: "your-email@example.com"

# 构建设置
markdown: kramdown
highlighter: rouge
permalink: /:categories/:year/:month/:day/:title/

# 插件
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# 分页
paginate: 5
paginate_path: "/page:num/"
```

## 第五步：创建第一篇文章

在`_posts`目录下创建文章，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "我的第一篇博客文章"
date: 2024-01-20 10:00:00 +0800
categories: [技术, 博客]
tags: [jekyll, 开始]
---

这是我的第一篇博客文章！

## 标题

这里是内容...
```

## 第六步：自定义样式

在`assets/css/style.scss`中添加自定义样式：

```scss
---
---

@import "minima";

// 自定义样式
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

.site-header {
  background-color: #2c3e50;
}
```

## 第七步：部署到GitHub Pages

### 方法一：直接推送（推荐）
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 方法二：使用GitHub Actions

创建`.github/workflows/jekyll.yml`：

```yaml
name: Build and deploy Jekyll site

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: 3.0
    - name: Install dependencies
      run: |
        gem install bundler
        bundle install
    - name: Build site
      run: bundle exec jekyll build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

## 高级配置

### SEO优化
```yaml
# _config.yml
plugins:
  - jekyll-seo-tag

# 在_layouts/default.html中添加
{% seo %}
```

### 添加评论系统
```html
<!-- 使用Disqus -->
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
  this.page.url = "{{ site.url }}{{ page.url }}";
  this.page.identifier = "{{ page.id }}";
};
</script>
```

### 添加Google Analytics
```html
<!-- 在_includes/head.html中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 常见问题

### 1. 本地预览
```bash
bundle exec jekyll serve
# 访问 http://localhost:4000
```

### 2. 构建失败
- 检查YAML格式是否正确
- 确保所有依赖都已安装
- 查看GitHub Actions日志

### 3. 样式问题
- 清除浏览器缓存
- 检查CSS文件路径
- 确保SCSS编译正确

## 总结

Jekyll + GitHub Pages是搭建个人博客的绝佳选择：

- ✅ 完全免费
- ✅ 自动部署
- ✅ 高度可定制
- ✅ SEO友好
- ✅ 速度快
- ✅ 稳定可靠

通过本教程，你应该能够成功搭建一个属于自己的博客。记住，一个好的博客不仅要有好的技术基础，更重要的是持续产出高质量的内容。

开始你的博客之旅吧！🚀

---

*如果你觉得这篇教程有帮助，欢迎分享给其他人！* 