var casper = require('casper').create();
phantom.casperTest = true;
casper.test.begin('Description of my test', 1, function(test) {
    test.assert(true);
    test.done();
    phantom.exit();
});