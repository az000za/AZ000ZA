class ChatConsoleMsgs {
    constructor(app){
        console.log("module: ChatConsoleMsgs");
        const sampleObjMsg = {
            "content": "",      // The message goes here
            "createAt": "",     // The time the message was created
            "author": "",       // What user id created the message
            "id_author": "",    // The author who created the message
            "sub-link": "",     // The link for commented messages 
        }
        // the messages are made by nodes.
        console.log(app);
        // app.MindMap(app);
    }
    data = {
        "introMSGs": [
            "Generative Web Apps",
            "Hack On Anything",
            "Build Collaboratively. Social Network in one Place",
            "Get Connected on any thought w ppl & ai",
        ]
    }
    html = `
    <div class="messages" id="message-history"></div>
    `
    css = ``;
    js = {
        insertMsg(msgs){
            const m = msgs.slice().map((objMsg)=>{
                return `
                    <div>
                        <div>$USER $TIME</div>
                        <div>$Message</div>
                    </div>
                `;
            })
            return m
        } 
    };
}