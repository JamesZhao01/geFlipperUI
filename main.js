const electron = require("electron");
const url = require("url");
const path = require("path");

const { ipcMain, app, BrowserWindow, Menu } = electron;
let mainWindow;
app.on("ready", function() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 1600,
    height: 900,
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file",
      slashes: true,
    }),
  );

  mainWindow.on("close", () => {
    app.quit();
  });
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  Menu.setApplicationMenu(mainMenu);
});

// handle create add window
// function createAddWindow() {
//   addWindow = new BrowserWindow({
//     width: 300,
//     height: 200,
//     title: "Add Shopping List Item",
//     webPreferences: {
//       nodeIntegration: true,
//     },
//   });

//   addWindow.loadURL(
//     url.format({
//       pathname: path.join(__dirname, "addWindow.html"),
//       protocol: "file",
//       slashes: true,
//     }),
//   );

//   addWindow.on("close", () => {
//     addWindow = null;
//   });
// }

// ipcMain.on("item:add", (e, item) => {
//   mainWindow.webContents.send("item:add", item);
//   addWindow.close();
// });

const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          createAddWindow();
        },
      },
      {
        label: "Clear Items",
        click() {
          mainWindow.webContents.send("item:clear");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];

if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Dev Tools",
    submenu: [
      {
        label: "Toggle Dev Tools",
        accelerator: "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      { role: "reload" },
    ],
  });
}
//create menu template
