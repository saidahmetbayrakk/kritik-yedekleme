const {app, BrowserWindow, Tray, Menu} = require('electron')
const path = require('path')
const url = require('url')
const dialog = app.dialog;

function selectDirectory() {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  })
}

let win = null
let tray = null

function createWindow() {

  win = new BrowserWindow({icon: 'app/img/logo.ico'})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow();

  tray = new Tray('app/img/logo.ico')
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Aç',
      accelerator: 'Alt+I',
      click: function () {
        win.show();
      }
    },
    {label: 'Çıkış',
      click: function () {
        win = null
        app.quit()
      }
    }
  ]);
  tray.setToolTip('Kritik Yedekleme')
  tray.setContextMenu(contextMenu)

  win.on('close', (event) => {
    console.log("close");
    if (!app.isQuiting) {
      event.preventDefault()
      win.hide();
    }
    return false;
  });
})