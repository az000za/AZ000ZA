const Data = require("./data.js");
module.exports = class Application {
    constructor(obj) {
      console.log("Application", obj);
      this.name = obj.appName;
      this.description = obj.description;
      this.components = obj.components;
      const props = {};
      props.name = new Data({
        fieldname: "name",
        description: "",
        type: String,
        value: obj.name,
      });
      props.description = new Data({
        fieldname: "description",
        description: "",
        type: String,
        value: obj.description,
      });
      props.components = new Data({
        fieldname: "components",
        description: "",
        type: String,
        value: props,
      });
      new Data({
        fieldname: "Application",
        description: "",
        type: String,
        value: props,
      });
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    getComponents() {
      return this.components;
    }
  
    addComponent(component) {
      this.components.push(component);
    }
  
    removeComponent(component) {
      this.components.splice(this.components.indexOf(component), 1);
    }
  
    run() {
      // Implement application logic here
      console.log("need to program method: Application.run()")
    }
  }