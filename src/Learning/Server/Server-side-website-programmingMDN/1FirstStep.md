# Server-side first steps

1. Web server - computer that store web server software and component files. This is connected to internet and interchanges data with other computer on network.
2. Software side of web server, it contains many components that helps in the exchange of data. At this minimum it has HTTP server, which is a server that reads URL and send data to client.
3. When browser wants to access data that is hoisted on web, the browser request the file via HTTP, the request reaches the web server(hardware), the HTTP server(software) accept the request, process and sends requested document, if it not finds it responds with 404.

Web Server                      <- Request             Client
Files + HTTP server             Response ->            Browser

4. Web server is of 2 types
- Static web server - consist of hardware+ HTTP server. Hoist the pages as-is to the browser 
- Dynamic web server - consist of hardware+ HTTP server + Application Server + Database. Application server updates the hoisted files before sending to browser via HTTP server.
