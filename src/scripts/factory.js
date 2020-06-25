
// factory module to turn objects into HTML. By placing the unique key of the resource you are creating in the id attribute of the <button> (see below), you can use the JavaScript split() method to extract it when the button is clicked.
export default recipe => `
<section class="recipe--${recipe.id}">
    <header class="recipe__title">
        ${recipe.title}
    </header>
    <div class="recipe__instructions">
        ${recipe.instructions}
    </div>
    <button id="deleteRecipe--${recipe.id}">
        Delete Recipe
    </button>
</section>
`
