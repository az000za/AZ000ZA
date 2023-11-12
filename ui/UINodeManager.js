class UINodeManager{
  // manages the nodes.
  // manages how memory is shared between them
  constructor(){
      this.uiNodes = {};
      this.ids = 0;
      this.seeds = {};
  }
  addNode(uiNodes){
    if (!Array.isArray(uiNodes)) {
      uiNodes = [uiNodes];
    }
    console.log("uiNodes", uiNodes);
    uiNodes.forEach(uiNode=>{
      uiNode.id = this.ids++;
      if (Object.hasOwnProperty(uiNode.id)) throw new Error();
      else {
        this.uiNodes[uiNode.id] = uiNode;
      }
    });
  }
  removeNode(){
    // need to delete node and ?unrender?
    delete this.uiNodes[id];
  }
  update(uiNodes){
    console.log("update ... not sure what to do here");
  }
  render(app){
    console.log("render");
    Object.values(this.uiNodes).forEach((uiNode, index)=>{
      console.log("rendering: "+index, uiNode);
      // console.log('module', uiNode.module);
      let _class = uiNode.module;
      let instance = new _class(app);
      // console.log("instance", instance);
      let html = instance.html;
      let css = instance.css;
      let js = instance.js;
      let allHTML = css + html;
      // console.log(html);
      // console.log(css);
      // console.log(js);
      // if html contains atrribute module, then need to load the module
      // console.log(allHTML);
      this.parse(allHTML);
      // uiNode.render();
    })
    // Object.values(this.uiNodes).forEach((uiNode, index)=>{
    //   document.getElementById("root").appendChild(uiNode);
    // });
  }
  parse(html){
    /**
     * only allowed to use div tag
     */
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const divs = doc.querySelectorAll('div');
    console.log('divs', divs);
    const parentDiv = divs[0];
    document.getElementById("root").appendChild(parentDiv)
    // parentDiv.forEach((childDivNode)=>{
    //     console.log('childDivNode', childDivNode);
    //     if (childDivNode.localName !== "div") {
    //       throw new Error("only divs supported");
    //     } else {
    //       // if (attributes.hasOwnProperty("module")) {
    //       //   // wait for load
    //       // }
    //       this.addNode(childDivNode);
    //     }
    // })
  }
}