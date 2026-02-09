📦 Windows-Control 依赖说明
============================

发布时间: 2026-02-09 22:05
OpenClaw Skill - Windows Control v1.0.0

---

## ✅ 依赖要求完整说明

### 🏷️ 项目依赖分类

---

## 1. 必需依赖 / Required Dependencies

### Node.js 运行环境
**版本要求**: >= 14.0.0

**为什么需要**:
- 运行JavaScript模块 (`.mjs`文件)
- 支持ES6模块导入语法 (`import`/`export`)
- Windows原生模块支持
- 异步操作支持

**如何安装**:
```bash
# 访问官方下载页面
https://nodejs.org

# 下载LTS版本（推荐14.0+或更高）
# 安装后验证版本
node --version
# 输出示例: v14.17.0 或更高
```

**验证安装**:
```bash
# 检查Node.js版本
node --version  # 应该 >= 14.0.0

# 检查npm包管理器
npm --version
```

---

### Windows 操作系统
**支持版本**: Windows 10/11 (win32)

**为什么需要**:
- PowerShell命令执行
- Windows原生系统操作
- 文件系统和进程管理
- 系统服务控制

**系统要求**:
- Windows 10 或更高版本
- 包含PowerShell（Windows自带）
- 部分操作需要管理员权限

**验证系统**:
```powershell
# 检查Windows版本
powershell -Command "[System.Environment]::OSVersion.Version"

# 检查PowerShell可用性
powershell -Command "Get-Host"

# 检查PowerShell版本
powershell -Command "$PSVersionTable.PSVersion"
```

---

## 2. Node.js 内置模块 / Node.js Built-in Modules

### fs (File System)
**用途**: 文件系统操作
- 读取EXPERIENCES.md经验库
- 写入学习记录
- 修改配置文件

**代码示例**:
```javascript
import fs from 'fs';
const content = fs.readFileSync('EXPERIENCES.md', 'utf8');
```

### path (Path)
**用途**: 路径处理
- 文件路径拼接
- 路径规范化
- 跨平台兼容性

**代码示例**:
```javascript
import path from 'path';
const fullPath = path.join('C:', 'Skills', 'windows-control', 'SKILL.md');
```

**说明**: 这两个模块都是Node.js内置的，无需通过npm安装！

---

## 3. PowerShell 命令依赖 / PowerShell Commands Dependencies

### 进程管理命令
```powershell
# 查找进程
Get-Process | Where-Object {$_.Name -like "*pattern*"}

# 停止进程
Stop-Process -Name "processname" -Force

# 启动进程
Start-Process "filepath.exe"
```

### 文件操作命令
```powershell
# 复制文件
Copy-Item -Path "source.txt" -Destination "destination.txt"

# 移动文件
Move-Item -Path "old.txt" -Destination "new.txt"

# 删除文件
Remove-Item -Path "file.txt" -Force
```

### 系统服务命令
```powershell
# 查看服务
Get-Service -Name "servicename"

# 启动服务
Start-Service -Name "servicename"

# 停止服务
Stop-Service -Name "servicename"
```

**说明**: 这些命令通过Node.js的`child_process`模块调用，是Windows原生的PowerShell命令。

---

## 4. 可选依赖 / Optional Dependencies

### OpenClaw 系统 (推荐)
**版本**: 任何兼容版本

**为什么推荐**:
- OpenClaw技能集成
- 自动技能发现
- 元数据配置 (\_meta.json)
- 技能管理和调用

**如何集成**:
1. 将技能文件复制到OpenClaw技能目录
2. OpenClaw自动识别并加载技能
3. 可通过OpenClaw接口调用技能功能

**验证OpenClaw**:
```bash
# 检查OpenClaw安装
openclaw --version

# 查看已安装技能
openclaw skill list
```

---

## 5. 无外npm包依赖 / No External npm Dependencies

### 重要说明
**此技能无需安装任何npm包！**

**原因**:
- 只使用Node.js内置模块
- 所有功能都通过原生API实现
- 确保安装简单，无版本冲突

**验证**:
```bash
# package.json 中 dependencies 字段为空
"dependencies": {}

# 无需运行 npm install
```

---

## 🔧 依赖安装验证

### 完整验证步骤

```powershell
# 1. 验证Node.js
Write-Host "📦 检查Node.js..."
node --version
# 应该显示: v14.x.x 或更高

# 2. 验证PowerShell
Write-Host "⚡ 检查PowerShell..."
powershell -Command "Get-Host"
# 应该显示PowerShell版本信息

# 3. 验证技能文件
Write-Host "📁 检查技能文件..."
$skillPath = "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control"
Test-Path "$skillPath\package.json"
Test-Path "$skillPath\windows-controller.mjs"
Test-Path "$skillPath\auto-learn.mjs"
# 应该都返回 True

# 4. 运行测试
Write-Host "🧪 运行测试..."
cd $skillPath
npm test
# 应该显示测试通过信息
```

---

## ❓ 常见依赖问题

### Q1: Node.js版本过低怎么办？
**A**:
1. 访问 https://nodejs.org
2. 下载LTS版本（推荐18.x或20.x）
3. 安装并重启终端
4. 验证: `node --version`

### Q2: PowerShell命令无法执行？
**A**:
1. 检查PowerShell是否可用
```powershell
powershell -Command "Get-Host"
```
2. 检查执行策略
```powershell
powershell -Command "Get-ExecutionPolicy"
```
3. 如需要，设置执行策略（需管理员权限）
```powershell
powershell -Command "Set-ExecutionPolicy RemoteSigned"
```

### Q3: 需要npm install吗？
**A**: 不需要！这个技能只使用Node.js内置模块，没有任何外部npm依赖。

### Q4: 必须有OpenClaw吗？
**A**: 不是必须的。OpenClaw是推荐的集成环境，但这个技能可以独立运行。

### Q5: 在Linux/Mac上能用吗？
**A**: 目前只支持Windows (win32)。这个技能专门为Windows系统设计，使用Windows原生PowerShell命令。

---

## 📊 依赖总结

| 依赖项 | 类型 | 必需 | 版本要求 | 安装方式 |
|--------|------|------|----------|----------|
| Node.js | 运行环境 | ✅ 必须 | >= 14.0.0 | 下载安装 |
| Windows | 操作系统 | ✅ 必须 | 10/11 (win32) | 系统自带 |
| fs模块 | Node内置 | ✅ 内置 | - | 无需安装 |
| path模块 | Node内置 | ✅ 内置 | - | 无需安装 |
| PowerShell | Windows组件 | ✅ 必须 | 5.1+ | 系统自带 |
| OpenClaw | 技能平台 | ⚪ 推荐 | 任意 | 可选安装 |

---

## 🎯 快速开始

### 最小安装步骤
1. **安装Node.js 14.0+**
   - 下载: https://nodejs.org
   - 安装并验证: `node --version`

2. **下载Windows-Control技能**
   ```bash
   git clone https://github.com/VirgoLeo1/windows-control.git
   ```

3. **运行测试**
   ```bash
   cd windows-control
   npm test
   ```

**就这么简单！无需安装任何其他依赖！**

---

## 📞 获取帮助

如果遇到依赖相关问题：

- 📚 查看完整文档: [README.md](https://github.com/VirgoLeo1/windows-control)
- 🐛 提交问题: [GitHub Issues](https://github.com/VirgoLeo1/windows-control/issues)
- 💬 讨论交流: [GitHub Discussions](https://github.com/VirgoLeo1/windows-control/discussions)

---

*依赖说明文档 - Windows-Control v1.0.0*  
*更新时间: 2026-02-09 22:05*  
*作者: lily (AIfriend) & VirgoLiant* 🚀