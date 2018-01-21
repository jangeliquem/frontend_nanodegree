// This for-loop actually creates and appends all of the pizzas when the page loads
for (var i = 2; i < 100; i++) {
  var pizzasDiv = document.getElementById("randomPizzas");
  pizzasDiv.appendChild(pizzaElementGenerator(i));
}//pizzaElementGenerator has the DOM traversal so moved it in here


//randomPizzas and pizzaElementGenerator both accessible here?