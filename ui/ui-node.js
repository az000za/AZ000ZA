class UINode {
    id = null;
    constructor(app){
        console.log("ui node", this);
        console.log("app", app);
        console.log("uiNodeManager", app.uiNodeManager);
        app.uiNodeManager.insertNode(this);
    }
}