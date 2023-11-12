function App() {
    const __MEM__ = new (class MEM {
        constructor(){
            this.modules = Object.freeze({                  // All modules the app usees is here
                ChatBubble,             
                ChatConsole,
                ChatNavList,
                ChatWindow,
                ChatConsoleMsgs,
                ChatConsoleDynamicForms,
                UINode,
                UINodeManager,
                Seed,
                Routes,
                Router,
                Route,
            });
            this.routes = new (this.modules.Routes)(this);   // All Frontend Application routes go here
            this.route = "/gate/new";                  // if not loggedin, default route is login gate.
            this.appdata = {                       // this is where the data of all ui nodes will be, so when a component refreshes the data is still there.
                                                   
            }
            this.uiNodeManager = new this.modules.UINodeManager();
        }
        // instances:
    })();
    console.log("App: Module");
    // render test all modules
    for (let key in __MEM__.modules) {
        console.log(key);
        console.log(__MEM__.modules[key]);
        // console.log(__MEM__.modules[key]());
    }
    // ${modules.Seed(modules)()}
    new __MEM__.modules.Router(__MEM__).executeRoute(__MEM__.route);
    // gonna have to make it so all app data is one place and accessible by all each instance.
}