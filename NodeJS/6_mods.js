var findFilesExt = require('./6_mymodule.js')
findFilesExt(process.argv[2], process.argv[3], function (err, data){
    if (err)
        console.log("THERE is an err")
    else {
        for (var i in data) {
            console.log(data[i])
        }
    }
})
