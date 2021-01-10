The purpose of this documentation is to outline how the front-end of an app communicate to the back-end and some of the technologies used to make this possible with the MERN stack.

**What is the front-end (client-side)?**

The front end (client side) is based on three key languages - HTML (hyper-text-markup-language, CSS (Cascading Style Sheets) and JavaScript. JavaScript is a browser-based language that needs its host - HTML to operate its code blocks(algorithms).

Today front-end browsers are in many client devices - phone, tablet, computer screen, wrist watch. It mainly refers to the user interface with a web/mobile application.

**What is the backend (server-side)?**
Backend refers to the data, logic that the user does not see. This data is stored on non-client side devices - the cloud, physical servers and other remote devices that are not linked to front-end client-side devices (phones, tablets, computers, wristwatches, etc.)

In the front end data that have limited security risks are stored - cookies/ authentication codes, etc. User data - personal details of users, IP-protected code-bases, etc., are stored securely in non-client devices like servers or local storage in the backend. When there is data that needs to be stored securely and when there are CPU-heavy data (videos, image-manipulation, etc.) is better stored on the backend.

#### How do the front-end and back-end communicate? Client-Server API communication

HTTP (hyper-text-transfer-protocol) is the protocol, standards or rules that connect the front-end(client-side) to the back-end (server-side). HTTPS (hyper-text-transfer-protocol-secure) - encrypts the client-service request-response for enhanced security. This is done via an encryptation layer using SSL (secure sockets layer) or TLS (Transport Layer Security)

HTTP & HTTPS enable documents to be transported to and from browsers and back-end databases. It is the basis of data-exchange on the web. The browser (client) sends a request to the server (where documents are hosted) and the server sends a response. The request-response pattern (which is based on a set of rules, standards or protocols) is the language of communicaton between client (browser, front-end) and server (back-end, databases).

The backend (server side) depends on API's to run HTTP requests from databases that are written in a plurality of languages (PHP, Scala, Go-Lang, Python). Client requests are with three key languages - HTML,CSS and JavaScript. For these languages to be understood by the front-end (client-side).

The process of converting the data in javascript from a backend database in a language that is not javascript is done through JSON - javascript object notation.

## What is middleware

Middleware are simply functions that have access to the request and response object in our express application and can run their code there. It can make changes to the request response objects, can end them, can call another function in the stack using next. The `.next()` method explictly calls the next function in the stack to be executed, for the JavaScript parser. The `.end()` method likewise, explicitly calls the function calls in a block to terminate.

Middleware makes use of promises, async functions and the event loop in JavaScript.

To test middle ware, you can clog the orginal- url to make sure the middleware is fetching the right url end point and check that the method is working by requesting the method.

```
  app
    .route("/api-users/:userId")
    .get((req, res, next) => {
        <!-- tests middleware -->
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getUserById)
    // .get((req, res) =>
    //   res.send("/api-users/:userId GET- get user by Id request successful!")
    // )
```

If you go to your node console you will see the logs.

## What is the JavaScript event-loop?

Node and express provide an event-driven architecture for apps and projects. An event is a series of occurences driven by changes on the frontend. Events build up in the task queue and are executed by parsers (both in the front-end and back-end).

As JavaScript is a single-threaded non-blocking code base, it is able to deal with multiple tasks on the task queue driven by events.

For more detail on the event-loop, MDN documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop]

## What is Ajax and async JavaScript?

Ajax was created by google to allow you to make a get request (client-side) which is sent to back-end servers. The server sends back a response but instead of loading everything at the same time, a code block is run on load, and assigns only those elements that need to be re-rendered) without reloading the page whole page while data (or the payload) is sent in the background. It is a combination of tools and is mainly accessed via the global `fetch`method in browsers.

React does not have its own in-built AJAX library.

Most server-side code is parsed synchronously - which means each thread executes one function before going on to the next. JavaScript uses a single thread asynchronously to handle several front end requests at the same time.

These requests are sent as an event queue to the server side. JavaScript methods such as call back functions, promises, etc, allows the front-end call stack (requests in an event-queue) to handle all these requests and return in the response from the server side back to the client the elements that can be rendered quickly first while others that need more time to send the data later.

Async JavaScript is used extensively in connecting the backend to front-end user interfaces and forms and important part in joining up the stack. It is specifically used for single-page-applications.

Some other async methods are `setState({]})` event handlers `onClick.()` and `setTimeOUt.()` are some other examples.

For more on async JavaScript, callbacks, promises and recursion checkout Gray's Kodiri videos [https://www.youtube.com/watch?v=pX74\_\_nD48I][https://www.youtube.com/watch?v=f5xd1jnhkp8] [https://www.youtube.com/watch?v=PlhmNNNyYyogit]

## ES-6 call-backs vs. Promises

A call back is executed when one function calls another function. Map,filter and reduce are call-back functions. There is a synchronous nested functionality where one code block has to run before the other can be executed and can lead to what was known as "call-back-hell" or "the pyramid-of-doom". It was also dependent on several conditional statements

Promises serve the same purpose as call-backs were created in ES-6 to solve the call-back-hell problem with using the constructor method that takes two params - resolve and reject - the promise gets executed with a series of `.then` blocks that results in the promise ending with three states:-

- Fulfilled
- Rejected
- Pending

Promises take 2 arguments `return new Promise (resolve, reject)` followed by`.then()` blocks

## ES-8 Async Await

Async await is built on top of promises - it makes promises look like synchronous code. As JavaScript is now used both in the back-end and front-end, it helps server-side and client-side developers understand the code base. There are two key words `async` and `await` it is syntactic sugar over promises.

## What is JSON?

MongoDB is a document database, and we frequently discuss data models looking at JSON representations of documents. In addition, the MongoDB query language, and much of the administration of MongoDB, requires some level of understanding of JSON.

JSON, which is an acronym for JavaScript Object Notation, is a popular format for representing documents.When discussing MongoDB, we typically use the term JSON document to refer to such structures. But JSON object is equally correct. JSON is a widely used data format because it is both easy for humans to read and edit and easy for computers to parse and output.

JSON documents begin and end with curly braces. They're composed of fields, and each field has a key and a value. In other programming languages, JSON documents are analogous to objects, structs, maps, or dictionaries.

One big advantage of using MongoDB is that the data model used by the database closely resembles the data structures you work with in your programming language of choice.

## Why JSON?

JSON is a lightweight store of data into text so that HTTP calls can be made, parsed (interpreted) by browsers and sent back to databases. As it is a text-based format it is lightweight. It is then reconverted back into the format that the database requires. It therefore stores and transports data quickly and efficiently. Compared to XML parsing, JSON is less verbose. JSON uses less data overall so reduces cost and increases parsing speed.

The way that JavaScript is converted into JSON is to intatiate a JavaScript object to a variable. This object is then assigned to the method `JSON.parse()`. The method, parses the JavaScript object and convert this JavaScript Object (front-end, client-side language) into Java Script Obect Notation(JSON). The converted object to JSON is sent server-side: Note the syntax to convert a JS object into JSON -

`const objectName = JSON.parse ('{"name":Kodflix", "description":"some description"})'`

The backend now gets a JSON request. JSON is read and the response method used in the back-end code should convert the body of the response first into text then into JSON response with the `JSON.stringify()` method. The backend data is converted into text and intatiated to a variable that is the new response payload (data) which is text that needs to be converted back into JSON. JSON is then

`const convertToJSON = JSON.stringify({name: 'Kodflix', id: 1})`

Note the JSON vs JavaScript object syntax. JavaScript the name value pair, only if the value is a string is it in quotes, however with JSON both the name and value are in strings. JSON objects both the name and value pair are enclosed in quotes, to denote both are strings.

However, there are also similarties - curly-braces hold the values of an object, square-braces hold the values of arrays.

To visualise JSON better - add the Chrome Extension JSONView

Edureka has a good video worth watching[https://www.youtube.com/watch?v=uw_rP5bV9r0] for a more detailed understanding.

#### SOAP vs. REST?

SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST). Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted.

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on XML calls while REST on JSON. SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP, which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight becuase of JSON and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform XML data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest][https://www.codecademy.com/articles/mvc]

Quick Basics on RESTful API
What it is and how we're going to build our application around it?

In a nutshell a RESTful API is a way to transact with a back end using HTTP transactions. We use a series of calls like GET, POST, PUT, and DELETE with an HTML address to transact with our back end and its data.

So when a front end client, web, or mobile needs to do transactions with a back end, it makes a call, like for example GET, with an API end point that looks like an HTML URL. And the API responds with a success or a failure with data if need be. We use GET calls to pull the data from a back end. Then, if we need to add new data we use POST. Next, if we need to update the data we use PUT. And finally, DELETE, well, if you need to delete data.
