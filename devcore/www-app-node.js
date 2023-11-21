console.log(`

  wwwnodejs is a fullstack webdevelopment execution environment

  to use it just just use go on terminal and pass the commands in the shell like so

  syntax: wwwnode <htmlFileAppName>.html
  
  everything will be written in html.

  and all code from other languages such as python or javascript will be placed
  in the script tags.

  why?

  because html is advanced and simple.
  html is customizable in a sense you can just create your
  own html tags and supported attributes
  and there is no reason to use frameworks, just a design a different
  perspective of how to use html.

  html is the highest level of a programming language and the only thing
  higher than it is Natural Language.
  and for this one main reason.
  
  <script type="<file type>" src="<any url>"</script>
  
  it can load any data from a route that the browser supports.

  meaning I can just import code not only from my filesystem
  but whatever is available on the web.

  boom there you have it, no more complexity of dealing with low level or backend
  languages. and why do they call it node.js if you still have
  to go through a few steps to put your code on the internet.
  html just needs a config form script that auto deploys everything you work on.
  such as 
  <script type="" src="./DeployThisApp.js"></script>

  imagine how much simpler everything would be if we could just code in html.

  Why not use React or Angular?!?!?
  * People learn html as there first programming language.
  * Because those frameworks have a versioning dependency nightmare.
  * Because there code goes straight to html
  * Frameworks are just hype trends ... Consider wwwnode to just be a suggested code design pattern to solve lots of headaches
  * Frameworks require people to go out of there way to learn especially for new versions.
  * The end goal of a framework is to make reusable components that have no dependencies
  * Meaning the end goal is just to write html so that anyone can contribute to the web easily
  * This makes app development a web first approach and most applications are just text documents
  * So most things should just be written in component called a simple html document
  * that uses the url router
  * HTML is supported by the browser so we use html

  When you think of HTML
    think of a language that supports everything
    because the browser supports whatever extensions people add to it.
    Especially other programming languages.

  HTML can even be used for storing structured data or even used
  for your database models.

  And heres even the best part about html.
  It's already in an app form so every function we
  write comes with a generic interface at the minimum.

  Features:
  (INCOMPLETE) Needs to intake an app html file and open default browser.
  (INCOMPLETE) Needs to be able to extract and conclude information from any html file and determine what information to fill in or not to make an application.
              (INCOMPLETE) Needs to serve the app seed ... App seed is the baremin code to stay updated while seed is cached such as index.html that never changes.
              (INCOMPLETE) Needs to make a route for every function so the client side has access to all nodejs functionality.
              (INCOMPLETE) Needs to build backend routes for the html file and the resources it requires.
              (INCOMPLETE) Needs to save all resources locally incase cdns lose service.
  (INCOMPLETE) Needs to be able to Deploy to some kind of computer that faces the internet such as cloud services              
`);

const args = process.argv.slice(2);
const argNodeExe  = process.argv.slice(0);
const argFilePath = process.argv.slice(1);
const argHTMLFile = process.argv.slice(2);
const { spawn } = require('child_process');
const http = require("http");

// start server & open default browser

const { exec } = require('child_process');
const url = argFilePath;

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.sendFile(argFilePath);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
server.listen(3000, () => {
  console.log('Server listening on port 3000');

  setTimeOut(exec(`open ${url}`), 2000);
});







// // const mongoose = require('mongoose');

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// //     .then(() => {
// //         console.log('Connected to MongoDB!');
// //         return true;
// //     })
// //     .catch((error) => {
// //         console.error('Error connecting to MongoDB:', error);
// //         return false;
// //     });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');


// const Site = require("./controllers/controller.site.js");
// const Static = require("./controllers/controller.static.js");
// // const AI = require("./controllers/controller.ai.js");
// // const Auth = require("./")

// const server = http.createServer((req, res) => { // onRequest
//   // controller per route
//   if   (req.url.startsWith('/ui'))         Static(req,res);
//   // else if   (req.url === "/ai")      AI()(req,res);
//   // else if   (req.url === "/auth")    Auth()(req,res);
//   // else if   (req.url === "/gendata") GenData()(req,res);
//   else if        (req.url.startsWith('/'))           Site(req,res);
//   else {
//     // SendError();
//     throw new Error("path not supported:"+req.url);
//   }
// });

// server.listen(8080, () => console.log('Server running on port 8080'));


