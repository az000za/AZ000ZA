import { jsx as _jsx } from "./core/jsx-runtime";
import { jsxs as _jsxs } from "./core/jsx-runtime";
const NavListItem = function (index, name) {
  return _jsxs("li", {
    children: [name, _jsxs("div", {
      class: "accordion-content",
      children: [_jsx("p", {
        children: "Connect with other programmers and developers in the community."
      }), _jsx("p", {
        children: "View profiles of fellow programmers to learn about their skills and interests."
      }), _jsx("p", {
        children: "Receive recommendations for potential coding collaborators."
      })]
    })]
  }, index);
};
const NavList = function () {
  const listItems = DBModels.map((item, index) => {
    NavListItem(index, item);
  });
  return _jsx("ul", {
    children: listItems
  });
};
const NavListRendered = _jsx("div", {
  children: _jsx("div", {
    class: "sidebar-left sidebar hidden inline",
    style: divStyle,
    children: NavList()
  })
});
document.body.appendChild(app);