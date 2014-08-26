var numNewLines = function(err, list) {
    var found = []
    for (var i in list){
        var split = list[i].split('.')
        if (split[1] === process.argv[3]) {
            found.push(list[i])
        }
    }
    for (var j in found)
        console.log(found[j])
}

var fs = require('fs')
var buf = fs.readdir(process.argv[2], numNewLines)
