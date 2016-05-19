var myFilterModule = require('./06_module.js')
var folder = process.argv[2]
var extension = process.argv[3]

myFilterModule(folder, extension, function(err, data) {
    if (err)
        return console.error('There was an error:', err)

    data.forEach(function(file) {
        console.log(file)
    })
})