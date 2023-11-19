module.exports = class Task {
    constructor(id, name, description, status, priority, dueDate) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.dueDate = dueDate;
    }
  
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      return this.description;
    }
  
    getStatus() {
      return this.status;
    }
  
    setStatus(newStatus) {
      this.status = newStatus;
    }
  
    getPriority() {
      return this.priority;
    }
  
    setPriority(newPriority) {
      this.priority = newPriority;
    }
  
    getDueDate() {
      return this.dueDate;
    }
  
    setDueDate(newDueDate) {
      this.dueDate = newDueDate;
    }
  }