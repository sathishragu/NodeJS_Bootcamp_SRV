# NodeJS_Bootcamp_SRV
This is pre-work done for NodeJs prework.

COMPLETED

Time Spent: [4 hrs]

[DONE] Required: Requests to port 8000 are echoed back with the same HTTP headers and body

[DONE] Required: Requests/reponses are proxied to/from the destination server

[DONE] Required: The destination server is configurable via the --host, --port or --url arguments

[DONE] Required: The destination server is configurable via the x-destination-url header

[DONE] Required: Client requests and respones are printed to stdout

[DONE] Required: The --logfile argument outputs all logs to the file specified instead of stdout

[DONE] Optional: The --loglevel argument sets the logging chattiness

[todo] Optional: The --exec argument proxies stdin/stdout to/from the destination program

[todo] Optional: Supports HTTPS

[todo] Optional: -h argument prints CLI API

STEPS TO TEST :

1) To check whether the echo server echoes the request back to us

Start server : nodemon --exec babel-node -- index.js

Curl command : curl -v http://127.0.0.1:8000 -H 'x-testheader : headervalue' -d 'hello Sathish’

2) To check whether the proxy server works fine by sending the request to echo server and sending the response back to us

Start Server : nodemon --exec babel-node -- index.js

Curl command : curl -v http://127.0.0.1:8001 -H 'x-testheader : headervalue' -d 'hello Sathish’

3) To check whether the CLI works fine

Start server : nodemon --exec babel-node -- index.js --host ‘www.google.com'

Curl command : curl -v http://127.0.0.1:8001 -H 'x-testheader : headervalue' -d 'hello Sathish’

4) To check whether logs are getting printed in the stout

Start server : nodemon --exec babel-node -- index.js

Curl command : curl -v http://127.0.0.1:8001 -H 'x-testheader : headervalue' -d 'hello Sathish’

5) To check whether logs are getting printed in the log file specified

Start server : nodemon --exec babel-node -- index.js  --logfilename /tmp/srv-proxy-server.log

Curl command : curl -v http://127.0.0.1:8001 -H 'x-testheader : headervalue' -d 'hello Sathish’

6) To check whether appropriate level of logs are getting printed in 'loglevel' arg is passed

Start server : nodemon --exec babel-node -- index.js --loglevel 'trace'

Curl command : curl -v http://127.0.0.1:8001 -H 'x-testheader : headervalue' -d 'hello Sathish’

![alt tag](https://github.com/sathishragu/NodeJS_Bootcamp_SRV/blob/Project_0_ProxyServer/srv_proxy_server_screen.gif)

