console.log(`

  wwwnodejs is a fullstack webdevelopment execution environment

  to use it just just use go on terminal and pass the commands in the shell like so

  syntax: wwwnode <htmlFileAppName>.html
  
  everything will be written in html.

  and all code from other languages such as python or javascript will be placed
  in the script tags.

  why?

  because html is advanced and simple.

  html is the highest level of a programming language and the only thing

  higher than it is Natural Language.

  and for this one main reason.

  <script src="<any url>"</script>

  it can load data from a route.

  meaning I can just import code not only from my filesystem
  but whatever is available on the web.

  imagine how much simpler everything would be if we could just code in html.
  
  Why not use React or Angular?!?!?

  * Because those codebases have a versioning dependency nightmare.
  * People learn html first
  * Frameworks are just hype trends ... Consider wwwnode to just be a suggested code design pattern to solve lots of headaches
  * Frameworks require people to go out of there way to learn especially for new versions.
  * html just needs more support
  * The end goal of a framework is to make reusable components that have no dependencies
  * Meaning the end goal is just to write html so that anyone can contribute to the web easily

`);

const args = process.argv.slice(2);
const argNodeExe  = process.argv.slice(0);
const argFileName = process.argv.slice(1);
const argHTMLFile = process.argv.slice(2);
const { spawn } = require('child_process');
const http = require("http");

// start server & open default browser

