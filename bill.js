"use strict";
var count = 1;
function foodList() {
    let input1 = document.querySelector(".inpt1");
    var input2 = document.querySelector(".inpt2");
    var input3 = document.querySelector(".inpt3");
    var topClass = document.querySelector(".table-flex");
    let food = {
        foodNum: count++,
        foodName: input1.value,
        foodQuantity: parseInt(input2.value),
        foodRate: parseInt(input3.value)
    };
    function index(a) {
        let item = document.createElement("div");
        item.innerHTML = a;
        topClass.append(item);
        item.className = "head";
    }
    index(food.foodNum);
    index(food.foodName);
    index(food.foodQuantity);
    index(food.foodRate * food.foodQuantity);
    reset();
}
