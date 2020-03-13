
//
//  ### THIS IS PRELOAD SCRIPT ###
//

const { ipcRenderer, contextBridge } = require('electron')
console.log("Hello from Preload. I can do IPC!")

// I can pollute the global scope unless contextIsolation
// is configured
//window.NodeJSBuffer = Buffer;

// I should use context bridge
 contextBridge.exposeInMainWorld('myNamespace', {
    doSomething: () => console.log('Preload: Doing something')
 });



