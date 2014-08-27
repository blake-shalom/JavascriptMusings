var http = require("http")
var fs = require("fs")

var server = http.createServer(function (req, res) {
    var str = fs.createReadStream(process.argv[3])
    str.pipe(res)
})
server.listen(parseInt(process.argv[2]))