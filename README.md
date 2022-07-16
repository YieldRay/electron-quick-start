# electron-quick-start

API 文档： <https://www.electronjs.org/zh/docs/latest/api/app>  
官方示例： <https://www.electronjs.org/zh/docs/latest/tutorial/examples>  
create-electron-app: <https://github.com/SanjaySunil/create-electron-app>

编写时，electron 版本为 19，electron-forge 版本为 6 (Beta)

# 说明

/view 视图目录
main.js 入口文件  
preload.js 具有 Node.js 环境，用于向浏览器暴露 API

preview：`npx electron .` or `npx electron-forge start`

注意，在 Node.js 环境下，应当使用 CommonJS 导入模块，而非 ESModule  
否则也应当将 ESModule 编译为 CommonJS

# 构建

官方文档列出的构建工具：
<https://www.electronjs.org/zh/docs/latest/tutorial/application-distribution>

这里使用的是 electron-forge：
<https://www.electronforge.io/>

electron-forge 的配置在 package.json 文件中（或使用 forge.config.js），
其中 `name` `version` `author` `description` `config` 字段都涉及到打包  
具体参阅相关文档<https://www.electronforge.io/configuration>

rcedit 是一个命令行工具，可用于编辑 exe 文件的版本，图标等信息：<https://github.com/electron/rcedit>

```sh
# 已经安装了 @electron-forge/cli
npm install --save-dev @electron-forge/cli
npx electron-forge import

# 构建产物生成至 out/ 文件夹
npm run make
```
