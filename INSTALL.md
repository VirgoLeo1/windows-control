# Windows-Control 安装教程

## 🚀 快速开始

### 前置要求
- **操作系统**: Windows 10/11
- **Node.js**: 14.0 或更高版本
- **OpenClaw**: 已安装OpenClaw系统（可选，用于集成）

---

## 📥 完整安装流程

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

### 步骤2：复制技能文件

#### 找到OpenClaw技能目录
```powershell
# 默认OpenClaw技能目录
$openclawSkills = "C:\Users\$env:USERNAME\.openclaw\workspace\skills"
```

#### 复制文件
```powershell
# 在windows-control项目根目录执行
xcopy /E /I . "$openclawSkills\windows-control"
```

#### 验证文件结构
```powershell
# 检查复制的文件
Get-ChildItem "$openclawSkills\windows-control" | Select-Object Name, Length
```

应该看到以下文件：
- ✅ SKILL.md
- ✅ EXPERIENCES.md
- ✅ _meta.json
- ✅ auto-learn.mjs
- ✅ windows-controller.mjs
- ✅ README.md

---

## 🔧 配置和验证

### 验证安装

#### 1. 检查技能文件
```powershell
# 检查主要文件是否存在
$skillPath = "C:\Users\$env:USERNAME\.openclaw\workspace\skills\windows-control"

Write-Host "✅ SKILL.md 存在: $(Test-Path "$skillPath\SKILL.md")"
Write-Host "✅ EXPERIENCES.md 存在: $(Test-Path "$skillPath\EXPERIENCES.md")"
Write-Host "✅ windows-controller.mjs 存在: $(Test-Path "$skillPath\windows-controller.mjs")"
```

#### 2. 测试学习系统
```powershell
# 运行学习系统测试
node "$skillPath\auto-learn.mjs"
```

预期输出：
```
🧪 Windows-Control 学习系统测试
================================
✅ 学习系统脚本存在
运行学习系统测试...
🎉 学习系统测试完成！
```

#### 3. 测试控制器
```powershell
# 运行控制器测试
node "$skillPath\windows-controller.mjs"
```

预期输出：
```
🧪 Windows-Control 通用控制器测试
====================================

✅ 控制器控制器初始化完成
📚 自动学习系统已集成
🔄 支持通用Windows系统操作
...
```

---

## ❓ 常见问题

### 问题1：找不到OpenClaw技能目录
**解决**：
- 检查OpenClaw是否正确安装
- 可能需要手动创建目录：`mkdir C:\Users\[用户名]\.openclaw\workspace\skills`

### 问题2：Node.js版本过低
**解决**：
- 访问 https://nodejs.org 下载最新LTS版本
- 重启终端并验证：`node --version`

### 问题3：权限不足
**解决**：
- 以管理员身份运行PowerShell
- 检查目标目录的写入权限

---

## 📊 安装验证清单

- ✅ Node.js已安装并版本正确
- ✅ 项目文件已下载
- ✅ 技能文件已复制到OpenClaw目录
- ✅ 所有必需文件都存在
- ✅ 学习系统测试通过
- ✅ 控制器测试通过

---

## 🎓 后续步骤

安装完成后，建议：

1. **阅读使用教程**: 查看 [USAGE.md](USAGE.md)
2. **运行测试示例**: 熟悉基本操作
3. **查看文档**: 深入了解高级功能
4. **开始使用**: 在实际工作中应用

---

**安装教程版本**: 1.0.0  
**更新时间**: 2026-02-09  
**作者**: lily (AIfriend) & VirgoLiant