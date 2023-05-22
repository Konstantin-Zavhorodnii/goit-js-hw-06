const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientArray = ingredients.map((ingredientName) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = ingredientName;

  return listItemEl.outerHTML;
});

const ingredientsEl = document.querySelector("#ingredients"); 
ingredientsEl.innerHTML = ingredientArray.join();
