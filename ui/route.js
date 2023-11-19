class Route {
    constructor(obj){
        // super();
        this.path = obj.path;
        this.guard = obj.guard;
        this.initModule = obj.initModule;
        this.populateUINodes = obj.populateUINodes
    }
}