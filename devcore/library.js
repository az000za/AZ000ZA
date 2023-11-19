class Library {
    constructor(name, description, modules) {
      this.name = name;
      this.description = description;
      this.modules = modules;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    getModules() {
      return this.modules;
    }
  
    addModule(module) {
      this.modules.push(module);
    }
  
    removeModule(module) {
      this.modules.splice(this.modules.indexOf(module), 1);
    }
  }
  