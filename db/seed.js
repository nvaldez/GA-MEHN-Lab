const Recipe = require("../models/Recipe.js");

Recipe.remove({}).then(_ => {
  Recipe.insertMany([
    {
      name: "Chocolate-Cheesecake Cookies",
      description:
        "Cheese cake and chocolate cookies come together for a rich and tasty snack! Laurel and I made this recipe up as we went along. It's one of our best ever.",
      directions: [
        "Beat butter, white sugar, and brown sugar together in a large bowl using an electric mixer until smooth. Beat in eggs and vanilla extract until creamy.",
        "Sift flour, cocoa powder, and baking soda together in a bowl. Add flour mixture to butter mixture. Fold in nuts. Refrigerate dough for 1 hour.",
        "While dough is chilling, beat cream cheese, sugar, egg, and vanilla extract together in a bowl until smooth.",
        "Preheat the oven to 350 degrees F (175 degrees C).",
        "Remove dough from fridge and form about 1 tablespoon dough into a ball; make an indentation and fill with about 1 teaspoon filling. Place cookie on an ungreased baking sheet. Repeat with remaining dough and filling.",
        "Bake in the preheated oven until edges are golden, 11 to 13 minutes. Allow cookies to cool completely before removing from the baking sheet, about 20 minutes."
      ],
      ingredients: [
        "1 cup softened butter",
        "3/4 cup white sugar",
        "3/4 cup packed brown sugar",
        "2 eggs",
        "1 teaspoon vanilla extract",
        "2 cups all-purpose flour",
        "2/3 cup cocoa powder"
      ]
    },
    {
      name: "Brownies",
      description:
        "These brownies are the bomb! I've found the perfect combination of ingredients to make the fudgiest brownies yet... Enjoy!",
      directions: [
        "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x13 baking dish.",
        "Combine the melted butter, sugar, and vanilla in a large bowl. Beat in the eggs, one at a time, mixing well after each, until thoroughly blended.",
        "Sift the flour, cocoa powder, and salt in a bowl. Gradually stir flour mixture into the egg mixture until blended. Stir in the chocolate morsels. Spread the batter evenly into the prepared baking dish.",
        "Bake in preheated oven until an inserted toothpick comes out clean, 35 to 40 minutes. Remove, and cool pan on wire rack before cutting."
      ],
      ingredients: [
        "1 cup butter, melted",
        "3 cups white sugar",
        "1 tablespoon vanilla extract",
        "4 eggs",
        "1 cup unsweetened cocoa powder",
        "1 teaspoon salt",
        "1 cup semisweet chocolate chips"
      ]
    }
  ]).then(recipes => {
    console.log(recipes);
    process.exit();
  });
});

// to make changes run node db/seed.js
