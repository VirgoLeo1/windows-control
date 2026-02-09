# Windows-Control 使用教程 / Usage Tutorial

---

## 🌐 Language / 语言

[English](#english-version) | [中文](#中文版本)

---

## 📚 Basic Concepts / 基础概念

### OpenClaw技能架构 / OpenClaw Skill Architecture
```
用户请求 / User Request
    ↓
learnBeforeUse() → 读取经验 / Read Experience → 应用最佳实践 / Apply Best Practices
    ↓
执行Windows操作 / Execute Windows Operation
    ↓
learnAfterUse() → 分析结果 / Analyze Results → 记录学习 / Record Learning
    ↓
更新经验库 / Update Experience Database → 为未来操作提供参考 / Provide Reference for Future Operations
```

### 自动学习原理 / Automatic Learning Principle
- **经验积累 / Experience Accumulation**: 每次操作都在学习 / Learning with every operation
- **模式识别 / Pattern Recognition**: 从历史操作中识别成功模式 / Identifying successful patterns from history
- **风险识别 / Risk Identification**: 基于失败经验识别风险 / Identifying risks based on failed experiences
- **持续优化 / Continuous Optimization**: 不断改进操作方法 / Constantly improving operation methods

---

<div id="中文版本"></div>

---

## 中文版本

## 🎯 OpenClaw技能基础使用

### 1. 初始化控制器
```javascript
import { WindowsController } from './windows-controller.mjs';

// 创建控制器实例
const controller = new WindowsController();

// 检查OpenClaw技能状态
console.log('✅ OpenClaw技能 - Windows Control 已初始化');
```

### 2. OpenClaw集成进程管理
```javascript
// 查找进程
await controller.manageProcess('list', 'chrome');

// 停止进程（自动学习）
await controller.manageProcess('stop', 'notepad');

// 启动进程
await controller.manageProcess('start', 'calc.exe');
```

### 3. OpenClaw集成文件操作
```javascript
// 复制文件
await controller.manageFile('copy', 'source.txt', 'backup/source.txt');

// 移动文件
await controller.manageFile('move', 'temp.txt', 'archive/old.txt');

// 删除文件
await controller.manageFile('delete', 'unused.txt');
```

---

## 🧠 OpenClaw技能自动学习使用

### 查看学习过程
```javascript
// 1. 操作前学习
const beforeLearn = await controller.learnBeforeUse('进程管理');
console.log('🧀 学到的经验:', beforeLearn.experiences);

// 2. 执行操作
// (执行具体的Windows操作)

// 3. 操作后学习
const afterLearn = await controller.learnAfterUse(operation, result);
console.log('📝 学习结果:', afterLearn.learningEntry);
```

### 查看积累的经验
```javascript
// 读取所有经验
const experiences = controller.readExperiences();
console.log(experiences);

// 查看特定类型的经验
const processExperiences = controller.findRelevantExperiences('进程管理');
console.log('OpenClaw技能进程管理经验:', processExperiences);
```

---

## 🔧 OpenClaw技能高级功能

### 批量操作
```javascript
// 批量文件操作
const files = [
  { from: 'file1.txt', to: 'backup/file1.txt' },
  { from: 'file2.txt', to: 'backup/file2.txt' },
  { from: 'file3.txt', to: 'backup/file3.txt' }
];

for (const file of files) {
  await controller.manageFile('copy', file.from, file.to);
  // 每次操作都自动学习
  console.log(`✅ OpenClaw技能处理: ${file.from}`);
}
```

### OpenClaw技能错误处理
```javascript
try {
  // 执行可能失败的操作
  await controller.manageProcess('stop', 'system_process');
} catch (error) {
  console.log('⚠️ OpenClaw技能操作失败:', error.message);
  
  // 记录失败经验
  await controller.learnAfterUse({
    type: '进程管理',
    method: '停止系统进程'
  }, {
    success: false,
    error: error.message,
    solution: '可能需要管理员权限'
  });
}
```

---

## 📊 OpenClaw技能实际应用场景

### 场景1：日常系统维护
```javascript
// 清理临时文件
async function cleanupTempFiles() {
  console.log('🧹 OpenClaw技能 - 临时文件清理');
  
  const tempDirs = [
    'C:\\Users\\$env:USERNAME\\AppData\\Local\\Temp',
    'C:\\Windows\\Temp'
  ];
  
  for (const dir of tempDirs) {
    await controller.manageFile('delete', `${dir}\\*.tmp`);
    console.log(`✅ 已清理: ${dir}`);
  }
  
  console.log('🎉 OpenClaw临时文件清理完成');
}
```

### 场景2：OpenClaw自动化备份
```javascript
// 智能备份
async function smartBackup(sourceDir, backupDir) {
  console.log('💾 OpenClaw技能 - 智能备份');
  
  // 使用前学习
  await controller.learnBeforeUse('文件备份');
  
  // 执行备份
  await controller.manageFile('copy', sourceDir, backupDir);
  
  // 学习这次备份的经验
  await controller.learnAfterUse({
    type: '文件备份',
    method: '递归复制'
  }, { success: true });
  
  console.log('✅ OpenClaw备份完成');
}
```

---

## 🎯 OpenClaw技能使用最佳实践

### 1. 开始前规划
```javascript
// 明确操作目标
const operationGoal = '清理临时文件';

// 学习相关经验
const preLearn = await controller.learnBeforeUse(operationGoal);

// 根据经验调整操作计划
if (preLearn.warnings.length > 0) {
  console.log('⚠️ OpenClaw技能风险提示:', preLearn.warnings);
}
```

### 2. 操作中监控
```javascript
// 执行操作并实时监控
const startTime = Date.now();

try {
  const result = await controller.manageFile('copy', largeFile, destination);
  
  const duration = Date.now() - startTime;
  console.log(`✅ OpenClaw操作完成，耗时: ${duration}ms`);
  
  // 记录性能信息
  await controller.learnAfterUse(operation, {
    ...result,
    duration: duration
  });
  
} catch (error) {
  console.log('❌ OpenClaw操作失败:', error.message);
}
```

---

## 📈 OpenClaw技能学习效果评估

### 逐步进步示例
```javascript
// 第1天：首次使用
console.log('第1天效率: 50%');
// 操作需要尝试多种方法

// 第7天：一周后  
console.log('第7天效率: 75%');
// 开始应用学到的方法

// 第30天：一个月后
console.log('第30天效率: 90%');
// 大部分操作一次成功

// 第90天：三个月后
console.log('第90天效率: 98%');
// OpenClaw技能智能化程度很高
```

---

## ❓ OpenClaw技能常见问题

### Q1: 如何重置学习数据？
**A**:
```javascript
// 备份现有经验
const currentExperiences = controller.readExperiences();
fs.writeFileSync('backup_experiences.md', currentExperiences);

// 重置为空经验
fs.writeFileSync(controller.experiencesPath, '');
```

### Q2: 如何导出和导入经验？
**A**:
```javascript
// 导出
const exportExperiences = () => {
  const data = controller.readExperiences();
  fs.writeFileSync('export.json', JSON.stringify({
    experiences: data,
    exportDate: new Date().toISOString()
  }));
};

// 导入
const importExperiences = (jsonPath) => {
  const data = JSON.parse(fs.readFileSync(jsonPath));
  fs.writeFileSync(controller.experiencesPath, data.experiences);
};
```

---

## 🚀 OpenClaw技能进阶技巧

### 构建操作流水线
```javascript
// 将多个操作串联 - OpenClaw技能流水线
async function operationPipeline() {
  const steps = [
    { type: '停止服务', target: 'MyService' },
    { type: '文件备份', source: 'C:\\App', dest: 'D:\\Backup' },
    { type: '清理文件', target: 'C:\\Temp' }
  ];
  
  for (const step of steps) {
    await controller.executeStep(step);
    // 每一步都在学习
    console.log(`✅ OpenClaw技能步骤完成: ${step.type}`);
  }
}
```

---

<div id="english-version"></div>

---

## English Version

## 🎯 OpenClaw Skill Basic Usage

### 1. Initialize Controller
```javascript
import { WindowsController } from './windows-controller.mjs';

// Create controller instance
const controller = new WindowsController();

// Check OpenClaw skill status
console.log('✅ OpenClaw Skill - Windows Control Initialized');
```

### 2. OpenClaw Integrated Process Management
```javascript
// Find process
await controller.manageProcess('list', 'chrome');

// Stop process (automatic learning)
await controller.manageProcess('stop', 'notepad');

// Start process
await controller.manageProcess('start', 'calc.exe');
```

### 3. OpenClaw Integrated File Operations
```javascript
// Copy file
await controller.manageFile('copy', 'source.txt', 'backup/source.txt');

// Move file
await controller.manageFile('move', 'temp.txt', 'archive/old.txt');

// Delete file
await controller.manageFile('delete', 'unused.txt');
```

---

## 🧠 OpenClaw Skill Automatic Learning Usage

### View Learning Process
```javascript
// 1. Learn before operation
const beforeLearn = await controller.learnBeforeUse('process management');
console.log('🧀 Learned experiences:', beforeLearn.experiences);

// 2. Execute operation
// (Execute specific Windows operation)

// 3. Learn after operation
const afterLearn = await controller.learnAfterUse(operation, result);
console.log('📝 Learning result:', afterLearn.learningEntry);
```

### View Accumulated Experiences
```javascript
// Read all experiences
const experiences = controller.readExperiences();
console.log(experiences);

// View specific type of experiences
const processExperiences = controller.findRelevantExperiences('process management');
console.log('OpenClaw skill process management experiences:', processExperiences);
```

---

## 🔧 OpenClaw Skill Advanced Features

### Batch Operations
```javascript
// Batch file operations
const files = [
  { from: 'file1.txt', to: 'backup/file1.txt' },
  { from: 'file2.txt', to: 'backup/file2.txt' },
  { from: 'file3.txt', to: 'backup/file3.txt' }
];

for (const file of files) {
  await controller.manageFile('copy', file.from, file.to);
  // Every operation learns automatically
  console.log(`✅ OpenClaw skill processed: ${file.from}`);
}
```

### OpenClaw Skill Error Handling
```javascript
try {
  // Execute operation that might fail
  await controller.manageProcess('stop', 'system_process');
} catch (error) {
  console.log('⚠️ OpenClaw skill operation failed:', error.message);
  
  // Record failed experience
  await controller.learnAfterUse({
    type: 'process management',
    method: 'stop system process'
  }, {
    success: false,
    error: error.message,
    solution: 'May require administrator privileges'
  });
}
```

---

## 📊 OpenClaw Skill Real-World Application Scenarios

### Scenario 1: Daily System Maintenance
```javascript
// Clean temporary files
async function cleanupTempFiles() {
  console.log('🧹 OpenClaw Skill - Temporary File Cleanup');
  
  const tempDirs = [
    'C:\\Users\\$env:USERNAME\\AppData\\Local\\Temp',
    'C:\\Windows\\Temp'
  ];
  
  for (const dir of tempDirs) {
    await controller.manageFile('delete', `${dir}\\*.tmp`);
    console.log(`✅ Cleaned: ${dir}`);
  }
  
  console.log('🎉 OpenClaw temporary file cleanup completed');
}
```

### Scenario 2: OpenClaw Automated Backup
```javascript
// Smart backup
async function smartBackup(sourceDir, backupDir) {
  console.log('💾 OpenClaw Skill - Smart Backup');
  
  // Learn before use
  await controller.learnBeforeUse('file backup');
  
  // Execute backup
  await controller.manageFile('copy', sourceDir, backupDir);
  
  // Learn from this backup experience
  await controller.learnAfterUse({
    type: 'file backup',
    method: 'recursive copy'
  }, { success: true });
  
  console.log('✅ OpenClaw backup completed');
}
```

---

## 🎯 OpenClaw Skill Usage Best Practices

### 1. Plan Before Starting
```javascript
// Define operation goal
const operationGoal = 'clean temporary files';

// Learn relevant experiences
const preLearn = await controller.learnBeforeUse(operationGoal);

// Adjust operation plan based on experience
if (preLearn.warnings.length > 0) {
  console.log('⚠️ OpenClaw skill warnings:', preLearn.warnings);
}
```

### 2. Monitor During Operation
```javascript
// Execute operation with real-time monitoring
const startTime = Date.now();

try {
  const result = await controller.manageFile('copy', largeFile, destination);
  
  const duration = Date.now() - startTime;
  console.log(`✅ OpenClaw operation completed, duration: ${duration}ms`);
  
  // Record performance information
  await controller.learnAfterUse(operation, {
    ...result,
    duration: duration
  });
  
} catch (error) {
  console.log('❌ OpenClaw operation failed:', error.message);
}
```

---

## 📈 OpenClaw Skill Learning Effect Assessment

### Progressive Improvement Example
```javascript
// Day 1: First use
console.log('Day 1 efficiency: 50%');
// Operations need to try multiple methods

// Day 7: One week later
console.log('Day 7 efficiency: 75%');
// Start applying learned methods

// Day 30: One month later
console.log('Day 30 efficiency: 90%');
// Most operations succeed on first attempt

// Day 90: Three months later
console.log('Day 90 efficiency: 98%');
// OpenClaw skill intelligence level is very high
```

---

## ❓ OpenClaw Skill Common Questions

### Q1: How to reset learning data?
**A**:
```javascript
// Backup existing experiences
const currentExperiences = controller.readExperiences();
fs.writeFileSync('backup_experiences.md', currentExperiences);

// Reset to empty experiences
fs.writeFileSync(controller.experiencesPath, '');
```

### Q2: How to export and import experiences?
**A**:
```javascript
// Export
const exportExperiences = () => {
  const data = controller.readExperiences();
  fs.writeFileSync('export.json', JSON.stringify({
    experiences: data,
    exportDate: new Date().toISOString()
  }));
};

// Import
const importExperiences = (jsonPath) => {
  const data = JSON.parse(fs.readFileSync(jsonPath));
  fs.writeFileSync(controller.experiencesPath, data.experiences);
};
```

---

## 🚀 OpenClaw Skill Advanced Tips

### Build Operation Pipeline
```javascript
// Chain multiple operations - OpenClaw skill pipeline
async function operationPipeline() {
  const steps = [
    { type: 'stop service', target: 'MyService' },
    { type: 'file backup', source: 'C:\\App', dest: 'D:\\Backup' },
    { type: 'clean files', target: 'C:\\Temp' }
  ];
  
  for (const step of steps) {
    await controller.executeStep(step);
    // Every step learns
    console.log(`✅ OpenClaw skill step completed: ${step.type}`);
  }
}
```

---

*Usage Tutorial / 使用教程 v1.0.0*  
*Updated / 更新: 2026-02-09*  
*Authors / 作者: lily (AIfriend) & VirgoLiant*  
*OpenClaw Skill - Windows Control* 🚀