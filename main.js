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


  win.onbeforeunload = (e) => {
    console.log('I do not want to be closed')

    // Unlike usual browsers that a message box will be prompted to users, returning
    // a non-void value will silently cancel the close.
    // It is recommended to use the dialog API to let the user confirm closing the
    // application.
    e.returnValue = false
  }

  win.on('close', (e) => {
    console.log("close");
//    console.log(e);

    createWindow();
//  event.preventDefault();
    win.hide();

    tray = new Tray('app/img/logo.ico')
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Aç',
        accelerator: 'Alt+I',
        click: function () {
          win.show();
//        win.toggleDevTools();
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
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
//    win = null
  })
  win.on('closed', (e) => {
    console.log("closed");
//    console.log(e);
    e.returnValue = false
  })

  win.onbeforeunload = (e) => {
    console.log('I do not want to be closed')

    // Unlike usual browsers that a message box will be prompted to users, returning
    // a non-void value will silently cancel the close.
    // It is recommended to use the dialog API to let the user confirm closing the
    // application.
    e.returnValue = false
  }
  win.unload  = (e) => {
  console.log('I do not want to be closed')

  // Unlike usual browsers that a message box will be prompted to users, returning
  // a non-void value will silently cancel the close.
  // It is recommended to use the dialog API to let the user confirm closing the
  // application.
  e.returnValue = false
}

})

app.on('window-all-closed', () => {
//  if (process.platform !== 'darwin') {
//    app.quit()
//  win.hide();
//  }
})

app.on('activate', () => {
  if (win == null) {
//    createWindow()
  }
})

