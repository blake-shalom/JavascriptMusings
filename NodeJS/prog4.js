var numNewLines = function(err, data) {
    var lines = data.toString().split('\n')
    console.log(lines.length - 1)
}

var fs = require('fs')
var buf = fs.readFile(process.argv[2], numNewLines)
