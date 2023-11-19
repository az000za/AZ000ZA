class SERVER {
    constructor(name, description, address, port) {
      this.name = name;
      this.description = description;
      this.address = address;
      this.port = port;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    getAddress() {
      return this.address;
    }
  
    getPort() {
      return this.port;
    }
  
    start() {
      // Implement server startup logic here
    }
  
    stop() {
      // Implement server shutdown logic here
    }
}