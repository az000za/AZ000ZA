class Router{
    constructor(app){
        this.app = app;
    }
    executeRoute(path){
        console.log("routes ...");
        console.log(this.app.routes.routes);
        const route = this.app.routes.routes.find((obj)=>{
            console.log("obj path", obj.path)
            return obj.path === path
        });
        // console.log(".......", uiNodes.populateUINodes);
        this.app.uiNodeManager.addNode(route.populateUINodes);
        this.app.uiNodeManager.update();
        this.app.uiNodeManager.render(this.app);
    }
}