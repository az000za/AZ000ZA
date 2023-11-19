class Module {
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    load() {
      // Simulate loading process
      console.log(`Loading module "${this.name}"...`);
      // Implement module functionality here
      console.log(`Module "${this.name}" loaded successfully.`);
    }
  
    unload() {
      // Simulate unloading process
      console.log(`Unloading module "${this.name}"...`);
      // Clean up module resources here
      console.log(`Module "${this.name}" unloaded successfully.`);
    }
}