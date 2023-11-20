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
`);

const args = process.argv.slice(2);
const argNodeExe  = process.argv.slice(0);
const argFileName = process.argv.slice(1);
const argHTMLFile = process.argv.slice(2);
const { spawn } = require('child_process');
const http = require("http");

// start server & open default browser

const { exec } = require('child_process');
const url = argFileName;

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
server.listen(3000, () => {
  console.log('Server listening on port 3000');

  setTimeOut(exec(`open ${url}`), 2000);
});
