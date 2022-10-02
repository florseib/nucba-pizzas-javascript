// class Pizza {
//     constructor(id, nombre, ingredientes, precio) {
//         this.id = id;
//         this.nombre = nombre;
//         this.ingredientes = ingredientes;
//         this.precio = precio;
//     }
// }

var pizzaArray = [];

function crearPizzaArray() {
    let pizza1 = {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["Queso", "Orégano", "Salsa de tomate"],
        precio: 500
    }

    let pizza2 = {
        id: 2,
        nombre: "Morrón y panceta",
        ingredientes: ["Queso", "Salsa de tomate", "Morrón", "Panceta"],
        precio: 750
    }

    let pizza3 = {
        id: 3,
        nombre: "Jamón",
        ingredientes: ["Queso", "Salsa de tomate", "Jamón"],
        precio: 600
    }

    let pizza4 = {
        id: 4,
        nombre: "Anchoas",
        ingredientes: ["Queso", "Anchoas", "Salsa de tomate"],
        precio: 750
    }

    let pizza5 = {
        id: 5,
        nombre: "Cheddar",
        ingredientes: ["Queso muzzarella", "Queso cheddar", "Salsa de tomate", "Jamón"],
        precio: 550
    }

    let pizza6 = {
        id: 6,
        nombre: "Fugazzetta",
        ingredientes: ["Queso", "Cebollas"],
        precio: 800
    }

    pizzaArray = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]
}

function mostrarPizzas() {
    let mostrarPizzasImpares = () => {

        pizzaArray.forEach((pizza) => {

            if (pizza.id % 2 == 0) {
                let ingredientesString = "";

                pizza.ingredientes.forEach((x, i) => {
                    ingredientesString += x;
                    if (i != pizza.ingredientes.length - 1)
                        ingredientesString += ", "
                })

                console.log("Pizza: " + pizza.nombre + '\n' + "Ingredientes: " + ingredientesString + '\n' + "Precio: " + pizza.precio)
            }

        })

    }

    let checkPizzasBaratas = () => {
        let hayPizzasBaratas = false;

        pizzaArray.forEach((pizza) => {
            if (pizza.precio < 600)
                hayPizzasBaratas = true;
        })

        if (hayPizzasBaratas)
            console.log("Hay pizzas que valen menos de $600")
        else
            console.log("No hay pizzas que valgan menos de $600")

    }

    let mostrarListaPizzas = () => {
        let listaPizzas = "";
        pizzaArray.forEach((pizza, i) => {
            let itemLista = "Pizza: " + pizza.nombre + '\n' + "Precio: " + pizza.precio;

            if (i != pizzaArray.length - 1)
                itemLista += '\n' + '\n';

            listaPizzas += itemLista;
        })

        console.log(listaPizzas);
    }

    let mostrarIngredientesPorPizza = () => {
        pizzaArray.forEach((pizza) => {
            let ingredientesString = pizza.nombre + " - " + "Ingredientes: " + '\n'

            pizza.ingredientes.forEach((ingrediente) => ingredientesString += "- " + ingrediente + '\n')

            console.log(ingredientesString);
        })
    }

    mostrarPizzasImpares();
    checkPizzasBaratas();
    mostrarListaPizzas();
    mostrarIngredientesPorPizza();
}

crearPizzaArray();
mostrarPizzas();