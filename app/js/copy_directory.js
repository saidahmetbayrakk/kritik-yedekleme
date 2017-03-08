var copydir = require('copy-dir');
 function copyFile(){//dosyaları kopyalar
copydir.sync('app/sources', 'app/target');
 }