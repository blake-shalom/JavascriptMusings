var net = require('net')
var strftime = require('strftime')

var server = net.createServer(function (socket) {
    var date = strftime('%F %H:%M', new Date()) + "\n"
    socket.end(date)
})
server.listen(parseInt(process.argv[2]))