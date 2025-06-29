# 张志超的个人博客

这是一个基于Jekyll和GitHub Pages构建的现代化个人博客系统。

## 🌟 特性

- **现代化设计**：简洁优雅的界面设计，支持响应式布局
- **主题切换**：支持亮色/暗色主题，用户体验更佳
- **实时搜索**：强大的搜索功能，支持标题、内容、标签搜索
- **分类标签**：完善的分类和标签系统，方便内容组织
- **移动端优化**：完全响应式设计，完美适配各种设备
- **SEO友好**：内置SEO优化，提升搜索引擎排名
- **快速加载**：优化的CSS和JavaScript，确保快速加载

## 🚀 快速开始

### 1. Fork此仓库

点击右上角的Fork按钮，将仓库复制到你的GitHub账号下。

### 2. 重命名仓库

将仓库名称改为 `your-username.github.io`（将your-username替换为你的GitHub用户名）。

### 3. 修改配置

编辑 `_config.yml` 文件，修改以下配置：

```yaml
title: "你的博客标题"
description: "你的博客描述"
url: "https://your-username.github.io"

author:
  name: "你的名字"
  email: "你的邮箱"
  github: "your-username"
  bio: "你的简介"

social_links:
  github: "https://github.com/your-username"
  email: "mailto:your-email@example.com"
```

### 4. 启用GitHub Pages

1. 进入仓库设置页面
2. 找到"Pages"部分
3. 选择"Deploy from a branch"
4. 选择"main"分支
5. 点击"Save"

### 5. 开始写作

在 `_posts` 目录下创建你的文章，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "你的文章标题"
date: 2024-01-01 10:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
---

你的文章内容...
```

## 📁 项目结构

```
├── _config.yml          # 站点配置文件
├── _includes/           # 可复用的模板片段
│   ├── navigation.html  # 导航栏
│   ├── footer.html      # 页脚
│   └── search.html      # 搜索功能
├── _layouts/            # 页面布局模板
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章页布局
│   └── page.html        # 页面布局
├── _posts/              # 博客文章
├── assets/              # 静态资源
│   ├── css/
│   │   └── main.css     # 主样式文件
│   └── js/
│       └── main.js      # 主JavaScript文件
├── pages/               # 独立页面
│   ├── about.md         # 关于页面
│   ├── categories.html  # 分类页面
│   └── tags.html        # 标签页面
├── index.html           # 首页
├── Gemfile             # Ruby依赖
└── README.md           # 项目说明
```

## 🎨 自定义样式

### 主题颜色

在 `assets/css/main.css` 中修改CSS变量：

```css
:root {
  --primary-color: #2563eb;
  --primary-hover: #1d4ed8;
  --accent-color: #06b6d4;
  /* 其他颜色变量... */
}
```

### 字体

```css
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

## 📝 写作指南

### Front Matter

每篇文章都需要包含Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-01 10:00:00 +0800
categories: [技术, 教程]
tags: [jekyll, github-pages]
author: 你的名字
description: "文章描述（可选）"
---
```

### 支持的Markdown功能

- 标题
- 列表
- 链接
- 图片
- 代码块
- 表格
- 引用
- 数学公式（MathJax）

### 代码高亮

```javascript
function hello() {
  console.log("Hello, World!");
}
```

## 🔧 本地开发

如果你想在本地预览博客：

### 1. 安装依赖

```bash
# 安装Ruby和Jekyll
gem install jekyll bundler

# 克隆仓库
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io

# 安装依赖
bundle install
```

### 2. 本地预览

```bash
bundle exec jekyll serve
```

然后在浏览器中访问 `http://localhost:4000`

## 🚀 部署

### GitHub Pages（推荐）

推送代码到GitHub，自动部署：

```bash
git add .
git commit -m "Update blog"
git push origin main
```

### 手动部署

```bash
# 构建站点
bundle exec jekyll build

# 部署_site目录到你的服务器
```

## 📊 分析和SEO

### Google Analytics

在 `_config.yml` 中添加：

```yaml
google_analytics: "你的GA跟踪ID"
```

### SEO优化

博客已经内置了SEO优化：

- 自动生成sitemap.xml
- 结构化数据
- Open Graph标签
- Twitter Cards
- 语义化HTML

## 🎯 功能说明

### 搜索功能

- 实时搜索
- 支持中文
- 搜索结果高亮
- 搜索历史记录

### 主题切换

- 亮色/暗色主题
- 系统主题跟随
- 用户设置记忆

### 响应式设计

- 移动端优先
- 触摸友好
- 自适应布局

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个博客模板！

## 📄 许可证

MIT License

## 📞 联系方式

- GitHub: [@diablozzc](https://github.com/diablozzc)
- 邮箱: your-email@example.com

---

**开始你的博客之旅吧！** 🚀

如果这个项目对你有帮助，请给它一个 ⭐ Star！ 