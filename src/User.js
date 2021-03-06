class User {
  constructor(user) {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.name = user.name;
    this.id = user.id;
    this.pantry = new Pantry(user.pantry);
  }

  addToFav(recipe) {
    if (typeof recipe === "object") {
      this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFav(recipe) {
    this.favoriteRecipes.forEach((favRecipe) => {
      if (favRecipe === recipe) {
        this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(favRecipe), 1)
      }
    })
  }

  favoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      this.removeFromFav(recipe);
    } else {
      this.addToFav(recipe);
    }
  }

  addToCook(recipe) {
    if (typeof recipe === "object") {
      this.recipesToCook.push(recipe);
    }
  }

  filterFavRecipes(type) {
    const foundRecipes = this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }

  filterToCook(type) {
    const foundRecipes = this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(type)
    })

    return foundRecipes;
  }
  searchRecipes(userInput) {
    let lowerCaseInput = userInput.toLowerCase()
    let foundRecipes = null;
    foundRecipes = recipeData.filter(recipe => {

      if (recipe.name.toLowerCase().includes(lowerCaseInput)) {
        return recipe;
      }
      if (recipe.tags.includes(lowerCaseInput)) {
        return recipe;
      }
    })

    return foundRecipes;
  }
}

if (typeof module !== "undefined") {
  module.exports = User;
}
