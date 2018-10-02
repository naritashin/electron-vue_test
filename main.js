import {
  app,
  BrowserWindow
} from 'electron';
import debug from 'electron-debug';
import installExtension from 'electron-devtools-installer';

debug({
  showDevTools: true
});

app.on('ready', () => {
  installExtension(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log(err);
    });
});

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: app.getName()
  });

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
};

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit();
});

app.on('ready', createWindow);

app.on('active', () => {
  if (mainWindow === null) createWindow;
});
