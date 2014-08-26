module.exports  = function (directory, extension, callback) {
    var fs = require('fs')
    fs.readdir(directory, function (err, data){
        if (err)
            return callback(err)
        var found = []
        for (var i in data){
            var split = data[i].split('.')
            if (split[1] === extension) {
                found.push(data[i])
            }
        }
        return callback(null, found)
    })
};
