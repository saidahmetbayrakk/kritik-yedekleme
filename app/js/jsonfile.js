var fs = require('fs');
var backupSetings;
function getBackupsSettings() {
  backupSetings = JSON.parse(fs.readFileSync('app/backup_settings/backups.json', 'utf8'));
//  console.log(backupSetings);
  return backupSetings;
}
function writeBackupsSettings(data,fileName) {
fs.writeFileSync("app/backup_settings/"+fileName+".json", JSON.stringify(data));
//  console.log(backupSetings);
  return 1;
}

/**/
var jsonfile = require('jsonfile')
var file = '/tmp/data.json'
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})



var jsonfile = require('jsonfile')
var file = '/tmp/data.json'
 
console.dir(jsonfile.readFileSync(file))