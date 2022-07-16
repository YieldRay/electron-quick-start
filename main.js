// 入口文件

const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    // 加载 index.html
    mainWindow.loadFile(path.join(__dirname, "view/index.html"));

    // 打开开发工具
    // mainWindow.webContents.openDevTools()
};

app.whenReady().then(() => {
    createWindow();
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
