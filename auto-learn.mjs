// Windows-Control 自动学习系统
import fs from 'fs';
import path from 'path';

class WindowsLearningSystem {
  constructor() {
    this.experiencesPath = 'C:\\Users\\33512\\.openclaw\\workspace\\skills\\windows-control\\EXPERIENCES.md';
    this.skillPath = 'C:\\Users\\33512\\.openclaw\\workspace\\skills\\windows-control';
  }

  // 使用前：学习经验
  async learnBeforeUse() {
    console.log('🧠 读取Windows控制经验...');
    
    try {
      if (fs.existsSync(this.experiencesPath)) {
        const experience = fs.readFileSync(this.experiencesPath, 'utf8');
        console.log('✅ 经验库已加载');
        
        // 分析经验提取关键点
        const keyPoints = this.extractKeyPoints(experience);
        console.log(`📚 学到 ${keyPoints.length} 个关键经验点`);
        
        return {
          success: true,
          experience: experience,
          keyPoints: keyPoints,
          warnings: this.extractWarnings(experience)
        };
      } else {
        console.log('⚠️ 经验库不存在，将建立新经验');
        return { success: false, experience: null };
      }
    } catch (error) {
      console.log('❌ 读取经验库失败:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 使用后：更新经验
  async learnAfterUse(operation, result) {
    console.log('📝 记录这次操作经验...');
    
    try {
      let existingContent = '';
      if (fs.existsSync(this.experiencesPath)) {
        existingContent = fs.readFileSync(this.experiencesPath, 'utf8');
      }

      // 分析操作结果
      const learning = this.analyzeOperation(operation, result);
      
      // 更新经验库
      const updatedContent = this.updateExperienceLibrary(existingContent, learning);
      fs.writeFileSync(this.experiencesPath, updatedContent, 'utf8');
      
      console.log('✅ 经验库已更新');
      console.log(`📊 新增 ${learning.newInsights.length} 条经验`);
      
      return { success: true, learning: learning };
    } catch (error) {
      console.log('❌ 更新经验库失败:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 提取关键点
  extractKeyPoints(experience) {
    const keyPoints = [];
    const patterns = [
      /经验模式[:：](.+)/g,
      /最佳实践[:：](.+)/g,
      /风险提示[:：](.+)/g,
      /问题[:：](.+?)解决[:：](.+)/g
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(experience)) !== null) {
        keyPoints.push(match[0]);
      }
    });

    return keyPoints;
  }

  // 提取警告
  extractWarnings(experience) {
    const warnings = [];
    const warningPattern = /⚠️([^:：]+)/g;
    let match;
    
    while ((match = warningPattern.exec(experience)) !== null) {
      warnings.push(match[1].trim());
    }
    
    return warnings;
  }

  // 分析操作结果
  analyzeOperation(operation, result) {
    const learning = {
      operation: operation,
      timestamp: new Date().toISOString(),
      status: result.success ? '成功' : '失败',
      newInsights: [],
      bestPractices: [],
      issues: []
    };

    // 根据结果提取学习点
    if (result.success) {
      learning.newInsights.push(`成功执行${operation.type}操作`);
      if (result.optimized) {
        learning.bestPractices.push(`优化方法: ${result.optimized}`);
      }
    } else {
      learning.issues.push({
        problem: result.error,
        solution: result.solution || '待探索'
      });
    }

    return learning;
  }

  // 更新经验库
  updateExperienceLibrary(existingContent, learning) {
    const today = new Date().toISOString().split('T')[0];
    const timestamp = new Date().toLocaleString('zh-CN');
    
    // 生成更新内容
    const updateContent = `
### ${today} ${timestamp} - ${learning.operation.type}操作经验
- **操作类型**: ${learning.operation.type}
- **操作命令**: ${learning.operation.command}
- **执行状态**: ${learning.status}
- **关键结果**: ${learning.status === '成功' ? '操作正常完成' : '操作遇阻'}
`;

    if (learning.bestPractices.length > 0) {
      updateContent += learning.bestPractices.map(practice => `- ✅ ${practice}\n`).join('');
    }

    if (learning.issues.length > 0) {
      updateContent += learning.issues.map(issue => `- ⚠️ 问题: ${issue.problem}, 解决: ${issue.solution}\n`).join('');
    }

    updateContent += `---\n`;

    // 添加到经验库
    return existingContent + updateContent;
  }

  // 获取相关建议
  getSuggestions(operationType) {
    console.log(`💡 搜索${operationType}相关的建议...`);
    // 基于经验库提供操作建议
    return [
      '检查权限是否充足',
      '确认操作对象存在',
      '考虑操作影响范围',
      '准备回滚方案'
    ];
  }
}

// 导出学习系统
export { WindowsLearningSystem };

// 如果直接运行，演示学习流程
if (import.meta.url === `file://${process.argv[1]}`) {
  const learningSystem = new WindowsLearningSystem();
  
  console.log('🧪 Windows-Control 学习系统测试');
  console.log('============================\n');
  
  // 测试读取经验
  const beforeLearn = learningSystem.learnBeforeUse();
  console.log('使用前学习:', beforeLearn.success ? '成功' : '失败');
  
  // 模拟操作和学习
  const operation = {
    type: '进程管理',
    command: 'Stop-Process -Name testapp'
  };
  
  const result = {
    success: true,
    optimized: '使用-Force参数更可靠'
  };
  
  // 测试更新经验
  const afterLearn = learningSystem.learnAfterUse(operation, result);
  console.log('使用后学习:', afterLearn.success ? '成功' : '失败');
  
  console.log('\n🎉 学习系统测试完成！');
}