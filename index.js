let http = require('http')
let request = require('request')
let argv = require('yargs')
	.default('host', '127.0.0.1')
	.argv
let fs = require('fs')
let through = require('through')
let log = require('loglevel')

let scheme = 'http://'
let port = argv.port || argv.host === '127.0.0.1' ? 8000 : 80
let destinationUrl = argv.url || scheme + argv.host + ':' + port
let logFileStream = argv.logfilename ? fs.createWriteStream(argv.logfilename) : process.stdout
let testvar = argv.logfilename
let logLevel = argv.loglevel || 'info'

log.setLevel(logLevel)




http.createServer((req, res) => {
	log.info('\nINFO : Testing loglevel')
    log.warn('\nWARN : Testing loglevel')
    log.error('\nERROR : Testing loglevel')
    log.trace('\nTRACE : Testing loglevel')
    logFileStream.write('\n\nEcho Req: \n' + JSON.stringify(req.headers))
    for(let header in req.headers){
    	res.setHeader(header,req.headers[header])
    }
    through(req, logFileStream, {autoDestroy: false})
    req.pipe(res)
}).listen(8000)

http.createServer((req,res) => {
let destUrl = destinationUrl

if(req.headers['x-destination-url']){
	destUrl = req.headers['x-destination-url']
}


let options = {
	headers: req.headers,
	url: destUrl + req.url
    }
    
    logFileStream.write('\nProxy Req: \n' + JSON.stringify(req.headers))
    through(req, logFileStream, {autoDestroy: false})
    
    let destinationResponse = req.pipe(request(options))

    logFileStream.write(JSON.stringify(destinationResponse.headers))
    destinationResponse.pipe(res)
    through(destinationResponse, logFileStream, {autoDestroy: false})
}).listen(8001)
