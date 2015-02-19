console.log('Loading a web page');
var page = require('webpage').create();
var url = 'https://www.grubhub.com/';
page.open(url, function (status) {
  //Page is loaded!
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }

  phantom.exit();
});