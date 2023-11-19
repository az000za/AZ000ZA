// const Data = require("./data.js");
// const API = require("./api.js");
const Builder = require("./builder.js");
const Application = require("./application.js");
class DevCore {
    constructor(){
        this.techstack = { // techstack means how everything is interfaced to eachother
            AI: function(){},
            _A_L_L_: function(){
                return new _A_L_L_();
            },
            // Param: function(){
            //     return new Param();
            // },
            Computer: function(){
                return new Computer();
            },
            OperatingSystem: function(){
                return new OperatingSystem();
            },
            Data: function(){
                return new Data();
            },
            Builder: function(){
                return new Builder(this);
            },
            Program: function(){
                return new Program(...arguments);
            },
            Engine: function(){
                return new Engine(...arguments);
            },
            FunC: function(){
                return new FunC(...arguments);
            },
            // Task: function(){
            //     return new Task(...arguments);
            // },
            Module: function(){
                return new Module();
            },
            Package: function(){
                return new Package();
            },
            Component: function(){
                return new Component();
            },
            Library: function(){
                return new Library();
            },
            FrameWork: function(){
                return new FrameWork();
            },
            Server: function(){
                return new Server();
            },
            API: function(){
                return new API();
            },
            UI: function(){
                // makes any function into a form
            },
            Application: function(){
                return new Application(...arguments);
            },
        }
    }
}
module.exports = DevCore;