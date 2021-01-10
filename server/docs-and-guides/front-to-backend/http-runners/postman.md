The purpose of this documentation is to outline how Postman works as an HTTP runner. It is used in this repo to test back-end routes

## What is Postman?

Postman is built on electron (a javascript library that helps build FE apps). It used to be a chrome extension but now is a stand alone product.

You need to create an account. Once you sign up you can check your routes and see if they work. If your server is connected, it is a good way to test your 

Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.
You can use Postman is a http runner that helps you visualise and test the data in your app.

You can test all 4 CRUD routes with Postman routes and seed your database.

1. Create an account
2. Choose the language you want to test in
3. Select body
4. Select raw & JSON
5. Create a JSON object for your route `{ "name": "Janak", "message": "Namaste"}`
6. Check that the server is connected
7. Use the localhost you have set up in your server [http://localhost:5000/messages]
8. POST - send your data - go to your route and check the data in the local host you should see your data in the browser `[{"name":"Tim","message":"Hi"},{"name":"Jane","message":"Hello"},{"name":"Janak","message":"Namaste"}]`
9. PUT - updates data and DELETE - all of these are id based routes and need an id to identify the exact resource you wan to get, update or delete
10. Look at the code link when you are building the front-end, it is useful witht the Fetch API - it gives you snippets of code depending on what is the language order protocol you're using. For JavaScript - thejQuery AJAX or XHR and know JS are useful.


