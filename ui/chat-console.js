class ChatConsole {
    constructor(){
        console.log("module: ChatConsole");
        let currentInputIndex = 0;
        let currentCharacterIndex = 0;
    }
    html = `
    <div class="chat-window hidden inline cards">
        <!-- Main Chat Window content -->
        <div class="inline top">
            <div class="">
                <div module="ChatNavList"></div>
            </div>
        </div>
        <div class="inline">
                <div module="ChatConsoleHeader"></div>
                <div module="ChatConsoleMsgs"></div>
                <div module="ChatDynanicForms"></div>
        </div>
    </div>
    `
    css = `
    <style>
        /* .hidden {
            display: none;
        } */
        .header {
            background-color: #222;
            color: #ff00ff; /* Neon Pink */
            font-size: 24px;
            text-align: center;
            padding: 10px;
        }
        .channel {
            color: #ff00ff; /* Neon Pink */
            padding: 5px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .channel:hover {
            background-color: #222;
        }
        .cards {
            box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
        }
        .input-area {
            background: black;
        }
        .input-area input {
            width: 98%;
            background-color: #222;
            color: #fff;
            border: none;
            padding: 8px;
            font-size: 16px;
            background-image: linear-gradient(to right, #0c1f39, #a2007a, #00a994);
            border-radius: 10px;
            padding: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            margin-top: 5px;
            margin-bottom: 5px;
        }                
        .input-area input:focus {
            outline: none;
        }
        input::placeholder {
            color: green;
            /* color: #00FF00; */
        }

        .messages {
            background: black;
        }

        .messages div {
            color: red;
        }

        .top {
            vertical-align: top;
        }
    </style>
    `
    js = {

    }
}