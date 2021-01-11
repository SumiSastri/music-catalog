**Rate limiting against DoS (Denial of Service)**

DoS attacks will typically overwhelm your servers with requests, until your server's IO is overloaded, and therefore, shuts itself down. 

This can be prevented by eliminating the number of requests in a specific amount of time. Express Rate Limit is a midwife that should not be confused with Rate Limiter, which has a Redis dependency. 

 ```npm install express-rate-limit``` to add the dependency

Import it and instantiate it on your server. It provides you with a method with the first argument to access the windows object and set a limit for which the object can be accessed (eg. 5 minutes - in milliseconds so multiply by 60 minutes and 1000 milliseconds). You can then set a limit of 100 requests to the server in 100 minutes.

You can also add a delay - of 1000 milliseconds per requests so that prevents bots that can spit out several requests per millisecond. This could also block immersive users of your app so you may not want to do this.

Setting up these limits  prevent a DoS attack, or at least, minimizes the impact of a DoS attack if someone is trying to make many IP requests to your server, with the malicious aim of rendering you server useless.