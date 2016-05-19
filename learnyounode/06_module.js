//Asynchronous reads the contents of a directory
var fs = require('fs')
var path = require('path')

module.exports = function(folder, extension, callback) {

    fs.readdir(folder, function(err, data) {
        if (err)
            return callback(err)

        data = data.filter(function(file) {
            return path.extname(file) === '.' + extension
        })

        callback(null, data)
    })
}