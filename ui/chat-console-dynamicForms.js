<html>
    <body id="root"></body>
    <script type="text/javascript" src="./DevCore/Data.js"></script>
    <script type="text/javascript" src="./ui/UINode.js></script>
    <script type="text/javascript">
        class ChatConsoleDynamicForms extends UINode {
            constructor(app){
                super(app);
            }
            render(){
                return this.html;
            }
            html = `
                <div class="input-area">
                    <br>
                    <center>
                        <input type="text" id="chatInput" placeholder="Chat w/ PPL & AI" onkeypress="handleKeyPress(event)" name="Chat w/ PPL & AI">
                        <input type="text" id="instructions" maxlength="8000" placeholder="Command the AI" onkeypress="handleKeyPress(event)" name="Command the AI">
                        <input type="text" class="chat-input hidden" id="customizePage" placeholder="Customize the Page / Graffiti" onkeypress="handleKeyPress(event)" name="Customize the Page / Graffiti">
                        <input type="text" id="context-input" maxlength="8000" placeholder="Enter context here" onkeypress="handleKeyPress(event)">
                    </center>
                </div>
            `
            css = ``;
            js = {
                ghostWritePlaceholders() {
                    try {
                        const inputElement = document.getElementsByClassName("input-area")[0].querySelectorAll("input")[currentInputIndex];
                        const placeholderText = placeholders[currentInputIndex];
        
                        inputElement.placeholder = placeholderText.slice(0, currentCharacterIndex + 1);
                        currentCharacterIndex++;
        
                        if (currentCharacterIndex <= placeholderText.length) {
                            setTimeout(ghostWritePlaceholders, 100); // Delay between each character appearance
                        } else {
                            currentCharacterIndex = 0;
                            currentInputIndex = (currentInputIndex + 1) % placeholders.length;
                            setTimeout(ghostWritePlaceholders, 1500); // Delay before starting next placeholder
                        }
                    }
                    catch(e) {
                        console.log("ghostWritePlaceHolders error");
                        setTimeout(ghostWritePlaceholders, 3000);
                    }
                }
            };
        }
    </script>
</html>
