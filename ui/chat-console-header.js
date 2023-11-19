class ChatConsoleHeader extends UINode {
    constructor(app){
        super(app);
    }
    html = `
    <div class="header">
        <div class="channel">
            <div class="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <button>INVITE</button>
            <div>
                www.channelweb.com/0/www.google.com
            </div>
        </div>
    </div>
    `;
    css = `
    
    `;
    js = {

    }
    render(){
        return this.html;
    }
}