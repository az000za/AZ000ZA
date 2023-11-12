class ChatNavList{
    constructor(){
        const DBModels = [
            // surfing
            "Channels",
            // file like db models
            "Notifications",
            "ConvoHist",
            "Workers",
            "Files",
            "WorkFlows",
            // interactive ai/user like db models
            "PPL",
            "Common",
            "Niche",
            "Recommended",
        ];
        const NavListItem = function(index, name){
            return (
                `<li key=${index}>${name}
                    <div class="accordion-content">
                        <p>Connect with other programmers and developers in the community.</p>
                        <p>View profiles of fellow programmers to learn about their skills and interests.</p>
                        <p>Receive recommendations for potential coding collaborators.</p>
                    </div>
                </li>`
            )
        }
        const NavList = function(list){
            const listItems = list.map((item, index) =>
                NavListItem(index, item)
            ).join("");
            return (
                `<ul>
                    ${listItems}
                </ul>`
            )
        }
    }
    render(list){
        return (
            `<div>
                <style>
                    .sidebar {
                        background-color: #222;
                        color: #fff;
                        width: 200px;
                        padding: 10px;
                        vertical-align: middle;
                    }
                    .sidebar ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .sidebar li {
                        cursor: pointer;
                        margin: 5px 0;
                        border: 1px solid transparent;
                    }
                    .sidebar li:hover {
                        border-color: red; /* Border color when hovered */
                    }
                    .sidebar .accordion-content {
                        display: none;
                        padding: 5px;
                    }
                </style>
                <div class="sidebar-left sidebar hidden inline">
                    ${NavList(DBModels)}
                </div>
            </div>`
        )
    }
}