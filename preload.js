// 桥接 Nodejs API 与 浏览器

// 预加载（preload）脚本包含了那些执行于渲染器进程中，且先于网页内容开始加载的代码 。
// 这些脚本虽运行于渲染器的环境中，却因能访问 Node.js API 而拥有了更多的权限。

// 因为预加载脚本与浏览器共享同一个全局 Window 接口，并且可以访问 Node.js API，
// 所以它通过在全局 window 中暴露任意 API 来增强渲染器，以便你的网页内容使用。

// 虽然预加载脚本与其所附着的渲染器在共享着一个全局 window 对象，
// 但您并不能从中直接附加任何变动到 window 之上，因为 contextIsolation 是默认的。

// 语境隔离（Context Isolation）意味着预加载脚本与渲染器的主要运行环境是隔离开来的，
// 以避免泄漏任何具特权的 API 到您的网页内容代码中。

/*

向 window 全局对象暴露变量，
不能：
window.variableName = "any javascript value";
应当：
const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("variableName", "any javascript value");

*/

window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    };

    for (const dependency of ["chrome", "node", "electron"]) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});
