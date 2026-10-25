# Mémé on 10, Kitchen & Cocktails — Hell's Kitchen website

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
| `images/` | Photos and icons |
| `images/brand/` | Logo, wordmark and squiggle SVGs from the brand kit |

## Brand

Styles follow the Mémé on 10 Brand Kit v2 (October 2026, Basil):

- **Colors** (in `css/style.css`): charcoal `#2B2724` for type, basil `#56603C` for squiggles, prices, buttons and links, paper `#FBF8F2` background, cream `#F3EDE1` on charcoal. To switch the accent to terracotta, set `--accent: var(--terracotta);`.
- **Type**: Bodoni Moda for headings (500, lowercase) and running text (400); Jost caps, tracked, for labels, dish names, buttons and the tagline.
- **Logo**: drawn as inline SVG in each page (the `#wm` and `#sq` symbols at the top of the `<body>`) so "on 10" and the tagline use the web fonts. The files in `images/brand/` are the same marks for download and print.
- **Menus**: prices are picked out of the menu text and shown in basil without a `$`. A single price at the end of a dish name moves to the right of the name.

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
6. **ADA page**: the hero and footer link to `accessibilityada.html` on the current mememediterranean.com. That page isn't part of this rebuild yet.
