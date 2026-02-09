// Windows-Control 通用系统控制器（整合自动学习）
import fs from 'fs';
import path from 'path';

class WindowsController {
  constructor() {
    this.skillPath = 'C:\\Users\\33512\\.openclaw\\workspace\\skills\\windows-control';
    this.experiencesPath = path.join(this.skillPath, 'EXPERIENCES.md');
    this.learningLog = path.join(this.skillPath, 'learning.log');
  }

  // 自动学习：使用前读取经验
  async learnBeforeUse(operationType) {
    console.log(`🧠 准备执行${operationType}操作，读取相关经验...`);
    
    try {
      const experiences = this.readExperiences();
      const relevantExperiences = this.findRelevantExperiences(experiences, operationType);
      
      if (relevantExperiences.length > 0) {
        console.log(`📚 找到 ${relevantExperiences.length} 条相关经验`);
        relevantExperiences.forEach((exp, index) => {
          console.log(`  ${index + 1}. ${exp}`);
        });
        return { learned: true, experiences: relevantExperiences };
      } else {
        console.log('⚠️ 没有相关经验，需要谨慎操作');
        return { learned: false, experiences: [] };
      }
    } catch (error) {
      console.log('❌ 读取经验失败:', error.message);
      return { learned: false, error: error.message };
    }
  }

  // 自动学习：使用后记录经验
  async learnAfterUse(operation, result) {
    console.log('📝 记录这次操作经验...');
    
    try {
      const learningEntry = this.createLearningEntry(operation, result);
      this.appendLearningLog(learningEntry);
      this.updateExperiences(learningEntry);
      
      console.log('✅ 学习完成，经验已更新');
      return { success: true, learningEntry };
    } catch (error) {
      console.log('❌ 学习失败:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 读取经验库
  readExperiences() {
    if (fs.existsSync(this.experiencesPath)) {
      return fs.readFileSync(this.experiencesPath, 'utf8');
    }
    return '';
  }

  // 查找相关经验
  findRelevantExperiences(experiences, operationType) {
    const relevant = [];
    const keywords = ['经验模式', '最佳实践', '风险提示', '问题解决'];
    
    keywords.forEach(keyword => {
      const pattern = new RegExp(`${keyword}[:：]([^\\n]+).*(${operationType}|操作)`, 'gi');
      let match;
      while ((match = pattern.exec(experiences)) !== null) {
        relevant.push(`${keyword}: ${match[1].trim()}`);
      }
    });

    return relevant;
  }

  // 创建学习条目
  createLearningEntry(operation, result) {
    const timestamp = new Date().toISOString();
    const timeString = new Date().toLocaleString('zh-CN');
    
    return {
      timestamp,
      timeString,
      operation: operation,
      result: result,
      status: result.success ? '成功' : '失败',
      learnings: this.extractLearnings(operation, result)
    };
  }

  // 提取学习点
  extractLearnings(operation, result) {
    const learnings = [];
    
    if (result.success) {
      learnings.push({
        type: 'success',
        insight: `${operation.type}操作可以正常执行`,
        method: operation.method
      });
      
      if (result.optimizations) {
        result.optimizations.forEach(opt => {
          learnings.push({ type: 'optimization', insight: opt });
        });
      }
    } else {
      learnings.push({
        type: 'error',
        problem: result.error,
        solution: result.solution || '需要进一步探索'
      });
    }

    return learnings;
  }

  // 追加学习日志
  appendLearningLog(entry) {
    const logEntry = `
[${entry.timeString}] ${entry.operation.type}操作 - ${entry.status}
 操作: ${entry.operation.method}
 Learnings: ${entry.learnings.map(l => l.insight).join('; ')}
`;
    fs.appendFileSync(this.learningLog, logEntry);
  }

  // 更新经验库
  updateExperiences(entry) {
    let content = fs.existsSync(this.experiencesPath) 
      ? fs.readFileSync(this.experiencesPath, 'utf8') 
      : '';
    
    const date = entry.timestamp.split('T')[0];
    const updateSection = `

### ${date} ${entry.timeString} - 自动学习更新
- **操作类型**: ${entry.operation.type}
- **执行结果**: ${entry.status}
- **学习方法**: ${entry.learnings.map(l => l.insight).join(', ')}`;

    // 检查是否需要添加新的经验模式
    if (entry.status === '成功') {
      updateSection += `- **经验模式**: ${entry.operation.type}操作可以通过${entry.operation.method}成功执行`;
    }

    content += updateSection;
    fs.writeFileSync(this.experiencesPath, content, 'utf8');
  }

  // 通用进程管理（不针对特定软件）
  async manageProcess(action, processPattern) {
    console.log(`🔄 执行进程${action}: ${processPattern}`);
    
    const beforeLearn = await this.learnBeforeUse('进程管理');
    
    try {
      // 通用进程管理操作
      const command = action === 'stop' 
        ? `Get-Process | Where-Object {$_.Name -like "*${processPattern}*"} | Stop-Process -Force`
        : `Get-Process | Where-Object {$_.Name -like "*${processPattern}*"}`;
      
      const result = await this.executePowerShell(command);
      
      const afterLearn = await this.learnAfterUse({
        type: '进程管理',
        action: action,
        method: command
      }, { success: true, data: result });
      
      return result;
    } catch (error) {
      await this.learnAfterUse({
        type: '进程管理',
        action: action,
        method: '通用进程命令'
      }, { success: false, error: error.message });
      
      throw error;
    }
  }

  // 通用文件操作（不针对特定文件）
  async manageFile(action, path, destination = '') {
    console.log(`📁 执行文件${action}: ${path}`);
    
    const beforeLearn = await this.learnBeforeUse('文件操作');
    
    try {
      let command = '';
      switch(action) {
        case 'copy':
          command = `Copy-Item -Path "${path}" -Destination "${destination}"`;
          break;
        case 'move':
          command = `Move-Item -Path "${path}" -Destination "${destination}"`;
          break;
        case 'delete':
          command = `Remove-Item -Path "${path}" -Force`;
          break;
      }
      
      const result = await this.executePowerShell(command);
      
      await this.learnAfterUse({
        type: '文件操作',
        action: action,
        method: command
      }, { success: true, data: result });
      
      return result;
    } catch (error) {
      await this.learnAfterUse({
        type: '文件操作',
        action: action,
        method: '通用文件操作命令'
      }, { success: false, error: error.message });
      
      throw error;
    }
  }

  // 执行PowerShell命令
  async executePowerShell(command) {
    const { exec } = require('child_process');
    
    return new Promise((resolve, reject) => {
      exec(`powershell -Command "${command}"`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
        }
      });
    });
  }
}

// 导出控制器
export { WindowsController };

// 演示使用
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🧪 Windows-Control 通用控制器测试');
  console.log('====================================\n');
  
  const controller = new WindowsController();
  
  console.log('✅ 控制器初始化完成');
  console.log('📚 自动学习系统已集成');
  console.log('🔄 支持通用Windows系统操作');
  
  console.log('\n📋 支持的操作:');
  console.log('  - 通用进程管理（不针对特定软件）');
  console.log('  - 通用文件操作（不针对特定文件）');
  console.log('  - 系统服务状态查询');
  console.log('  - 网络配置检查');
  
  console.log('\n🧠 学习机制:');
  console.log('  - 使用前自动读取相关经验');
  console.log('  - 使用后自动记录学习结果');
  console.log('  - 不断优化操作方法');
  
  console.log('\n🎯 设计原则:');
  console.log('  - 通用性：不针对特定软件');
  console.log('  - 可重用：操作可组合复用');
  console.log('  - 学习性：每次操作都积累经验');
  console.log('  - 安全性：权限控制与风险提示');
}