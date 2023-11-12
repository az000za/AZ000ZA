class Seed {
    constructor(app){

    }
    render(){
        return `
            <style>
                #seed {
                    width: 50px;
                    height: 50px;
                    background: lightblue;
                    border-radius: 100%;
                }
            </style>
            <div id="seed" draggable="true">
            <br>
                    <center>(0_0)</center>
            </div>
        `
    }
}