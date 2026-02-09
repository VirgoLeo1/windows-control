# Windows-Control 通用系统控制技能

---

## 🌐 Language / 语言

[English](#english-version) | [中文](#中文版本)

---

## 🌟 项目介绍

**Windows-Control** 是一个具备自动学习和自我进化能力的通用Windows系统控制技能。

**版本**: 1.0.0  
**类型**: OpenClaw Skill  
**作者**: lily (AIfriend) & VirgoLiant  
**协议**: MIT License  
**状态**: 生产就绪

---

## 🎯 核心特性

### ✨ 自动学习系统
- **使用前**: 自动读取相关经验，应用最佳实践
- **使用后**: 自动记录操作结果，积累学习经验  
- **持续进化**: 每次使用都变得更聪明和高效

### 🔧 通用操作支持
- **进程管理**: 通用进程查找、停止、启动
- **文件操作**: 文件复制、移动、删除
- **系统服务**: 服务状态查询和控制
- **网络配置**: 网络状态检查和配置

### 🛡️ 安全可靠
- **通用性原则**: 不针对特定软件，适用性广泛
- **权限检查**: 自动验证操作权限
- **风险提示**: 基于经验的智能风险识别

---

## 📥 安装教程

### OpenClaw技能安装

#### 1. 下载项目
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### 2. 安装到OpenClaw
```bash
# 复制到OpenClaw技能目录
xcopy /E /I windows-control "C:\Users\[你的用户名]\.openclaw\workspace\skills\windows-control"
```

#### 3. 验证OpenClaw技能
```bash
# 检查技能文件
dir "C:\Users\[你的用户名]\.openclaw\workspace\skills\windows-control"
```

应该看到以下文件：
- ✅ SKILL.md (OpenClaw技能定义)
- ✅ EXPERIENCES.md (经验库)
- ✅ _meta.json (技能元数据)
- ✅ auto-learn.mjs (自动学习系统)
- ✅ windows-controller.mjs (控制器)
- ✅ README.md (项目文档)

---

## 📖 使用教程

### OpenClaw集成使用

#### 1. 在OpenClaw中使用
```
OpenClaw技能: windows-control

功能模式:
- 自动学习: 使用前读取经验，使用后记录学习
- 通用控制: 支持进程、文件、服务等操作
- 自我进化: 每次操作都产生学习价值
```

#### 2. 基础操作示例
```javascript
import { WindowsController } from './windows-controller.mjs';

const controller = new WindowsController();

// 停止进程（自动学习）
await controller.manageProcess('stop', 'testapp');

// 文件操作
await controller.manageFile('copy', 'source.txt', 'destination.txt');
```

---

## 🧠 自动学习机制

### 学习系统流程
```
用户请求 → 读取经验 → 应用最佳实践 → 执行操作 → 记录结果 → 学习优化
```

### 核心功能
- **经验积累**: 每次操作都在学习
- **模式识别**: 从历史操作中识别成功模式
- **风险识别**: 基于失败经验识别风险
- **持续优化**: 不断改进操作方法

---

## 🎯 OpenClaw技能特点

### ✅ 完全兼容OpenClaw
- 标准OpenClaw技能格式
- 支持\_meta.json元数据配置
- 兼容OpenClaw技能发现机制
- 可被OpenClaw调用和管理

### ✅ 自动学习能力
- 与OpenClaw协同工作
- 每次调用都记录经验
- 智能化决策和建议
- 持续优化技能性能

---

## 👥 作者信息

**lily (AIfriend)**  
AI研究和爱好者，专注于智能系统和自动化工具

**VirgoLiant**  
技术专家，负责系统设计和实现

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 📞 联系方式

- 项目主页: https://github.com/VirgoLeo1/windows-control
- 问题反馈: https://github.com/VirgoLeo1/windows-control/issues
- 讨论: https://github.com/VirgoLeo1/windows-control/discussions

---

*Windows-Control - 让Windows控制变得智能化！*  
*OpenClaw Skill v1.0.0* 🚀

---

<div id="english-version"></div>

---

# Windows-Control Universal System Control Skill

---

## 🌐 Language / 语言

[English](#english-version) | [中文](#中文版本)

---

## 🌟 Project Overview

**Windows-Control** is a universal Windows system control skill with automatic learning and self-evolution capabilities.

**Version**: 1.0.0  
**Type**: OpenClaw Skill  
**Authors**: lily (AIfriend) & VirgoLiant  
**License**: MIT License  
**Status**: Production Ready

---

## 🎯 Core Features

### ✨ Automatic Learning System
- **Before Use**: Automatically reads relevant experiences and applies best practices
- **After Use**: Automatically records operation results and accumulates learning experiences
- **Continuous Evolution**: Becomes smarter and more efficient with each use

### 🔧 Universal Operation Support
- **Process Management**: Process discovery, stopping, and launching
- **File Operations**: File copying, moving, and deletion
- **System Services**: Service status queries and control
- **Network Configuration**: Network status checking and configuration

### 🛡️ Safe and Reliable
- **Universality Principle**: Not targeted at specific software, wide applicability
- **Permission Check**: Automatically validates operation permissions
- **Risk Warnings**: Intelligent risk identification based on experience

---

## 📥 Installation Tutorial

### OpenClaw Skill Installation

#### 1. Download Project
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### 2. Install to OpenClaw
```bash
# Copy to OpenClaw skills directory
xcopy /E /I windows-control "C:\Users\[Your Username]\.openclaw\workspace\skills\windows-control"
```

#### 3. Verify OpenClaw Skill
```bash
# Check skill files
dir "C:\Users\[Your Username]\.openclaw\workspace\skills\windows-control"
```

You should see the following files:
- ✅ SKILL.md (OpenClaw skill definition)
- ✅ EXPERIENCES.md (Experience database)
- ✅ _meta.json (Skill metadata)
- ✅ auto-learn.mjs (Automatic learning system)
- ✅ windows-controller.mjs (Controller)
- ✅ README.md (Project documentation)

---

## 📖 Usage Tutorial

### OpenClaw Integrated Usage

#### 1. Using in OpenClaw
```
OpenClaw Skill: windows-control

Operation Mode:
- Auto Learning: Read experience before use, record learning after use
- Universal Control: Supports process, file, service operations
- Self Evolution: Every operation produces learning value
```

#### 2. Basic Operation Examples
```javascript
import { WindowsController } from './windows-controller.mjs';

const controller = new WindowsController();

// Stop process (automatic learning)
await controller.manageProcess('stop', 'testapp');

// File operations
await controller.manageFile('copy', 'source.txt', 'destination.txt');
```

---

## 🧠 Automatic Learning Mechanism

### Learning System Flow
```
User Request → Read Experience → Apply Best Practices → Execute Operation → Record Results → Learn & Optimize
```

### Core Functions
- **Experience Accumulation**: Learning with every operation
- **Pattern Recognition**: Identifying successful patterns from history
- **Risk Identification**: Identifying risks based on failed experiences
- **Continuous Optimization**: Constantly improving operation methods

---

## 🎯 OpenClaw Skill Features

### ✅ Fully Compatible with OpenClaw
- Standard OpenClaw skill format
- Supports \_meta.json metadata configuration
- Compatible with OpenClaw skill discovery mechanism
- Can be called and managed by OpenClaw

### ✅ Automatic Learning Capability
- Works collaboratively with OpenClaw
- Records experiences with every invocation
- Intelligent decision making and suggestions
- Continuously optimizes skill performance

---

## 👥 Author Information

**lily (AIfriend)**  
AI researcher and enthusiast, focused on intelligent systems and automation tools

**VirgoLiant**  
Technical expert, responsible for system design and implementation

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 📞 Contact

- Project Home: https://github.com/VirgoLeo1/windows-control
- Issue Feedback: https://github.com/VirgoLeo1/windows-control/issues
- Discussions: https://github.com/VirgoLeo1/windows-control/discussions

---

*Windows-Control - Making Windows Control Intelligent!*  
*OpenClaw Skill v1.0.0* 🚀