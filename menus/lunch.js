/*
 * LUNCH MENU — edit this file to change the Lunch page (lunch.html).
 *
 * How it works:
 *   sections  -> each block with a blue heading (e.g. "TAPAS")
 *   items     -> each dish. "name" is the first line, "description" the second.
 *                Prices are written into the text exactly as they should appear.
 *   note      -> a single extra line under an item (e.g. "add merguez sausage 6").
 *
 * To add a dish, copy one { name: ..., description: ... } line and edit it.
 * Keep the commas between items.
 */
window.MENU = {
  title: "LUNCH",
  sections: [
    {
      heading: "TAPAS",
      items: [
        { name: "SOUP OF THE DAY 11" },
        { name: "COMB0 PLATTER Baba ganoush, hummus, beets, tabouli, falafel, matbucha, carrots, peppers 23" },
        { name: "ROASTED BRUSSEL SPROUTS", description: "Sauteed onion, Manchego cheese 16" },
        { name: "BEETS", description: "Goat cheese, pine nuts, balsamic vinegar extra virgin olive oil 15" },
        { name: "ROASTED CAULIFLOWER", description: "Maghreb spices, lemon tahini 15" },
        { name: "FRIED ARTICHOKE", description: "Shaved manchego, herb mayo, marinara sauce 17" },
        { name: "RICOTTA GNOCCHI", description: "Truffle cream sauce 17" },
        { name: "HUMMUS", description: "Tahini, pita and Falafel 17 OR Ground Lamb 19" },
        { name: "BAKED MEATBALLS (4)", description: "Onion, yogurt, mint 17" },
        { name: "GRILLED OCTOPUS", description: "Chickpeas, mix greens fennel salad, tomato lemon vinaigrette 20" },
        { name: "TUNA TARTARE", description: "Scallion, lime, jalapeno, avocado, cucumber, radish with grilled flatbread 19" }
      ]
    },
    {
      heading: "SALADS",
      items: [
        { name: "SEARED YELLOWFIN TUNA 26", description: "Asparagus, roasted pepper, fingerling potato, avocado, spinach, kale" },
        { name: "MÉMÉ CHOPPED SALAD", description: "Crisp vegetables, romaine, chickpeas, feta, zahtar, pita, olive oil, lemon 16" },
        { name: "TAHINI CAESAR", description: "Pickled onion, cherry tomato, pita chips 15" },
        { name: "GRAIN BOWL", description: "Farro, quinoa, avocado, kale, radish, cucumber, sunflower seeds, poached egg 20" },
        { note: "add to salads: Chicken 7, Shrimp 12, Salmon 14" }
      ]
    },
    {
      heading: "WEEKDAY BRUNCH",
      items: [
        { name: "SHAKSHUKA MOROCCAN EGGS", description: "Three eggs baked with tomato, onions, peppers, spices, tahini 19" },
        { note: "add merguez sausage 6" },
        { name: "BURRATA FRITTATA", description: "Egg whites, mushroom, onion, rosemary, fries, pita 19" },
        { name: "MEDITERRANEAN BRUNCH", description: "Three eggs any style, chopped salad, feta & goat cheese, olive, pita 18" }
      ]
    },
    {
      heading: "SANDWICHES AND BURGERS",
      items: [
        { name: "LAFFA TACO with CHICKEN SHAWARMA,", description: "Onion, peppers, hummus, tahini 18" },
        { note: "with FISH avocado, salsa verde, spinach, pickled onion, mint yogurt 20" },
        { name: "LAMB BURGER", description: "Charred tomato & onion, goat cheese, house pickles, French fries OR salad 21" },
        { name: "BEEF BURGER", description: "2 patties with melted cheddar cheese, onion, mushroom, truffle aioli, Fries 21" },
        { name: "GRILLED VEGI SANDWICH", description: "With green harissa aioli on Ciabatta, served with chopped salad 18" }
      ]
    },
    {
      heading: "LUNCH ENTREES",
      items: [
        { name: "MUSHROOM RAVIOLI", description: "Portobello mushroom, walnuts, parmesan 24" },
        { name: "CHICKEN KEBAB", description: "Hummus, chopped salad, cucumber yogurt, basmati rice 22" },
        { name: "PAN ROASTED ORGANIC SALMON", description: "Saffron risotto, asparagus, julienne vegetables, tomato 30" },
        { name: "BRANZINO LIMON", description: "Olive oil, rosemary, garlic, squash, asparagus cauliflower, fingerling potatoes 30" },
        { name: "SHAWARMA ROYALE: LAMB, FILET MIGNON & CHICKEN 28", description: "Moroccan spices, amba, tahini, pickled eggplant, black lentil & tabouli" },
        { name: "CHICKEN TAGINE", description: "Apricot, raisins, almonds, couscous and spicy carrots 26" },
        { name: "SEAFOOD LINGUINE", description: "Scallops, shrimp, mussels, fresh tomato, garlic, basil, jalepeño 27" },
        // NOTE: the live site lists the entrées below a second time. Copied as-is; delete this block to remove the repeat.
        { name: "MUSHROOM RAVIOLI", description: "Portobello mushroom, walnuts, parmesan 24" },
        { name: "CHICKEN KEBAB", description: "Hummus, chopped salad, cucumber yogurt, basmati rice 22" },
        { name: "PAN ROASTED ORGANIC SALMON", description: "Saffron risotto, asparagus, julienne vegetables, tomato 30" },
        { name: "BRANZINO LIMON", description: "Olive oil, rosemary, garlic, squash, asparagus cauliflower, fingerling potatoes 30" },
        { name: "SHAWARMA ROYALE: LAMB, FILET MIGNON and CHICKEN 28", description: "Moroccan spices, amba, tahini, pickled eggplant, black lentil and tabouli" },
        { name: "CHICKEN TAGINE", description: "Apricot, raisins, almonds, couscous and spicy carrots 26" },
        { name: "SEAFOOD LINGUINE", description: "Scallops, shrimp, mussels, fresh tomato, garlic, basil, jalepeño 27" }
      ]
    }
  ]
};
