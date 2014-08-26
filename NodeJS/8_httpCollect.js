var http = require('http')
http.get(process.argv[2], function (response){
    response.setEncoding("utf8")
    var count =  0
    var strResponse = ""
    response.on("data", function (data){
        count += data.length
        strResponse += data 
    })
    response.on("error", console.error)
    response.on("end", function (){
        console.log(count)
        console.log(strResponse)
    })
})