class Router extends UINode {
    constructor(app){
        super(app);
        this.app = app;
    }
    executeRoute(path){;
        const routeObj = this.app.routes.routes.find((routeObj)=>{
            return routeObj.path === path;
        });
        const _module = routeObj.initModule.module;
        const _instance = new _module(this)
        const html = _instance.render(this.app);
        document.getElementById("root").innerHTML = html;
        this.app.uiNodeManager.updateNodes(routeObj.populateNodes);
        // const uiNodes = routeObj.populateUINodes
        // this.app.uiNodeManager.update(uiNodes);
    }
}