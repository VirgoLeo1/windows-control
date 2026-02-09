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

## 📦 依赖要求 / Dependencies

### 系统要求 / System Requirements

#### 必需依赖 / Required Dependencies
- **Node.js**: >= 14.0.0
  - 用于运行JavaScript模块
  - 支持ES6导入语法 (`import`/`export`)
  - Windows原生模块支持

#### 操作系统 / Operating System
- **Windows**: Windows 10/11 (win32)
  - Windows PowerShell (用于执行系统命令)
  - 管理员权限 (部分操作需要)

#### 可选依赖 / Optional Dependencies
- **OpenClaw**: OpenClaw系统 (推荐)
  - 用于技能集成和自动发现
  - 提供\_meta.json元数据配置
  - 增强技能管理和调用功能

### 依赖详情 / Dependency Details

#### Node.js模块依赖 / Node.js Module Dependencies
```javascript
// 内置模块（无需额外安装）
import fs from 'fs';        // 文件系统操作
import path from 'path';    // 路径处理
```

**说明 / Explanation**: 
- 使用Node.js内置模块，无需npm install
- `fs`模块用于读写EXPERIENCES.md经验库
- `path`模块处理文件路径

#### PowerShell命令依赖 / PowerShell Command Dependencies
```powershell
# 进程管理操作
Get-Process | Stop-Process -Force

# 文件操作
Copy-Item, Move-Item, Remove-Item

# 系统服务操作
Get-Service, Start-Service, Stop-Service
```

**说明 / Explanation**:
- 依赖Windows PowerShell命令执行
- 需要Windows原生系统支持
- 通过Node.js的`child_process`模块调用

---

## 📥 安装教程

### 方式一：手动安装（推荐）

#### 1. 检查依赖环境
```bash
# 检查Node.js版本
node --version  # 应该 >= 14.0.0

# 检查PowerShell
powershell -Command "Get-Host"  # 确认PowerShell可用

# 检查权限（如有需要右键选择"以管理员身份运行"）
```

#### 2. 下载项目
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### 3. 复制技能文件
```bash
# 复制到OpenClaw技能目录
# Windows路径示例：
xcopy /E /I windows-control "C:\Users\[你的用户名]\.openclaw\workspace\skills\windows-control"
```

#### 4. 验证安装
```bash
# 检查技能文件
dir "C:\Users\[你的用户名]\.openclaw\workspace\skills\windows-control"

# 运行测试验证
npm test
```

应该看到以下文件：
- ✅ package.json (依赖配置)
- ✅ SKILL.md (OpenClaw技能定义)
- ✅ EXPERIENCES.md (经验库)
- ✅ _meta.json (技能元数据)
- ✅ auto-learn.mjs (自动学习系统)
- ✅ windows-controller.mjs (控制器)
- ✅ README.md (项目文档)

---

## 📖 使用教程

### 基础使用示例

#### 1. 进程管理
```javascript
import { WindowsController } from './windows-controller.mjs';

const controller = new WindowsController();

// 停止进程（自动学习）
await controller.manageProcess('stop', 'testapp');

// 系统会自动：
// 1. 读取相关经验
// 2. 应用最佳实践
// 3. 执行操作
// 4. 记录学习结果
```

#### 2. 文件操作
```javascript
// 复制文件
await controller.manageFile('copy', 'source.txt', 'destination.txt');

// 删除文件
await controller.manageFile('delete', 'old_file.txt');

// 移动文件  
await controller.manageFile('move', 'old_location.txt', 'new_location.txt');
```

#### 3. 查看学习过程
```javascript
// 查看当前经验
const experiences = controller.readExperiences();
console.log('已学到的经验:', experiences);

// 获取相关建议
const suggestions = controller.getSuggestions('进程管理');
console.log('操作建议:', suggestions);
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

## 🔧 故障排查 / Troubleshooting

### 依赖问题 / Dependency Issues

#### 问题1: Node.js版本过低
**错误**: 模块导入语法不支持  
**解决**: 
```bash
# 升级Node.js到14.0+
# 访问: https://nodejs.org
node --version  # 验证版本
```

#### 问题2: PowerShell不响应
**错误**: child_process无法执行PowerShell命令  
**解决**:
```powershell
# 确认PowerShell可用
powershell -Command "Get-Host"

# 检查执行策略
powershell -Command "Get-ExecutionPolicy"

# 如有需要，执行（需管理员权限）
powershell -Command "Set-ExecutionPolicy RemoteSigned"
```

#### 问题3: 权限不足
**错误**: 无法执行某些系统操作  
**解决**:
- 以管理员身份运行PowerShell
- 或以管理员身份运行Node.js脚本

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

## 📦 Dependencies / 依赖要求

### System Requirements

#### Required Dependencies / 必需依赖
- **Node.js**: >= 14.0.0
  - For running JavaScript modules
  - Supports ES6 import syntax
  - Windows native module support

#### Operating System / 操作系统
- **Windows**: Windows 10/11 (win32)
  - Windows PowerShell (for executing system commands)
  - Administrator permissions (for some operations)

#### Optional Dependencies / 可选依赖
- **OpenClaw**: OpenClaw system (recommended)
  - For skill integration and auto-discovery
  - Provides \_meta.json metadata configuration
  - Enhances skill management and invocation

### Dependency Details / 依赖详情

#### Node.js Module Dependencies / Node.js模块依赖
```javascript
// Built-in modules (no npm install needed)
import fs from 'fs';        // File system operations
import path from 'path';    // Path handling
```

**Explanation / 说明**: 
- Uses Node.js built-in modules, no extra installation needed
- `fs` module for reading/writing EXPERIENCES.md database
- `path` module for handling file paths

#### PowerShell Command Dependencies / PowerShell命令依赖
```powershell
# Process management operations
Get-Process | Stop-Process -Force

# File operations
Copy-Item, Move-Item, Remove-Item

# System service operations
Get-Service, Start-Service, Stop-Service
```

**Explanation / 说明**:
- Depends on Windows PowerShell command execution
- Requires Windows native system support
- Called through Node.js `child_process` module

---

## 📥 Installation Tutorial

### Method 1: Manual Installation (Recommended)

#### 1. Check Dependency Environment
```bash
# Check Node.js version
node --version  # Should be >= 14.0.0

# Check PowerShell
powershell -Command "Get-Host"  # Confirm PowerShell is available

# Check permissions (if needed, right-click and select "Run as Administrator")
```

#### 2. Download Project
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### 3. Copy Skill Files
```bash
# Copy to OpenClaw skills directory
# Windows path example:
xcopy /E /I windows-control "C:\Users\[Your Username]\.openclaw\workspace\skills\windows-control"
```

#### 4. Verify Installation
```bash
# Check skill files
dir "C:\Users\[Your Username]\.openclaw\workspace\skills\windows-control"

# Run tests to verify
npm test
```

You should see the following files:
- ✅ package.json (Dependency configuration)
- ✅ SKILL.md (OpenClaw skill definition)
- ✅ EXPERIENCES.md (Experience database)
- ✅ _meta.json (Skill metadata)
- ✅ auto-learn.mjs (Automatic learning system)
- ✅ windows-controller.mjs (Controller)
- ✅ README.md (Project documentation)

---

## 📖 Usage Tutorial

### Basic Usage Examples

#### 1. Process Management
```javascript
import { WindowsController } from './windows-controller.mjs';

const controller = new WindowsController();

// Stop process (automatic learning)
await controller.manageProcess('stop', 'testapp');

// System will automatically:
// 1. Read relevant experiences
// 2. Apply best practices
// 3. Execute operation
// 4. Record learning results
```

#### 2. File Operations
```javascript
// Copy file
await controller.manageFile('copy', 'source.txt', 'destination.txt');

// Delete file
await controller.manageFile('delete', 'old_file.txt');

// Move file  
await controller.manageFile('move', 'old_location.txt', 'new_location.txt');
```

#### 3. View Learning Process
```javascript
// View current experiences
const experiences = controller.readExperiences();
console.log('Learned experiences:', experiences);

// Get relevant suggestions
const suggestions = controller.getSuggestions('process management');
console.log('Operation suggestions:', suggestions);
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

## 🔧 Troubleshooting / 故障排查

### Dependency Issues / 依赖问题

#### Issue 1: Node.js version too low
**Error**: Module import syntax not supported  
**Solution**: 
```bash
# Upgrade Node.js to 14.0+
# Visit: https://nodejs.org
node --version  # Verify version
```

#### Issue 2: PowerShell not responding
**Error**: child_process cannot execute PowerShell commands  
**Solution**:
```powershell
# Confirm PowerShell is available
powershell -Command "Get-Host"

# Check execution policy
powershell -Command "Get-ExecutionPolicy"

# If needed, execute (requires admin privileges)
powershell -Command "Set-ExecutionPolicy RemoteSigned"
```

#### Issue 3: Insufficient permissions
**Error**: Cannot perform certain system operations  
**Solution**:
- Run PowerShell as administrator
- Or run Node.js script as administrator

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