// There are two actions that need to be performed here: 1)Get all recipes and 2)Delete a single recipe. This module will export an object with those two methods on it. Other modules can import the object and invoke either of the methods, depending on its needs.

export default {
    deleteRecipe (recipeId) {
        return fetch(`http://localhost:8088/recipes/${recipeId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }       
}