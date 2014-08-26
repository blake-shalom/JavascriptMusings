var http = require('http')
var bl = require('bl')


var blockingHttp = function (callback, count) {
    http.get(process.argv[2 + count], function (response){
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)
            data = data.toString()
            console.log(data)
            count++
            if (count < 3) {
                callback(callback, count)
            }
        }))
    })
}
blockingHttp(blockingHttp, 0)