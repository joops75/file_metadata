var express = require("express")
var app = express()
var multer  = require('multer')
var upload = multer({dest: 'uploads/'})
var port = (process.env.PORT || 3000)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/file-data', upload.single('doc'), function (req, res) {
  // req.file is the `doc` file
  // req.body will hold the text fields, if there were any
  res.json(req.file)
})

app.listen(port)