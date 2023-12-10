const fs = require("fs");
const path = require("path");
module.exports = function Site(req, res){
    console.log("path: site");
    fs.readFile(path.join(__dirname, '../', 'app.frontend.html'), (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
}