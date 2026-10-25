/*
 * Renders the menu stored in window.MENU (from menus/lunch.js, dinner.js or brunch.js)
 * into the <div id="menu"> on the page. You shouldn't need to edit this file —
 * edit the files in the menus/ folder instead.
 *
 * Prices stay written in the menu text. Here they are picked out and shown in
 * the brand color without a "$" sign. When a dish has a single price at the
 * end of its name (or of its description), it moves to the right of the name.
 */
(function () {
  "use strict";

  var menu = window.MENU;
  var root = document.getElementById("menu");
  if (!menu || !root) return;

  // A price is a number at the end of the text, or followed by "|", "OR", "add" or a comma.
  var PRICE = /\$?(\d+(?:\.\d{2})?)(?=\s*$|\s*,|\s+\||\s+(?:OR|or|add|Add)\b)/g;
  var TRAILING = /^([\s\S]*?\S)\s+\$?(\d+(?:\.\d{2})?)$/;

  var el = function (tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  var countPrices = function (text) {
    return (text.match(PRICE) || []).length;
  };

  // Fill a node with text, wrapping each price in <span class="menu-price">.
  var withPrices = function (node, text) {
    var last = 0;
    text.replace(PRICE, function (match, amount, offset) {
      node.appendChild(document.createTextNode(text.slice(last, offset)));
      node.appendChild(el("span", "menu-price", amount));
      last = offset + match.length;
      return match;
    });
    node.appendChild(document.createTextNode(text.slice(last)));
    return node;
  };

  // Split off a single trailing price, if that's the only price in the text.
  var splitPrice = function (text) {
    var m = text && countPrices(text) === 1 && text.match(TRAILING);
    return m ? { text: m[1], price: m[2] } : null;
  };

  menu.sections.forEach(function (section) {
    var block = el("section", "menu-section");
    if (section.items.length > 8) block.className += " menu-section--long";
    block.appendChild(el("h2", "menu-section-title", section.heading));

    section.items.forEach(function (item) {
      if (item.note) {
        block.appendChild(withPrices(el("p", "menu-note"), item.note));
        return;
      }

      var name = item.name;
      var description = item.description;
      var price = null;

      var fromName = splitPrice(name);
      if (fromName) {
        name = fromName.text;
        price = fromName.price;
      } else if (description && countPrices(name) === 0) {
        var fromDescription = splitPrice(description);
        if (fromDescription) {
          description = fromDescription.text;
          price = fromDescription.price;
        }
      }

      var dish = el("div", "menu-item");
      var head = el("div", "menu-item-head");
      head.appendChild(withPrices(el("p", "menu-item-name"), name));
      if (price) head.appendChild(el("span", "menu-price", price));
      dish.appendChild(head);
      if (description) dish.appendChild(withPrices(el("p", "menu-item-description"), description));
      block.appendChild(dish);
    });

    root.appendChild(block);
  });

  if (menu.footnote) root.appendChild(el("p", "menu-footnote", menu.footnote));
})();
