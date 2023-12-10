module.exports = function Static(req, res){
    const fileName = req.url.slice(4); // need to cleanse the file name from here. need to stop directory traversal attacks.
    console.log("static route");
    require("fs")
        .readFile(
            require("path").join(__dirname, '../ui/', fileName), 
            (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                if (fileName.includes(".html)){
                    contentType = "text/javascript";
                } else {
                    throw new Error("file must be javascript");
                }
                res.writeHead(200, { 'Content-Type': contentType });
                console.log(data);
                res.end(data);
            })
}