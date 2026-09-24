# Mémé Mediterranean — Hell's Kitchen website

A plain HTML/CSS/JS rebuild of the Hell's Kitchen page. No build step: open `index.html` in a browser, or upload the folder to any static web host.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Homepage (hero, about, menus, reservations, gallery, events, gift cards, party inquiry, contact, map) |
| `lunch.html`, `dinner.html`, `brunch.html` | Menu pages (the homepage menu buttons link here) |
| `menus/lunch.js`, `menus/dinner.js`, `menus/brunch.js` | **The menu text. Edit these to change a menu.** |
| `css/style.css` | Shared styles (colors, fonts, nav, buttons, footer) |
| `css/home.css`, `css/menu.css` | Homepage and menu-page styles |
| `js/main.js` | Nav menu, slideshow, gallery lightbox, back-to-top button |
| `js/menu.js` | Draws the menu from the `menus/` files (no need to edit) |
| `images/` | Photos, logo and icons |

## Editing a menu

Open the file in `menus/`, find the dish, and change the text between the quotes. Each dish looks like:

```js
{ name: "BEETS", description: "Goat cheese, pine nuts, balsamic vinegar extra virgin olive oil 15" },
```

Copy a line to add a dish, delete a line to remove one. Keep the commas between lines.

## Open TODOs

Search the code for `TODO` to find each one.

1. **Gift card links**: "Purchase an e-Gift Card" and "Check Balance Online" go to `#` until the right Square (or other) account is confirmed.
2. **Gift card email**: shows `[TODO: gift card email]` in the note under the gift card buttons.
3. **Party inquiry form**: `action` is a placeholder. Connect it to a form service you control.
4. **Mailing list form**: same as above.
5. **Resy widget**: venue ID `45003` and the API key were copied from the old site. Confirm with Resy they're yours before going live. (The Book a Table buttons link to the Resy URL you gave and work now.)
6. **West Village and ADA pages**: the footer and hero link to `west-village.html` and `accessibilityada.html` on the current mememediterranean.com. Those pages aren't part of this rebuild yet.
