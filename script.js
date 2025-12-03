document.getElementById("ingredient-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const ingredients = document.getElementById("ingredients").value;
    
    const sampleRecipes = [
      {
        title: "Grilled Cheese Sandwich",
        image: "https://spoonacular.com/recipeImages/650129-312x231.jpg",
        sourceUrl: "https://www.example.com/grilled-cheese"
      },
      {
        title: "Tomato Basil Soup",
        image: "https://spoonacular.com/recipeImages/715495-312x231.jpg",
        sourceUrl: "https://www.example.com/tomato-soup"
      },
      {
        title: "Garlic Bread",
        image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
        sourceUrl: "https://www.example.com/garlic-bread"
      }
    ];
  
    displayRecipes(sampleRecipes);
  });
  
  function displayRecipes(recipes) {
    const results = document.getElementById("recipe-results");
    results.innerHTML = "";
  
    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
  
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
      `;
  
      results.appendChild(card);
    });
  }
  