var EasyZip = require('easy-zip').EasyZip;
function createZip() { //dosyları zipler
  var zip5 = new EasyZip();
  zip5.zipFolder('C:/Users/erte/Desktop/test', function () {
    zip5.writeToFile('folderall.zip');
  });
}
