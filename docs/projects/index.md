---
title: 项目展示
layout: page
---

# 🚀 项目展示

## 项目列表

### 个人博客系统
- **技术栈**: Python, Flask, MySQL, Bootstrap
- **功能**: 文章管理、评论系统、用户认证
- **描述**: 基于 Flask 框架开发的个人博客系统，支持 Markdown 写作，响应式设计
- **状态**: 已完成
- **链接**: <a href="/projects/blog-system">查看详情</a>

### 数据分析工具
- **技术栈**: Python, Pandas, Matplotlib
- **功能**: 数据导入、清洗、分析、可视化
- **描述**: 用于分析和可视化数据的工具，支持多种数据格式导入和图表生成
- **状态**: 开发中
- **链接**: <a href="/projects/data-analysis">查看详情</a>

### 在线学习平台
- **技术栈**: Python, Django, MySQL, React
- **功能**: 课程管理、用户学习进度跟踪、互动讨论
- **描述**: 基于 Django 和 React 开发的在线学习平台，支持视频课程和互动练习
- **状态**: 规划中
- **链接**: <a href="/projects/learning-platform">查看详情</a>

### 智能聊天机器人
- **技术栈**: Python, Flask, NLP
- **功能**: 自然语言处理、智能问答、对话管理
- **描述**: 基于 NLP 技术开发的智能聊天机器人，支持多轮对话和个性化回复
- **状态**: 开发中
- **链接**: <a href="/projects/chatbot">查看详情</a>

## 项目筛选

### 按技术栈筛选
- <a href="#python">Python 项目</a>
- <a href="#web">Web 项目</a>
- <a href="#data">数据分析项目</a>

### 按状态筛选
- <a href="#completed">已完成</a>
- <a href="#developing">开发中</a>
- <a href="#planning">规划中</a>

<style scoped>
.projects-container {
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  border-color: var(--primary);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--primary);
}

.project-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--foreground);
}

.project-card .tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.tech-tag {
  background: var(--secondary);
  color: var(--primary);
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  border: 1px solid var(--primary);
}

.project-card p {
  margin-bottom: 1rem;
  color: var(--muted-foreground);
  line-height: 1.5;
}

.project-status {
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.status-completed {
  background: rgba(0, 255, 128, 0.2);
  color: #00ff80;
  border: 1px solid #00ff80;
}

.status-developing {
  background: rgba(255, 200, 0, 0.2);
  color: #ffc800;
  border: 1px solid #ffc800;
}

.status-planning {
  background: rgba(128, 128, 128, 0.2);
  color: #808080;
  border: 1px solid #808080;
}

.project-card a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-card a:hover {
  text-decoration: underline;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
}

.filter-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.filter-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--foreground);
}

.filter-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-links a {
  color: var(--muted-foreground);
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  border: 1px solid var(--border);
}

.filter-links a:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: rgba(0, 212, 255, 0.1);
}

@media (max-width: 768px) {
  .projects-container {
    padding: 0 1rem;
  }
  
  .project-card {
    padding: 1rem;
  }
  
  .filter-section {
    padding: 1rem;
  }
  
  .filter-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>