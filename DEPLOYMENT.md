# GitHub Pages 部署配置

## 部署步骤

### 1. 创建GitHub仓库
1. 登录GitHub
2. 点击"New repository"
3. 仓库名称：`mindgarden`（或您喜欢的名称）
4. 设置为Public（GitHub Pages需要）
5. 勾选"Add a README file"

### 2. 上传文件
将以下文件上传到仓库根目录：
- `index.html` - 主页面文件
- `config.js` - 配置文件
- `README.md` - 项目说明

### 3. 配置GitHub Pages
1. 进入仓库设置（Settings）
2. 找到"Pages"部分
3. 在"Source"下选择"Deploy from a branch"
4. 选择"main"分支和"/ (root)"文件夹
5. 点击"Save"

### 4. 访问网站
部署完成后，您的网站将在以下地址可用：
`https://yourusername.github.io/repository-name`

## 自定义配置

### 修改API密钥
1. 编辑 `config.js` 文件
2. 将 `DEEPSEEK_API_KEY` 替换为您的实际API密钥
3. 提交更改到GitHub

### 自定义域名
1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入您的域名
3. 在DNS设置中将域名指向GitHub Pages

## 注意事项

1. **API密钥安全**：不要在公开仓库中暴露真实的API密钥
2. **HTTPS**：GitHub Pages自动提供HTTPS支持
3. **缓存**：更改可能需要几分钟才能生效
4. **文件大小**：单个文件不能超过100MB

## 故障排除

### 常见问题
1. **页面无法访问**：检查仓库是否为Public
2. **样式不显示**：检查CSS文件路径是否正确
3. **API调用失败**：检查API密钥是否正确配置

### 调试方法
1. 使用浏览器开发者工具查看控制台错误
2. 检查网络请求是否成功
3. 查看GitHub Pages的部署日志
