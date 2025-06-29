---
layout: page
title: 关于我
description: 了解更多关于我的信息
permalink: /about/
---

<div class="about-page">
    <div class="about-header">
        <div class="about-avatar">
            <img src="https://github.com/{{ site.author.github }}.png" alt="{{ site.author.name }}" class="avatar">
        </div>
        <div class="about-info">
            <h1>{{ site.author.name }}</h1>
            <p class="about-bio">{{ site.author.bio }}</p>
            <div class="about-social">
                {% if site.social_links.github %}
                    <a href="{{ site.social_links.github }}" target="_blank" class="social-link github">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                {% endif %}
                {% if site.social_links.email %}
                    <a href="{{ site.social_links.email }}" class="social-link email">
                        <i class="fas fa-envelope"></i>
                        邮箱
                    </a>
                {% endif %}
            </div>
        </div>
    </div>
    
    <div class="about-content">
        <section class="about-section">
            <h2><i class="fas fa-user"></i> 个人简介</h2>
            <p>
                你好！我是{{ site.author.name }}，一名热爱技术的开发者。我喜欢探索新技术，分享自己的学习心得和项目经验。
            </p>
            <p>
                这个博客是我记录学习过程、分享技术心得的地方。希望我的文章能够帮助到其他开发者，也欢迎大家与我交流讨论。
            </p>
        </section>
        
        <section class="about-section">
            <h2><i class="fas fa-code"></i> 技术栈</h2>
            <div class="tech-stack">
                <div class="tech-category">
                    <h3>前端开发</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">HTML/CSS</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>后端开发</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Java</span>
                        <span class="tech-tag">数据库</span>
                    </div>
                </div>
                <div class="tech-category">
                    <h3>工具与平台</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Git</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">AWS</span>
                        <span class="tech-tag">Linux</span>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="about-section">
            <h2><i class="fas fa-chart-line"></i> 博客统计</h2>
            <div class="blog-stats">
                <div class="stat-card">
                    <div class="stat-number">{{ site.posts.size }}</div>
                    <div class="stat-label">文章总数</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">{{ site.categories.size }}</div>
                    <div class="stat-label">分类数量</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">{{ site.tags.size }}</div>
                    <div class="stat-label">标签数量</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">{{ site.posts.first.date | date: "%Y" | minus: 2023 | plus: 1 }}</div>
                    <div class="stat-label">写作年数</div>
                </div>
            </div>
        </section>
        
        <section class="about-section">
            <h2><i class="fas fa-heart"></i> 兴趣爱好</h2>
            <ul class="interests-list">
                <li><i class="fas fa-code"></i> 编程与技术研究</li>
                <li><i class="fas fa-book"></i> 阅读技术书籍</li>
                <li><i class="fas fa-coffee"></i> 品味咖啡</li>
                <li><i class="fas fa-music"></i> 听音乐</li>
                <li><i class="fas fa-camera"></i> 摄影</li>
            </ul>
        </section>
        
        <section class="about-section">
            <h2><i class="fas fa-envelope"></i> 联系方式</h2>
            <p>
                如果你想与我交流技术问题，或者有任何建议和想法，欢迎通过以下方式联系我：
            </p>
            <div class="contact-methods">
                {% if site.social_links.email %}
                    <a href="{{ site.social_links.email }}" class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <span>发送邮件</span>
                    </a>
                {% endif %}
                {% if site.social_links.github %}
                    <a href="{{ site.social_links.github }}" target="_blank" class="contact-method">
                        <i class="fab fa-github"></i>
                        <span>GitHub</span>
                    </a>
                {% endif %}
            </div>
        </section>
    </div>
</div> 