# Node.js Simple Web Server

> A node.js simple web server to use for data wrangling


## Dependencies

- Node.js, v8.9.4
- Express, 4.16.4


## Install and Run

- For managing different version of Node.js, install Node Version Manager (NVM) via [Chocolatey](https://chocolatey.org/).
- Check Node.js version, ` node --version `
- Install dependencies, ` npm install `
- Run a Node.js app, ` run node index.js `
- Web servers listens for HTTP requests on port 3000, browser address `localhost:3000`

## Node.js Commands

- Start the REPL (Read, Evaluate, Print, Loop) environment, ` node`
    - To exit REPL, `.exit`
    - REPL is a good place to evaluate and play with JS expressions and code snippets.
- To start a Node project,
```js
cd my-project
npm init  -y
//the -y flag automatically fills in answers to the setup questions
//Customize the project by not using -y and typing "npm init"
//This creates an npm package file, "package.json"

//Add express
npm install --save express
```
-  The ` --save ` parameter saves the dependency in package.json and tracks the version number

## Sources

- [Book/Tutorial: Data Wrangling with JavaScript by Ashley Davis](https://www.manning.com/books/data-wrangling-with-javascript0)
- [Express Web Framwork for Node.js](http://expressjs.com/)
- [Notes: Data Wrangling with JavaScript](https://github.com/EdwardRutz/dev-notes/blob/master/data-wrangling-with-js.md)
- [Chocolatey, Package Manager for Windows](https://chocolatey.org/)
- [The Data Wrangler](http://www.the-data-wrangler.com/)
- [Data-Forge](http://www.data-forge-js.com/)
- [Data-Forge Notebook](http://data-forge-notebook.com/)
