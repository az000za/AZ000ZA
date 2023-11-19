module.exports = class Package {
    constructor(name, author, description, version, dependencies) {
      this.name = name;
      this.author = author;
      this.description = description;
      this.version = version;
      this.dependencies = dependencies || [];
    }
  
    getName() {
      return this.name;
    }
  
    getAuthor() {
      return this.author;
    }
  
    getDescription() {
      return this.description;
    }
  
    getVersion() {
      return this.version;
    }
  
    getDependencies() {
      return this.dependencies;
    }
  
    addDependency(dependency) {
      this.dependencies.push(dependency);
    }
  
    removeDependency(dependency) {
      this.dependencies = this.dependencies.filter(dep => dep !== dependency);
    }
  
    install() {
      // Simulate installation process
      console.log(`Installing package "${this.name}"...`);
      // Install dependencies
      this.dependencies.forEach(dep => {
        console.log(`Installing dependency "${dep}"...`);
      });
      console.log(`Package "${this.name}" installed successfully.`);
    }
  
    uninstall() {
      // Simulate uninstallation process
      console.log(`Uninstalling package "${this.name}"...`);
      // Uninstall dependencies
      this.dependencies.reverse().forEach(dep => {
        console.log(`Uninstalling dependency "${dep}"...`);
      });
      console.log(`Package "${this.name}" uninstalled successfully.`);
    }
  }
  