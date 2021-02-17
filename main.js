const {app,BrowserWindow,remote} = require('electron')
let win = null;
app.on('ready',() => {
  win = new BrowserWindow({
    width: 550,
    height: 700,
resizable: false,
    frame: false,
    webPreferences: {
        nodeIntegration: true, 
        enableRemoteModule: true
    }
  })
  win.loadFile('index.html')
})
function minbtn(){
  remote.getCurrentWindow().minimize()
}
function closebtn(){
  remote.getCurrentWindow().close()
}

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
