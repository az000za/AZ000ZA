class Route {
    constructor(obj){
        this.path = obj.path;
        this.guard = obj.guard;
        // this.module = obj.module;
        this.populateUINodes = obj.populateUINodes
    }
}