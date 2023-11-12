import { jsx as _jsx } from "./core/jsx-runtime";
import { jsxs as _jsxs } from "./core/jsx-runtime";
const chatBubble = _jsxs("div", {
  class: "chat-bubble hidden",
  id: "chatBubble",
  style: "width: 350px;",
  children: [_jsx("div", {
    id: "chatMinimizeButton",
    class: "hover-input",
    children: "Minimize"
  }), _jsx("input", {
    class: "chat-input hidden",
    id: "chatInput",
    placeholder: "Customize Page",
    type: "text"
  }), _jsxs("div", {
    class: "chat-content hidden",
    id: "chatContent",
    children: ["Chat messages will be displayed here", _jsxs("div", {
      class: "message",
      children: [_jsx("span", {
        class: "username",
        children: "AI:"
      }), " What web component would you like me to make?"]
    })]
  })]
});
// document.body.appendChild(chatBubble);
module.exports = ChatBubble;