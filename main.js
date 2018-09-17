import {
  app,
  BrowserWindow
} from 'electron';

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

app.on('ready', () => createWindow);

app.on('active', () => {
  if (mainWindow === null) createWindow;
});
