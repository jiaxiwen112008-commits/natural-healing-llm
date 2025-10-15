// config.js
// DeepSeek API 配置
// 请将您的API密钥替换到下面的配置中

const CONFIG = {
    // DeepSeek API 配置
    DEEPSEEK_API_KEY: 'sk-b6c7c8c460e14cc0bf2dc5de2bc3e0bc', // 请替换为您的实际API密钥
    DEEPSEEK_API_URL: 'https://api.deepseek.com/v1/chat/completions',
    
    // 应用配置
    APP_NAME: 'MindGarden',
    APP_VERSION: '1.0.0',
    
    // 评估配置
    MAX_SCORE: 20, // 问卷最高分数
    LOW_STRESS_THRESHOLD: 30, // 低压力阈值（百分比）
    MEDIUM_STRESS_THRESHOLD: 60, // 中等压力阈值（百分比）
    
    // 聊天配置
    MAX_CHAT_MESSAGES: 50, // 最大聊天消息数
    CHAT_RESPONSE_DELAY: 1000, // 聊天回复延迟（毫秒）
};

// 导出配置（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
