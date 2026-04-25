const contentData = [
    {
      id: "chicken-parm",
      name: "Chicken Parmesan",
      image: "images/Parm.png",
      description: "A crispy breaded chicken breast topped with marinara sauce and melted cheese.",
      prepTime: 15,
      cookTime: 30,
      servings: 4,
      ingredients: [
        { name: "Chicken Breasts", quantity: 4, unit: "pieces" },
        { name: "All-Purpose Flour", quantity: 1, unit: "cup" },
        { name: "Eggs", quantity: 2, unit: "pieces" },
        { name: "Breadcrumbs", quantity: 1.5, unit: "cups" },
        { name: "Marinara Sauce", quantity: 2, unit: "cups" },
        { name: "Mozzarella Cheese", quantity: 2, unit: "cups" },
        { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" },
        { name: "Olive Oil", quantity: 3, unit: "tbsp" },
        { name: "Salt and Pepper", toTaste: true }
      ],
      instructions: [
        "Pound chicken breasts to even thickness, about 1/2 inch.",
        "Set up three shallow dishes: one with flour, one with beaten Eggs, and one with breadcrumbs mixed with Parmesan Cheese.",
        "Coat each chicken breast in All-Purpose Flour, shaking off excess.",
        "Dip in egg, then coat thoroughly with breadcrumb mixture.",
        "Heat Olive Oil in a large skillet over medium-high heat.",
        "Fry chicken for 6-7 minutes per side until golden brown.",
        "Preheat oven to 400°F.",
        "Place cooked chicken in a baking dish, top with Marinara Sauce and Mozzarella Cheese.",
        "Bake for 10 minutes until cheese is melted and bubbly.",
        "Serve hot over pasta or with a side salad."
      ]
    },
    {
      id: "chicken-alfredo",
      name: "Chicken Alfredo",
      image: "images/Alfredo.png",
      description: "Creamy Alfredo pasta tossed with grilled chicken slices and herbs.",
      prepTime: 10,
      cookTime: 25,
      servings: 3,
      ingredients: [
        { name: "Fettuccine Pasta", quantity: 1, unit: "lb" },
        { name: "Chicken Breasts", quantity: 2, unit: "pieces" },
        { name: "Heavy Cream", quantity: 1.5, unit: "cups" },
        { name: "Butter", quantity: 4, unit: "tbsp" },
        { name: "Parmesan Cheese", quantity: 1, unit: "cup" },
        { name: "Garlic Cloves", quantity: 3, unit: "pieces" },
        { name: "Salt and Pepper", toTaste: true },
        { name: "Fresh Parsley", quantity: 2, unit: "tbsp" }
      ],
      instructions: [
        "Season Chicken Breasts with Salt and Pepper.",
        "Heat Butter in a skillet over medium-high heat and cook chicken for 6-7 minutes per side until cooked through. Set aside.",
        "Bring a large pot of salted water to boil and cook Fettuccine Pasta according to package directions. Drain and set aside.",
        "In the same skillet, melt remaining Butter and add minced Garlic Cloves. Cook for 1 minute.",
        "Pour in Heavy Cream and bring to a simmer.",
        "Remove from heat and stir in Parmesan Cheese until smooth.",
        "Slice the cooked chicken and add it back to the skillet.",
        "Toss the pasta with the Alfredo sauce.",
        "Garnish with Fresh Parsley and serve immediately."
      ]
    },
    {
      id: "focaccia-bread",
      name: "Focaccia Bread",
      image: "images/bread.png",
      description: "Fluffy, aromatic bread topped with olive oil, rosemary, and sea salt.",
      prepTime: 20,
      cookTime: 35,
      servings: 6,
      ingredients: [
        { name: "All-Purpose Flour", quantity: 3, unit: "cups" },
        { name: "Warm Water", quantity: 1.25, unit: "cups" },
        { name: "Yeast", quantity: 1, unit: "tsp" },
        { name: "Salt", quantity: 1.5, unit: "tsp" },
        { name: "Olive Oil", quantity: 4, unit: "tbsp" },
        { name: "Rosemary", quantity: 1, unit: "tbsp" },
        { name: "Sea Salt", quantity: 0.5, unit: "tsp" },
        { name: "Garlic Cloves", quantity: 2, unit: "pieces" }
      ],
      instructions: [
        "Mix Warm Water and Yeast in a large bowl. Let sit for 5 minutes.",
        "Add All-Purpose Flour and Salt, mix until a shaggy dough forms.",
        "Knead for 8-10 minutes until smooth and elastic.",
        "Place in a greased bowl, cover with a damp cloth, and let rise for 1 hour.",
        "Preheat oven to 400°F.",
        "Punch down dough and spread into a greased baking pan.",
        "Dimple the surface with your fingers all over.",
        "Drizzle with Olive Oil and sprinkle with Rosemary, Sea Salt, and minced Garlic Cloves.",
        "Let rise for 20 minutes.",
        "Bake for 25-30 minutes until golden brown."
      ]
    },
    {
      id: "spaghetti-carbonara",
      name: "Spaghetti Carbonara",
      image: "images/recipe-placeholder.png",
      description: "Classic Italian pasta with creamy egg sauce, pancetta, and pecorino cheese.",
      prepTime: 5,
      cookTime: 20,
      servings: 4,
      ingredients: [
        { name: "Spaghetti", quantity: 1, unit: "lb" },
        { name: "Pancetta", quantity: 0.5, unit: "lb" },
        { name: "Eggs", quantity: 4, unit: "pieces" },
        { name: "Pecorino Romano Cheese", quantity: 1, unit: "cup" },
        { name: "Black Pepper", quantity: 1, unit: "tsp" },
        { name: "Salt", toTaste: true }
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook Spaghetti according to package directions.",
        "While pasta cooks, dice Pancetta and fry in a large skillet until crispy.",
        "In a bowl, whisk together Eggs, Pecorino Romano Cheese, and Black Pepper.",
        "When pasta is al dente, reserve 1 cup pasta water, then drain pasta.",
        "Add hot pasta to the pancetta skillet (off heat).",
        "Pour egg mixture over pasta and toss quickly, adding pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and Black Pepper."
      ]
    },
    {
      id: "simple-salad",
      name: "Simple Green Salad",
      image: "images/recipe-placeholder.png",
      description: "Fresh mixed greens with vinaigrette dressing.",
      prepTime: 10,
      cookTime: 0,
      servings: 2,
      ingredients: [
        { name: "Mixed Greens", quantity: 4, unit: "cups" },
        { name: "Cherry Tomatoes", quantity: 1, unit: "cup" },
        { name: "Cucumber", quantity: 1, unit: "piece" },
        { name: "Red Onion", quantity: 0.25, unit: "piece" },
        { name: "Olive Oil", quantity: 3, unit: "tbsp" },
        { name: "Balsamic Vinegar", quantity: 1, unit: "tbsp" },
        { name: "Salt and Pepper", toTaste: true }
      ],
      instructions: [
        "Wash and dry the Mixed Greens thoroughly.",
        "Halve the Cherry Tomatoes.",
        "Slice the Cucumber into rounds or half-moons.",
        "Thinly slice the Red Onion.",
        "Combine all vegetables in a large bowl.",
        "In a small bowl, whisk together Olive Oil, Balsamic Vinegar, Salt and Pepper.",
        "Pour dressing over salad just before serving.",
        "Toss gently to combine and serve immediately."
      ]
    },
    {
      id: "garlic-bread",
      name: "Garlic Bread",
      image: "images/recipe-placeholder.png",
      description: "Crispy bread brushed with garlic butter and herbs.",
      prepTime: 8,
      cookTime: 12,
      servings: 4,
      ingredients: [
        { name: "Baguette", quantity: 1, unit: "piece" },
        { name: "Butter", quantity: 0.5, unit: "cup" },
        { name: "Garlic Cloves", quantity: 6, unit: "pieces" },
        { name: "Fresh Parsley", quantity: 2, unit: "tbsp" },
        { name: "Salt", toTaste: true }
      ],
      instructions: [
        "Preheat oven to 375°F.",
        "Slice Baguette in half lengthwise.",
        "Mince Garlic Cloves finely.",
        "Soften Butter and mix with minced garlic, chopped Fresh Parsley, and Salt.",
        "Spread garlic butter mixture evenly on both halves of the baguette.",
        "Place on a baking sheet and bake for 10-12 minutes until golden and crispy.",
        "Slice into individual portions and serve warm."
      ]
    },
    {
      id: "chocolate-chip-cookies",
      name: "Chocolate Chip Cookies",
      image: "images/recipe-placeholder.png",
      description: "Classic soft and chewy cookies loaded with chocolate chips.",
      prepTime: 15,
      cookTime: 12,
      servings: 24,
      ingredients: [
        { name: "Butter", quantity: 1, unit: "cup" },
        { name: "Brown Sugar", quantity: 0.75, unit: "cup" },
        { name: "White Sugar", quantity: 0.75, unit: "cup" },
        { name: "Eggs", quantity: 2, unit: "pieces" },
        { name: "Vanilla Extract", quantity: 1, unit: "tsp" },
        { name: "All-Purpose Flour", quantity: 2.25, unit: "cups" },
        { name: "Baking Soda", quantity: 1, unit: "tsp" },
        { name: "Salt", toTaste: true },
        { name: "Chocolate Chips", quantity: 2, unit: "cups" }
      ],
      instructions: [
        "Preheat oven to 375°F.",
        "Cream together Butter, Brown Sugar, and White Sugar until fluffy.",
        "Beat in Eggs and Vanilla Extract.",
        "In a separate bowl, combine All-Purpose Flour, Baking Soda, and Salt.",
        "Gradually blend the dry ingredients into the creamed mixture.",
        "Fold in Chocolate Chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 9-12 minutes until golden brown.",
        "Cool on baking sheets for 2 minutes, then transfer to wire racks."
      ]
    },
    {
      id: "tomato-soup",
      name: "Tomato Soup",
      image: "images/recipe-placeholder.png",
      description: "Smooth and creamy tomato soup, perfect with a grilled cheese sandwich.",
      prepTime: 10,
      cookTime: 30,
      servings: 4,
      ingredients: [
        { name: "Canned Tomatoes", quantity: 2, unit: "cans (28 oz)" },
        { name: "Onion", quantity: 1, unit: "piece" },
        { name: "Garlic Cloves", quantity: 3, unit: "pieces" },
        { name: "Vegetable Broth", quantity: 2, unit: "cups" },
        { name: "Heavy Cream", quantity: 0.5, unit: "cup" },
        { name: "Olive Oil", quantity: 2, unit: "tbsp" },
        { name: "Salt and Pepper", toTaste: true },
        { name: "Fresh Basil", quantity: 2, unit: "tbsp" }
      ],
      instructions: [
        "Heat Olive Oil in a large pot over medium heat.",
        "Dice Onion and sauté until translucent, about 5 minutes.",
        "Add minced Garlic Cloves and cook for 1 minute.",
        "Pour in Canned Tomatoes with juice and Vegetable Broth.",
        "Bring to a simmer and cook for 15 minutes.",
        "Use an immersion blender to puree the soup until smooth (or carefully transfer to a blender).",
        "Stir in Heavy Cream and Fresh Basil.",
        "Season with Salt and Pepper to taste.",
        "Simmer for another 5 minutes and serve hot."
      ]
    }
  ];
  
