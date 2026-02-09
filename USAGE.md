# Windows-Control 使用教程

## 📚 基础概念

### 技能架构
```
用户请求
    ↓
learnBeforeUse() → 读取经验 → 应用最佳实践
    ↓
执行Windows操作
    ↓
learnAfterUse() → 分析结果 → 记录学习
    ↓
更新经验库 → 为未来操作提供参考
```

### 自动学习原理
- **经验积累**: 每次操作都在学习
- **模式识别**: 从历史操作中识别成功模式
- **风险识别**: 基于失败经验识别风险
- **持续优化**: 不断改进操作方法

---

## 🎯 基础使用

### 1. 初始化控制器
```javascript
import { WindowsController } from './windows-controller.mjs';

// 创建控制器实例
const controller = new WindowsController();

// 检查系统状态
console.log('✅ 控制器已初始化');
```

### 2. 进程管理示例
```javascript
// 查找进程
await controller.manageProcess('list', 'chrome');

// 停止进程（自动学习）
await controller.manageProcess('stop', 'notepad');

// 启动进程
await controller.manageProcess('start', 'calc.exe');
```

### 3. 文件操作示例
```javascript
// 复制文件
await controller.manageFile('copy', 'source.txt', 'backup/source.txt');

// 移动文件
await controller.manageFile('move', 'temp.txt', 'archive/old.txt');

// 删除文件
await controller.manageFile('delete', 'unused.txt');
```

---

## 🧠 自动学习使用

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
console.log('进程管理经验:', processExperiences);
```

---

## 🔧 高级功能

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
}
```

### 错误处理
```javascript
try {
  // 执行可能失败的操作
  await controller.manageProcess('stop', 'system_process');
} catch (error) {
  console.log('⚠️ 操作失败:', error.message);
  
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

## 📊 实际应用场景

### 场景1：日常系统维护
```javascript
// 清理临时文件
async function cleanupTempFiles() {
  const tempDirs = [
    'C:\\Users\\$env:USERNAME\\AppData\\Local\\Temp',
    'C:\\Windows\\Temp'
  ];
  
  for (const dir of tempDirs) {
    await controller.manageFile('delete', `${dir}\\*.tmp`);
  }
  
  console.log('✅ 临时文件清理完成');
}
```

### 场景2：自动化备份
```javascript
// 智能备份
async function smartBackup(sourceDir, backupDir) {
  // 使用前学习
  await controller.learnBeforeUse('文件备份');
  
  // 执行备份
  await controller.manageFile('copy', sourceDir, backupDir);
  
  // 学习这次备份的经验
  await controller.learnAfterUse({
    type: '文件备份',
    method: '递归复制'
  }, { success: true });
}
```

---

## 🎯 使用最佳实践

### 1. 开始前规划
```javascript
// 明确操作目标
const operationGoal = '清理临时文件';

// 学习相关经验
const preLearn = await controller.learnBeforeUse(operationGoal);

// 根据经验调整操作计划
if (preLearn.warnings.length > 0) {
  console.log('⚠️ 风险提示:', preLearn.warnings);
}
```

### 2. 操作中监控
```javascript
// 执行操作并实时监控
const startTime = Date.now();

try {
  const result = await controller.manageFile('copy', largeFile, destination);
  
  const duration = Date.now() - startTime;
  console.log(`✅ 操作完成，耗时: ${duration}ms`);
  
  // 记录性能信息
  await controller.learnAfterUse(operation, {
    ...result,
    duration: duration
  });
  
} catch (error) {
  console.log('❌ 操作失败:', error.message);
}
```

---

## 📈 学习效果评估

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
// 智能化程度很高
```

---

## ❓ 常见使用问题

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

## 🚀 进阶技巧

### 构建操作流水线
```javascript
// 将多个操作串联
async function operationPipeline() {
  const steps = [
    { type: '停止服务', target: 'MyService' },
    { type: '文件备份', source: 'C:\\App', dest: 'D:\\Backup' },
    { type: '清理文件', target: 'C:\\Temp' }
  ];
  
  for (const step of steps) {
    await controller.executeStep(step);
    // 每一步都在学习
  }
}
```

---

**使用教程版本**: 1.0.0  
**更新时间**: 2026-02-09  
**作者**: lily (AIfriend) & VirgoLiant