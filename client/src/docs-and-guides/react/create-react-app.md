Create React App
Documentation [https://create-react-app.dev/] & getting started[https://create-react-app.dev/docs/getting-started]
CodeCademy[https://www.codecademy.com/articles/how-to-create-a-react-app]

Full-stack:
Package-json & adding a proxy

- Create a back-end proxy for your server in your client side package json file
- This is created as soon as you run the Create-React-App installation
- Under the scripts object add one more key-value pair ```	"proxy": "http://localhost:5000",```
This allows you access to your home route on the back-end router - if you have chosen a differnt port all your need to do is replace the port number 	```"proxy": "http://localhost:yourportnumber",```

Concurrently now becomes an interesting library to add if you are going full stack - look at the docs in the server-side documentation