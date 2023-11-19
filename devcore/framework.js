module.exports = class Framework {
    constructor(name, description, components) {
      this.name = name;
      this.description = description;
      this.components = components;
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
}