var count:number = 1;
type Food={
    foodNum:number,
    foodName:string,
    foodQuantity:number,
    foodRate:number

}

function foodList():void{
    
    let input1 = document.querySelector(".inpt1") as HTMLInputElement;
    var input2 = document.querySelector(".inpt2") as HTMLInputElement;
    var input3 = document.querySelector(".inpt3") as HTMLInputElement;
    var topClass= document.querySelector(".table-flex") as HTMLSelectElement;

    let food:Food={
        foodNum: count++,
        foodName: input1.value,
        foodQuantity: parseInt(input2.value),
        foodRate: parseInt(input3.value)
    }

    function index(a:number|string):void{
        let item:any= document.createElement("div");
        item.innerHTML= a;
        topClass.append(item);
        item.className="head";
    }

    index(food.foodNum);
    index(food.foodName);
    index(food.foodQuantity);
    index(food.foodRate*food.foodQuantity);
}