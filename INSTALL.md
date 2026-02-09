# Windows-Control 安装教程 / Installation Tutorial

---

## 🌐 Language / 语言

[English](#english-version) | [中文](#中文版本)

---

## 🚀 Quick Start / 快速开始

### 前置要求 / Prerequisites
- **操作系统**: Windows 10/11 / **Operating System**: Windows 10/11
- **Node.js**: 14.0 或更高版本 / **Node.js**: 14.0 or higher
- **OpenClaw**: 已安装OpenClaw系统（可选）/ **OpenClaw**: OpenClaw system installed (optional)

---

## 📥 完整安装流程 / Complete Installation Process

---

<div id="中文版本"></div>

---

## 中文版本

### 步骤1：获取项目文件

#### 使用Git克隆（推荐）
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### 直接下载ZIP
1. 访问 https://github.com/VirgoLeo1/windows-control
2. 点击 "Code" → "Download ZIP"
3. 解压到目标文件夹

### 步骤2：安装到OpenClaw技能目录

#### 找到OpenClaw技能目录
```powershell
# 默认OpenClaw技能目录
$openclawSkills = "C:\Users\$env:USERNAME\.openclaw\workspace\skills"
```

#### 复制技能文件
```powershell
# 在windows-control项目根目录执行
xcopy /E /I . "$openclawSkills\windows-control"
```

#### 验证OpenClaw技能文件结构
```powershell
# 检查复制的文件
Get-ChildItem "$openclawSkills\windows-control" | Select-Object Name, Length
```

应该看到以下OpenClaw技能文件：
- ✅ **SKILL.md** - OpenClaw技能定义文件
- ✅ **EXPERIENCES.md** - 自动学习经验库
- ✅ **_meta.json** - OpenClaw技能元数据配置
- ✅ **auto-learn.mjs** - 自动学习系统核心
- ✅ **windows-controller.mjs** - Windows通用控制器
- ✅ **README.md** - 项目说明文档

### 步骤3：OpenClaw技能配置

#### 检查技能元数据
```powershell
# 查看_meta.json内容
$metaContent = Get-Content "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control\_meta.json"
Write-Host $metaContent
```

应该看到：
```json
{
  "name": "windows-control",
  "version": "1.0.0",
  "description": "通用Windows系统控制技能，具备自动学习和自我进化能力",
  "author": "lily (AIfriend) & VirgoLiant",
  "license": "MIT"
}
```

### 步骤4：验证OpenClaw技能安装

#### 1. 检查技能文件
```powershell
# 验证所有OpenClaw技能文件
$skillPath = "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control"

Write-Host "✅ SKILL.md: $(Test-Path "$skillPath\SKILL.md")"
Write-Host "✅ EXPERIENCES.md: $(Test-Path "$skillPath\EXPERIENCES.md")"
Write-Host "✅ _meta.json: $(Test-Path "$skillPath\_meta.json")"
Write-Host "✅ auto-learn.mjs: $(Test-Path "$skillPath\auto-learn.mjs")"
Write-Host "✅ windows-controller.mjs: $(Test-Path "$skillPath\windows-controller.mjs")"
```

#### 2. 测试自动学习系统
```powershell
# 运行学习系统测试
node "$skillPath\auto-learn.mjs"
```

预期输出：
```
🧪 Windows-Control 学习系统测试
================================
✅ 学习系统脚本存在
🧠 自动学习系统已就绪
🎉 Windows-Control技能测试完成！
```

#### 3. 测试Windows控制器
```powershell
# 运行控制器测试
node "$skillPath\windows-controller.mjs"
```

预期输出：
```
🧪 Windows-Control 通用控制器测试
====================================

✅ 控制器初始化完成
📚 自动学习系统已集成
🔄 支持通用Windows系统操作
✅ OpenClaw技能功能正常
```

---

## ❓ 常见问题

### 问题1：找不到OpenClaw技能目录
**解决**：检查OpenClaw是否正确安装，可能需要手动创建目录。

### 问题2：OpenClaw无法识别技能
**解决**：确保_meta.json格式正确，并且SKILL.md存在。

### 问题3：Node.js版本过低
**解决**：访问 https://nodejs.org 下载最新LTS版本。

---

## 📊 OpenClaw技能安装验证清单

- ✅ 项目文件已下载
- ✅ 复制到OpenClaw技能目录
- ✅ SKILL.md (技能定义文件) - 已配置
- ✅ _meta.json (技能元数据) - 已配置
- ✅ 所有必需文件都存在
- ✅ 自动学习系统测试通过
- ✅ Windows控制器测试通过
- ✅ OpenClaw技能识别正常

---

## 🎓 后续步骤

安装完成后，建议：

1. **阅读使用教程**: 查看 [USAGE.md](USAGE.md)
2. **了解OpenClaw集成**: 熟悉如何在OpenClaw中调用
3. **运行测试示例**: 熟悉基本操作
4. **开始使用**: 在OpenClaw项目中应用

---

<div id="english-version"></div>

---

## English Version

### Step 1: Acquire Project Files

#### Clone via Git (Recommended)
```bash
git clone https://github.com/VirgoLeo1/windows-control.git
cd windows-control
```

#### Download ZIP Directly
1. Visit https://github.com/VirgoLeo1/windows-control
2. Click "Code" → "Download ZIP"
3. Extract to target folder

### Step 2: Install to OpenClaw Skills Directory

#### Find OpenClaw Skills Directory
```powershell
# Default OpenClaw skills directory
$openclawSkills = "C:\Users\$env:USERNAME\.openclaw\workspace\skills"
```

#### Copy Skill Files
```powershell
# Execute in windows-control project root directory
xcopy /E /I . "$openclawSkills\windows-control"
```

#### Verify OpenClaw Skill File Structure
```powershell
# Check copied files
Get-ChildItem "$openclawSkills\windows-control" | Select-Object Name, Length
```

You should see the following OpenClaw skill files:
- ✅ **SKILL.md** - OpenClaw skill definition file
- ✅ **EXPERIENCES.md** - Automatic learning experience database
- ✅ **_meta.json** - OpenClaw skill metadata configuration
- ✅ **auto-learn.mjs** - Automatic learning system core
- ✅ **windows-controller.mjs** - Windows universal controller
- ✅ **README.md** - Project documentation

### Step 3: OpenClaw Skill Configuration

#### Check Skill Metadata
```powershell
# View _meta.json content
$metaContent = Get-Content "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control\_meta.json"
Write-Host $metaContent
```

You should see:
```json
{
  "name": "windows-control",
  "version": "1.0.0",
  "description": "Universal Windows system control skill with automatic learning and self-evolution",
  "author": "lily (AIfriend) & VirgoLiant",
  "license": "MIT"
}
```

### Step 4: Verify OpenClaw Skill Installation

#### 1. Check Skill Files
```powershell
# Verify all OpenClaw skill files
$skillPath = "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control"

Write-Host "✅ SKILL.md: $(Test-Path "$skillPath\SKILL.md")"
Write-Host "✅ EXPERIENCES.md: $(Test-Path "$skillPath\EXPERIENCES.md")"
Write-Host "✅ _meta.json: $(Test-Path "$skillPath\_meta.json")"
Write-Host "✅ auto-learn.mjs: $(Test-Path "$skillPath\auto-learn.mjs")"
Write-Host "✅ windows-controller.mjs: $(Test-Path "$skillPath\windows-controller.mjs")"
```

#### 2. Test Automatic Learning System
```powershell
# Run learning system test
node "$skillPath\auto-learn.mjs"
```

Expected output:
```
🧪 Windows-Control Learning System Test
================================
✅ Learning system script exists
🧠 Automatic learning system ready
🎉 Windows-Control skill test completed!
```

#### 3. Test Windows Controller
```powershell
# Run controller test
node "$skillPath\windows-controller.mjs"
```

Expected output:
```
🧪 Windows-Control Universal Controller Test
====================================

✅ Controller initialization completed
📚 Automatic learning system integrated
🔄 Supports universal Windows system operations
✅ OpenClaw skill functions properly
```

---

## ❓ Common Issues

### Issue 1: Cannot find OpenClaw skills directory
**Solution**: Check if OpenClaw is installed correctly, may need to create directory manually.

### Issue 2: OpenClaw cannot recognize skill
**Solution**: Ensure _meta.json format is correct and SKILL.md exists.

### Issue 3: Node.js version too low
**Solution**: Visit https://nodejs.org to download the latest LTS version.

---

## 📊 OpenClaw Skill Installation Verification Checklist

- ✅ Project files downloaded
- ✅ Copied to OpenClaw skills directory
- ✅ SKILL.md (skill definition file) - configured
- ✅ _meta.json (skill metadata) - configured
- ✅ All required files exist
- ✅ Automatic learning system test passed
- ✅ Windows controller test passed
- ✅ OpenClaw skill recognition normal

---

## 🎓 Next Steps

After installation, it is recommended to:

1. **Read Usage Tutorial**: See [USAGE.md](USAGE.md)
2. **Understand OpenClaw Integration**: Learn how to call within OpenClaw
3. **Run Test Examples**: Familiarize with basic operations
4. **Start Using**: Apply in OpenClaw projects

---

*Installation Tutorial / 安装教程 v1.0.0*  
*Updated / 更新: 2026-02-09*  
*Authors / 作者: lily (AIfriend) & VirgoLiant*