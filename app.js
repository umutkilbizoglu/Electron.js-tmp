const electron = require('electron')
const url = require('url')
const path = require('path');
const { BrowserWindow, ipcMain } = require('electron');

const { app } = electron;

let mainWindow;

app.on('ready', ()=>{

    //mainWindow properties
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    //create mainWindow
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "mainWindow.html"), 
            protocol: "file",
            slashes: true 
        })
    )
    
    //making mainWindow cannot resizable
    mainWindow.setResizable(false);
    

})