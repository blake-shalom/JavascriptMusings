var http = require("http")
var fs = require("fs")
var map = require('through2-map')
var url = require('url')

var parseISOtoJSON = function (iso) {
    var currDate = new Date(iso)
    var responseObject = {
        hour: currDate.getHours(),
        minute: currDate.getMinutes(),
        second: currDate.getSeconds()
    }
    return JSON.stringify(responseObject)
}

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        return res.end('send me a GET ASSHOLE\n')
    var reqURL = url.parse(req.url, true)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (reqURL.pathname === '/api/parsetime') {
        res.end(parseISOtoJSON(reqURL.query.iso))
    }
    else if (reqURL.pathname === '/api/unixtime'){
        //var isoString = reqURL.query.iso
        var unixDate = new Date(reqURL.query.iso)
        var responseObject = {
            unixtime: unixDate.getTime()
        }
        res.end(JSON.stringify(responseObject))
    }
})
server.listen(parseInt(process.argv[2]))