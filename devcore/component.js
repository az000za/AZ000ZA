class Component {
    constructor(name, description, functionality) {
      this.name = name;
      this.description = description;
      this.functionality = functionality;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    getFunctionality() {
      return this.functionality;
    }
  
    execute() {
      // Implement component's functionality here
    }
  }