### What is a dotenv file?

Dotenv is a zero-dependency node module that loads environment variables from a `.env` file into `process.env` Storing configuration in the environment separate from code protects API keys, user names, passwords, etc.

Documentation: [https://www.npmjs.com/package/dotenv]
Additional reading:

- [https://help.github.com/articles/ignoring-files/ ]
- [http://zetcode.com/javascript/dotenv/]
- [https://dev.to/getd/how-to-manage-secrets-and-configs-using-dotenv-in-node-js-and-docker-2214]

## dotenv set up

`touch .env` to create a dotenv file for your mongodB in the backend folder, you can add other files as well - keep one master dotenv is best practice

```
DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.xfd8y.mongodb.net/test
```

In terminal run command `git config --global core.excludesfile ~/.gitignore_global`

Add a gitignore file - `touch .gitignore` - copy and paste code from the example `.gitignore` in this folder

To complete the dotenv set up, we need to require the `.env` module and import it `require("dotenv").config()` in the `server.js` file. This should be right at the top

TutoriaL: [https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/environment-variables]