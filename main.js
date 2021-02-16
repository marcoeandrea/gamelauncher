const {app, BrowserWindow} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 550,
    height: 700,
    frame: false,
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



function selezionaApp(){
  let gioco = document.getElementById('nomeGioco').files[0].name;
  let ico = document.getElementById('nomeGioco').files[0].path;
  gioco = gioco.substr(0,gioco.length-4);
  document.getElementById('giocoUno').innerHTML = gioco ;
}
function runApp(){
  let gioco = document.getElementById('nomeGioco').files[0].path;
  var child = require('child_process').execFile;

child(gioco, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});
};
