---
title: 墨宇的科技博客
layout: home
---

# 👨‍💻 墨宇的科技博客

<div class="hero-section">
  <div class="hero-content">
    <h1 class="neon">探索技术的无限可能</h1>
    <p>计算机科学与技术专业 | Python | Web开发 | MySQL</p>
    <div class="tech-stack">
      <span class="tech-badge">Python</span>
      <span class="tech-badge">JavaScript</span>
      <span class="tech-badge">HTML/CSS</span>
      <span class="tech-badge">MySQL</span>
      <span class="tech-badge">Flask</span>
      <span class="tech-badge">Django</span>
    </div>
  </div>
  <div class="hero-image">
    <!-- 科技风格的英雄图片 -->
  </div>
</div>

## 📝 最新文章

### Python 进阶技巧
- **主题**: Python 装饰器的高级应用
- **简介**: 深入探讨 Python 装饰器的原理和使用场景，包括参数化装饰器、类装饰器等高级用法
- **标签**: Python, 装饰器, 高级特性
- **链接**: <a href="/notes/python/decorators">阅读更多</a>

### Web 开发实践
- **主题**: 构建高性能 Web 应用的最佳实践
- **简介**: 分享如何优化 Web 应用性能，包括前端优化、后端优化和数据库优化等方面
- **标签**: Web开发, 性能优化, 最佳实践
- **链接**: <a href="/notes/web/performance">阅读更多</a>

### MySQL 数据库优化
- **主题**: MySQL 索引优化策略
- **简介**: 详细介绍 MySQL 索引的工作原理和优化方法，提升数据库查询性能
- **标签**: MySQL, 数据库, 性能优化
- **链接**: <a href="/notes/mysql/index-optimization">阅读更多</a>

## 🚀 项目展示

### 个人博客系统
- **技术栈**: Python, Flask, MySQL, Bootstrap
- **简介**: 基于 Flask 框架开发的个人博客系统，支持文章管理、评论功能和用户认证
- **链接**: <a href="/projects/blog-system">查看详情</a>

### 数据分析工具
- **技术栈**: Python, Pandas, Matplotlib
- **简介**: 用于数据分析和可视化的工具，支持数据导入、清洗、分析和图表生成
- **链接**: <a href="/projects/data-analysis">查看详情</a>

## 📞 联系我

- **邮箱**: <a href="mailto:16626550590@163.com">16626550590@163.com</a>
- **Gitee**: <a href="https://gitee.com/moyvbjb" target="_blank">moyvbjb</a>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 3rem;
  background: rgba(18, 18, 18, 0.8);
  border-radius: 1rem;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
}

.hero-content {
  flex: 1;
  margin-right: 2rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: var(--secondary);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  border: 1px solid var(--primary);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: var(--primary);
  color: var(--primary-foreground);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.3);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}

@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    margin-right: 0;
    margin-bottom: 2rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
}
</style>