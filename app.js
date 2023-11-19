const DevCore = require("./devcore/devcore.js");
console.log(DevCore);
// new DevCore()
//     .Application(
//         {
//             appName: "ChannelWeb",
//             version: "0.0.0",
//             developer: "1.a.b.c.0.0.0.x.y.z.1@gmail.com",
//             description: require("fs").readFileSync("./README.md", "utf-8"),
//             packageJSON: require("./package.json"),
//             components: [
//                 ""
//             ],
//         }
//     ).run();

new DevCore() // needs to return a client Function that executes on the DevCore Engine
    .FunC({

    })