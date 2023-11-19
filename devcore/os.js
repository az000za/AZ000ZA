module.exports = class OPERATINGSYSTEM {
    constructor(name, version, kernel) {
      this.name = name;
      this.version = version;
      this.kernel = kernel;
    }
  
    getName() {
      return this.name;
    }
  
    getVersion() {
      return this.version;
    }
  
    getKernel() {
      return this.kernel;
    }
  
    runProcess(process) {
      // Implement process execution logic here
    }
  }