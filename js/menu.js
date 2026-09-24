/*
 * Renders the menu stored in window.MENU (from menus/lunch.js, dinner.js or brunch.js)
 * into the <div id="menu"> on the page. You shouldn't need to edit this file —
 * edit the files in the menus/ folder instead.
 */
(function () {
  "use strict";

  var menu = window.MENU;
  var root = document.getElementById("menu");
  if (!menu || !root) return;

  var el = function (tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  menu.sections.forEach(function (section) {
    var block = el("section", "menu-section");
    block.appendChild(el("h2", "menu-section-title", section.heading));

    section.items.forEach(function (item) {
      if (item.note) {
        block.appendChild(el("p", "menu-note", item.note));
        return;
      }
      var dish = el("div", "menu-item");
      dish.appendChild(el("p", "menu-item-name", item.name));
      if (item.description) dish.appendChild(el("p", "menu-item-description", item.description));
      block.appendChild(dish);
    });

    root.appendChild(block);
  });

  if (menu.footnote) root.appendChild(el("p", "menu-footnote", menu.footnote));
})();
