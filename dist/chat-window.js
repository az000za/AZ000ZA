// {/* <style>
//     .col0 {

//     }
//     .col1 {

//     }
//     .col2 {

//     }
// </style>
// <style>
//     .inline {
//         display: inline-block;
//     }
//     .sidebar {
//         /* background-color: #222; */
//         color: #fff;
//         width: 200px;
//         padding: 10px;
//         vertical-align: middle;
//     }
//     .sidebar ul {
//         list-style: none;
//         padding: 0;
//         margin: 0;
//     }
//     .sidebar li {
//         cursor: pointer;
//         margin: 5px 0;
//     }
//     .sidebar .accordion-content {
//         display: none;
//         padding: 5px;
//     }
// </style>
// <style>
//     /* .hidden {
//         display: none;
//     } */
//     .header {
//         background-color: #222;
//         color: #ff00ff; /* Neon Pink */
//         font-size: 24px;
//         text-align: center;
//         padding: 10px;
//     }
//     .channel {
//         color: #ff00ff; /* Neon Pink */
//         padding: 5px;
//         cursor: pointer;
//         transition: all 0.2s ease;
//     }
//     .channel:hover {
//         background-color: #222;
//     }
// </style>

// <style>
//     .menu-icon {
//       display: block;
//       width: 30px;
//       height: 20px;
//       position: relative;
//       cursor: pointer;
//     }

//     .menu-icon span {
//       display: block;
//       width: 100%;
//       height: 2px;
//       background-color: white; /* Change this color to fit your design */
//       position: absolute;
//       top: 50%;
//       left: 0;
//       transform-origin: center;
//     }

//     .menu-icon span:nth-child(2) {
//       top: 50%;
//       margin-top: -4px;
//     }

//     .menu-icon span:nth-child(3) {
//       top: 100%;
//       margin-top: -4px;
//     }
// </style>

// <style>
//     .messages {
//         padding: 10px;
//         overflow-y: scroll;
//         max-height: calc(100vh - 200px);
//     }
// </style>

// <style>
//     #message-history {
//         /* background: linear-gradient(135deg, #ff00ff, #00ff00, #00ffff, #ff0000); */
//         background-size: 400% 400%;
//         -webkit-background-clip: text;
//         background-clip: text;
//         color: red;
//         animation: gradientAnimation 5s ease-in-out infinite;
//     }
//     @keyframes gradientAnimation {
//         0% {
//             background-position: 0% 50%;
//         }
//         50% {
//             background-position: 100% 50%;
//         }
//         100% {
//             background-position: 0% 50%;
//         }
//     }
// </style>
// <div>
//         <div class="sidebar-left sidebar hidden inline" 
//             style="box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;"
//         >
//             <!-- class="accordion-content" -->
//             <!-- <ul id="items-list"></ul> -->
//             <ul>
//                 <li>Notifications</li>
//                     <div class="accordion-content">
//                         <p>Connect with other programmers and developers in the community.</p>
//                         <p>View profiles of fellow programmers to learn about their skills and interests.</p>
//                         <p>Receive recommendations for potential coding collaborators.</p>
//                     </div>
//                 </li>
//                 <li>ConvoHist
//                     <div class="accordion-content">
//                         <p>Explore common programming challenges and their solutions.</p>
//                         <p>Access a library of frequently used code snippets and functions.</p>
//                         <p>Learn best practices and coding conventions followed by other programmers.</p>
//                     </div>
//                 </li>
//                 <li>Workers
//                     <div class="accordion-content">
//                         <p>Discover specialized programming topics and niche technologies.</p>
//                         <p>Get insights into emerging trends in specific programming domains.</p>
//                         <p>Access tutorials and resources for mastering niche programming skills.</p>
//                     </div>
//                 </li>
//                 <li>Files
//                     <div class="accordion-content">
//                         <p>Get personalized recommendations for coding tools and software.</p>
//                         <p>Receive suggested learning paths to advance your programming career.</p>
//                         <p>Explore recommended coding challenges and projects to enhance your skills.</p>
//                     </div>
//                 </li>
//                 <li>Workflows
//                     <div class="accordion-content">
//                         <p>Get personalized recommendations for coding tools and software.</p>
//                         <p>Receive suggested learning paths to advance your programming career.</p>
//                         <p>Explore recommended coding challenges and projects to enhance your skills.</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//         <div class="chat-window hidden inline"
//             style="box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;"
//         >
//             <!-- Main Chat Window content -->        
//             <div class="header">
//                 <div class="channel">
//                     <div class="menu-icon">
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>                
//                     #channel-group/1456234 
//                     invite
//                 </div>
//                 <!-- <div>
//                     <div style="display: inline;">Chat</div>
//                     <div style="display: inline;">Task</div>
//                     <div style="display: inline;">Goal</div>
//                 </ul> -->
//             </div>
//             <div class="messages" id="message-history">
//                 <!-- Chat messages will be displayed here -->
//                 <li>Generative Web Apps.</li>
//                 <li>Hack on Anything (&#10049;&#180;◡&#96;&#10049;)</li>
//                 <li>Build Collaboratively. Social Network in one place.</li>
//                 <li>Get Connected on any thought w ppl & ai</li>
//             </div>
//             <style>
//                 input {
//                     width: 97%;
//                 }
//             </style>
//             <div class="input-area">
//                 <input type="text" id="chatInput" placeholder="Chat w/ PPL & AI" onkeypress="handleKeyPress(event)" name="Chat w/ PPL & AI">
//                 <input type="text" id="instructions" maxlength="8000" placeholder="Command the AI" onkeypress="handleKeyPress(event)" name="Command the AI">
//                 <input type="text" class="chat-input hidden" id="customizePage" placeholder="Customize the Page / Graffiti" onkeypress="handleKeyPress(event)" name="Customize the Page / Graffiti">
//                 <input type="text" id="context-input" maxlength="8000" placeholder="Enter context here" onkeypress="handleKeyPress(event)">
//             </div>
//         </div>
//         <div class="sidebar-right sidebar hidden inline"
//             style="box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;"
//         >
//             <!-- Right Sidebar content -->
//             <ul>
//                 <li>Ppl
//                     <div class="accordion-content">
//                         <p>Connect with other programmers and developers in the community.</p>
//                         <p>View profiles of fellow programmers to learn about their skills and interests.</p>
//                         <p>Receive recommendations for potential coding collaborators.</p>
//                     </div>
//                 </li>
//                 <li>Common
//                     <div class="accordion-content">
//                         <p>Explore common programming challenges and their solutions.</p>
//                         <p>Access a library of frequently used code snippets and functions.</p>
//                         <p>Learn best practices and coding conventions followed by other programmers.</p>
//                     </div>
//                 </li>
//                 <li>Niche
//                     <div class="accordion-content">
//                         <p>Discover specialized programming topics and niche technologies.</p>
//                         <p>Get insights into emerging trends in specific programming domains.</p>
//                         <p>Access tutorials and resources for mastering niche programming skills.</p>
//                     </div>
//                 </li>
//                 <li>Recommended
//                     <div class="accordion-content">
//                         <p>Get personalized recommendations for coding tools and software.</p>
//                         <p>Receive suggested learning paths to advance your programming career.</p>
//                         <p>Explore recommended coding challenges and projects to enhance your skills.</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>
//         <script>
//             const sidebar_left = [
//                 "Notifications",
//                 "ConvoHist",
//                 "Workers",
//                 "Files",
//                 "Workflows"
//             ];
//             const sidebar_right = [
//                 "Ppl",
//                 "Common",
//                 "Niche",
//                 "Recommended"
//             ];
//             class CRUDListComponent {
//                 constructor(model) {
//                     console.log("CRUDListComponent: " + model);
//                     this.model = model;
//                     this.serverUrl = "/db";
//                     this.itemsList = document.getElementById("items-list");
//                     this.init();
//                 }
//                 async init() {
//                     const urlParams = new URLSearchParams(window.location.search);
//                     const action = urlParams.get("action");
//                     const id = urlParams.get("id");

//                     if (action) {
//                         await this.performCRUD(action, id);
//                     }
//                 }
//                 async fetchItemsFromDatabase() {
//                     console.log("Fetching items...");
//                     const response = await fetch(`${this.serverUrl}?model=${this.model}&action=read`);
//                     const data = await response.json();
//                     this.itemsList.innerHTML = "";
//                     data.forEach(item => {
//                         const listItem = document.createElement("li");
//                         listItem.innerHTML = `
//                             <span>${item.name}</span>
//                             <button onclick="component.performCRUD('update', '${item.id}', '${item.name}')">Edit</button>
//                             <button onclick="component.performCRUD('delete', '${item.id}')">Delete</button>
//                         `;
//                         this.itemsList.appendChild(listItem);
//                     });
//                 }
//                 async performCRUD(action, id = null, name = null) {
//                     console.log("performing crud action: " + action);
//                     let method = "GET";
//                     let body = null;

//                     if (action === "create") {
//                         const itemName = prompt("Enter the item name:");
//                         if (!itemName) return;

//                         method = "POST";
//                         body = JSON.stringify({ name: itemName });
//                     } else if (action === "update" && id !== null) {
//                         const updatedItemName = prompt("Enter the updated item name:", name);
//                         if (!updatedItemName) return;

//                         method = "PUT";
//                         body = JSON.stringify({ id: id, name: updatedItemName });
//                     } else if (action === "delete" && id !== null) {
//                         method = "DELETE";
//                     }

//                     const response = await fetch(`${this.serverUrl}?model=${this.model}&action=${action}&id=${id}`, {
//                         method: method,
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: body
//                     });
//                     if (response.ok) {
//                         await this.fetchItemsFromDatabase(); 
//                     }
//                 }
//             }
//             // Create an instance of the CRUDListComponent with a specified model
//             // const component = new CRUDListComponent("your_model_name");
//             sidebar_left.forEach((model)=>{
//                 console.log("sidebar_left model: " + model);
//                 new CRUDListComponent(model);
//             });
//         </script>
//         <script>
//             const placeholders = [
//                 "Chat w PPL & AI",
//                 "Command the AI",
//                 "Customize Page",
//                 "Enter context here"
//             ];

//             let currentInputIndex = 0;
//             let currentCharacterIndex = 0;

//             function ghostWritePlaceholders() {
//                 const inputElement = document.getElementsByClassName("input-area")[0].querySelectorAll("input")[currentInputIndex];
//                 const placeholderText = placeholders[currentInputIndex];

//                 inputElement.placeholder = placeholderText.slice(0, currentCharacterIndex + 1);
//                 currentCharacterIndex++;

//                 if (currentCharacterIndex <= placeholderText.length) {
//                     setTimeout(ghostWritePlaceholders, 100); // Delay between each character appearance
//                 } else {
//                     currentCharacterIndex = 0;
//                     currentInputIndex = (currentInputIndex + 1) % placeholders.length;
//                     setTimeout(ghostWritePlaceholders, 1500); // Delay before starting next placeholder
//                 }
//             }

//             ghostWritePlaceholders(); // Start ghostwriting placeholders
//         </script> */}