var EasyZip = require('easy-zip').EasyZip;
function createZip(source, target, fileName) { //dosyları zipler
//  source = source.replace(/\//g, '\\').replace(/\\/g, '\\');
//  target = target.replace(/\//g, '\\').replace(/\\/g, '\\');
  var zip5 = new EasyZip();


//  str = "D:\GitHub\kritik-yedekleme\app\js";
//    str="D://GitHub//kritik-yedekleme//app//js";

//  path = str.replace(/\//g, '\\').replace(/\\/g, '\\')
  source = source.replace(/\\/g, "/");
  console.log(source);

  target = target.replace(/\\/g, "/");
  console.log(target);
  zip5.zipFolder(source, function () {
    zip5.writeToFileSycn(target+'/'+fileName+'.zip');
  });
}
