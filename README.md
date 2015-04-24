# NodeJS_Bootcamp_SRV
This repository is to submit projects related to Node.js bootcamp.

READ ME FILE

This project is to create a simple proxy server and a echo server that echoes the request back to us. The commands used to start the server and test it are mentioned below for each scenario that was tested. The GIF file ’srv-proxy-server-screens.gif’ has the captured screenshots for this testing.

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

