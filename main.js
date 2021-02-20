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
var fs = require('fs');
function minbtn(){
  remote.getCurrentWindow().minimize()
}
function closebtn(){
  remote.getCurrentWindow().close()
}

function selezionaApp(){
  let urlFilter = document.getElementById('nomeGioco').files[0].name;

  urlFilter = urlFilter.substr(urlFilter.length-4);

  if(urlFilter == '.url'){
      let gioco = document.getElementById('nomeGioco').files[0].path;
location.href = gioco;
  }
  else{
      gioco = gioco.substr(0,gioco.length-4);
  document.getElementById('giocoUno').innerHTML = gioco ;

  }
}

function runApp(){
location.href = 'uplay://launch/635/0';

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
