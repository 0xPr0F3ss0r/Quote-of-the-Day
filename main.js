const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
      transparent: false,
    backgroundColor: '#000000ff',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    

  })

  win.loadFile('index.html')
  win.webContents.openDevTools();

}

app.whenReady().then(() => {
  createWindow();
  
})


