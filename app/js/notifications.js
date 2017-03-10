var path = require('path');
var options = [
  {
    title: "Kritik Yedekleme",
    body: "Yedekleme Programı Çalışıyor"
  },
  {
    title: "Kritik Yedekleme",
    body: "Yedekleme Programı Çalışıyor",
    icon: path.join('img/logo.png')
  }
]

function doNotify(evt) {
    new Notification(options[1].title, options[1]);
}

doNotify();