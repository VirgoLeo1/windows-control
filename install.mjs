#!/usr/bin/env node

/**
 * Windows-Control Skill - One-click Installer
 * OpenClaw ClawHub一键安装脚本
 * 
 * Author: lily (AIfriend) & VirgoLiant
 * Version: 1.0.0
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI颜色代码
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, total) {
  log(`[${step}/${total}]`, 'blue');
}

// 获取OpenClaw技能目录
function getOpenClawSkillsDir() {
  const username = process.env.USERNAME || process.env.USER || 'unknown';
  const skillsDir = path.join('C:\\Users', username, '.openclaw', 'workspace', 'skills');
  return skillsDir;
}

// 检查依赖
function checkDependencies() {
  logStep(1, 6);
  log('🔍 检查依赖...', 'yellow');

  // 检查Node.js版本
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion < 14) {
    log('❌ Node.js版本过低！需要 >= 14.0.0', 'red');
    log(`   当前版本: ${nodeVersion}`, 'red');
    return false;
  }
  
  log(`✅ Node.js: ${nodeVersion}`, 'green');
  
  // 检查PowerShell
  exec('powershell -Command "Get-Host"', (error) => {
    if (error) {
      log('❌ PowerShell不可用', 'red');
      return false;
    }
    log('✅ PowerShell: 可用', 'green');
  });
  
  return true;
}

// 创建OpenClaw技能目录
function createSkillsDirectory() {
  logStep(2, 6);
  log('📁 创建OpenClaw技能目录...', 'yellow');
  
  const skillsDir = getOpenClawSkillsDir();
  
  if (!fs.existsSync(skillsDir)) {
    try {
      fs.mkdirSync(skillsDir, { recursive: true });
      log(`✅ 已创建: ${skillsDir}`, 'green');
    } catch (error) {
      log(`❌ 创建目录失败: ${error.message}`, 'red');
      return false;
    }
  } else {
    log(`✅ 目录已存在: ${skillsDir}`, 'green');
  }
  
  return skillsDir;
}

// 复制技能文件
function copySkillFiles(sourceDir, targetDir) {
  logStep(3, 6);
  log(`📦 复制技能文件到 ${targetDir}...`, 'yellow');
  
  const targetSkillDir = path.join(targetDir, 'windows-control');
  
  // 删除旧版本（如果存在）
  if (fs.existsSync(targetSkillDir)) {
    try {
      fs.rmSync(targetSkillDir, { recursive: true, force: true });
      log('🗑️  已删除旧版本', 'yellow');
    } catch (error) {
      log(`⚠️  删除旧版本失败: ${error.message}`, 'yellow');
    }
  }
  
  // 复制新文件
  try {
    fs.cpSync(sourceDir, targetSkillDir, { recursive: true });
    log('✅ 技能文件复制完成', 'green');
    return targetSkillDir;
  } catch (error) {
    log(`❌ 复制文件失败: ${error.message}`, 'red');
    return false;
  }
}

// 验证安装
function verifyInstallation(skillDir) {
  logStep(4, 6);
  log('✅ 验证安装...', 'yellow');
  
  const requiredFiles = [
    'package.json',
    'SKILL.md',
    '_meta.json',
    'windows-controller.mjs',
    'auto-learn.mjs'
  ];
  
  let allFilesExist = true;
  
  for (const file of requiredFiles) {
    const filePath = path.join(skillDir, file);
    if (fs.existsSync(filePath)) {
      log(`   ✅ ${file}`, 'green');
    } else {
      log(`   ❌ ${file} 缺失`, 'red');
      allFilesExist = false;
    }
  }
  
  return allFilesExist;
}

// 运行测试
function runTests(skillDir) {
  logStep(5, 6);
  log('🧪 运行测试...', 'yellow');
  
  return new Promise((resolve) => {
    const autoLearnPath = path.join(skillDir, 'auto-learn.mjs');
    
    exec(`node "${autoLearnPath}"`, (error, stdout) => {
      if (error) {
        log(`⚠️  测试运行出错: ${error.message}`, 'yellow');
        resolve(false);
      } else {
        log('✅ 学习系统测试通过', 'green');
        resolve(true);
      }
    });
  });
}

// 显示安装总结
function showSummary(skillDir, success) {
  logStep(6, 6);
  log('📊 安装总结', 'yellow');
  log('═══════════════════════════════', 'blue');
  
  log(`📍 技能目录: ${skillDir}`, 'cyan');
  log(`👥 作者: lily (AIfriend) & VirgoLiant`, 'cyan');
  log(`🎯 版本: 1.0.0`, 'cyan');
  log(`📦 类型: OpenClaw Skill - Windows Control`, 'cyan');
  
  if (success) {
    log('═══════════════════════════════', 'blue');
    log('', 'reset');
    log('🎉 安装成功！', 'green');
    log('', 'reset');
    log('🚀 快速开始:', 'cyan');
    log(`   cd "${skillDir}"`, 'reset');
    log('   npm test              # 运行测试', 'reset');
    log('   npm start             # 启动控制器', 'reset');
    log('', 'reset');
    log('📖 查看文档:', 'cyan');
    log('   README.md      # 项目介绍', 'reset');
    log('   INSTALL.md     # 安装教程', 'reset');
    log('   USAGE.md       # 使用教程', 'reset');
    log('   DEPENDENCIES.md # 依赖说明', 'reset');
    log('', 'reset');
  } else {
    log('═══════════════════════════════', 'blue');
    log('', 'reset');
    log('❌ 安装完成，但部分检查未通过', 'yellow');
    log('', 'reset');
    log('💡 请检查上面的错误信息', 'cyan');
    log('🐛 如需帮助，访问:', 'cyan');
    log('   https://github.com/VirgoLeo1/windows-control/issues', 'reset');
    log('', 'reset');
  }
}

// 主安装函数
async function main() {
  log('🚀 Windows-Control Skill 安装程序', 'blue');
  log('========================================', 'blue');
  log('', 'reset');
  
  // 获取源目录（当前目录）
  const sourceDir = __dirname;
  
  // 1. 检查依赖
  if (!checkDependencies()) {
    log('', 'reset');
    log('❌ 依赖检查失败，安装中止', 'red');
    process.exit(1);
  }
  
  // 2. 创建技能目录
  const skillsDir = createSkillsDirectory();
  if (!skillsDir) {
    log('', 'reset');
    log('❌ 无法创建技能目录，安装中止', 'red');
    process.exit(1);
  }
  
  // 3. 复制技能文件
  const skillDir = copySkillFiles(sourceDir, skillsDir);
  if (!skillDir) {
    log('', 'reset');
    log('❌ 复制技能文件失败，安装中止', 'red');
    process.exit(1);
  }
  
  // 4. 验证安装
  const verification = verifyInstallation(skillDir);
  
  // 5. 运行测试
  const tests = await runTests(skillDir);
  
  // 6. 显示总结
  showSummary(skillDir, verification && tests);
  
  // 退出码
  process.exit(verification && tests ? 0 : 1);
}

// 运行安装
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    log(`❌ 安装失败: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  });
}