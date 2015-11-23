'use strict'

var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')
var http = require('http')

var htdocs = 'htdocs'
var port

var serve = serveStatic(htdocs, {'index': ['index.html', 'index.htm']})


this.server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
})

exports.listen = function() {
  port = arguments[0]
  this.server.listen.apply(this.server, arguments)
  console.log('mapping '+htdocs+' to http server listening http://localhost:'+port+'/')
}

exports.close = function (callback) {
  this.server.close(callback)
}
