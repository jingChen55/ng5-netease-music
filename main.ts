import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import { Browser } from 'selenium-webdriver';

let win, loginWin, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

if (serve) {
  require('electron-reload')(__dirname, {
  });
}

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
  const defaultWidth = 1003;
  const defaultHeight = 670;

  // Create the browser window.
  win = new BrowserWindow({
    center: true,
    width: defaultWidth,
    height: defaultHeight,
    minWidth: defaultWidth,
    minHeight: defaultHeight,
    frame: false,
    title: '网易云音乐',
    transparent: true,
    hasShadow: true
  });

  // loginWin = new BrowserWindow({
  //   center: true,
  //   parent: win,
  //   frame: false,
  //   show: false,
  //   width: 350,
  //   height: 500
  // });

  // loginWin.loadURL('file://' + __dirname + '/../login/index.html');
  // loginWin.once('ready-to-show', () => {
  //   loginWin.show()
  // });
  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    loginWin = null;
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
