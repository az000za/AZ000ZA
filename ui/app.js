function App() {
    const __MEM__ = new (class MEM {
        constructor(){
            this.modules = Object.freeze({                  // All modules the app usees is here
                // ChatBubble,             
                ChatConsole,
                ChatNavList,
                ChatWindow,
                ChatConsoleHeader,
                ChatConsoleMsgs,
                ChatConsoleDynamicForms,
                UINode,
                UINodeManager,
                Seed,
                Routes,
                Router,
                Route,
            });
            this.routes = new this.modules.Routes(this);   // All Frontend Application routes go here
            this.route = "/gate/new"; // if not loggedin, default route is login gate.
            this.appdata = { // this is where the data of all ui nodes will be, so when a component refreshes the data is still there.
                
            }
            this.uiNodeManager = new this.modules.UINodeManager(this);
            this.router = new this.modules.Router(this).executeRoute(this.route);
        }
        // instances:
    })();
}