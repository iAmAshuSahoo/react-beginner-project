# Intoduction to Server-side

1. Web browser send a HTTP request to the server. The request contains URL + method.
2. Static site - Browser ->Request -> Web server -> files(HTML, CSS, JavaScript, other files). GET requests.
3. Dynamic - HTML is created using inserting data from the database in the HTML template. The code reponsible to support dynamic website is known as *server-side programming or back-end scripting*.
4. Architecture of Dynamic - Browser -> GET request -> Web Server -> URL encoding, GET/POST, cookies -> Web application -> Database -> Process information -> Files(HTML template) -> Web Server -> HTTP response -> Browser.

5. Client and Server programming are same?
- They have separate concerns.
- They are coded using different programming language except JavaScript.
- They run in different OS.

6. Client-side code concerns
- Improving appearance and behavior of rendered web page.
- Styling UI components, creating layouts, navigation, form-validation.

7. Server-side code concerns which content is returned to browser in response to requests.
- validates submitted data and requests.
- use database to retrieve data.
- language - PHP, Python, Ruby, C#, and JavaScript (NodeJS).
- web devs donot have access to the OS, limited scope. Server-side has full access to server operating system and can use any programming language of their choice.
8. Devs write code in *Web Frameworks*.
- set of rules, objects, functions, designed to solve common problems, speedup development, simplify tasks faced in particular domain.

## Things that can be done on server-side
1. Efficient storage and delivery of info - eg products on Amazon or posts on FB. Creating separate static page can be completely impractical. Server-side can render the HTML using template and based on the request can frame the data and send the HTML. Else, it can also send the JSON response that can be used by client-side web frameworks.
2. Customized user-experience - Sites like google maps can use saved or current locations for providing routing informations.
Deeper analysis of user habits can be used to anticipate interests and customize responses and notificaitons.
3. Controlled access to content - Checks the authorization before giving the information.
4. Store/session state information - Allows devs to make use of sessions. Store data associated with current user and different info based on that info. For eg the medium website, when open lots of tabs, it asks for sign up after that encourages paid plans.
5. Notifications and communications - servers can send general or user-specific notificaitons via website itself or email, instant messaging.

