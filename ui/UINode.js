class UINode {
    constructor(obj) {
      this.id = null;
      // this.value = value;
      // this.children = children;
      this.managedBy = obj.managedBy;
      this.name = obj.name;
      this.module = obj.module;
      this.html = obj.html;
      this.css = obj.css;
      this.methods = obj.js;
      this.data = obj.data;
      // console.log('node obj', obj);
    }
    // Method to render the node as HTML
    parse(){

    }
    render() {
      // const element = document.createElement('div');
      // element.id = this.id;
      // element.textContent = this.value;
      // element.style.color = 'blue'; // Add your styles here
      // return element;
    }
}