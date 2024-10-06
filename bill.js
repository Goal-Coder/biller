var count = 1;

function foodList(){
    
    var input1 = document.querySelector(".inpt1").value;
    var input2 = document.querySelector(".inpt2").value;
    var input3 = document.querySelector(".inpt3").value*input2;
    var sNo= document.querySelector(".s-no");
    var name= document.querySelector(".name");
    var qty= document.querySelector(".qty");
    var rate= document.querySelector(".rate");

    function addItems(divides,inppt){
        var divi = document.createElement("div");
        divi.innerHTML=inppt;
        divides.append(divi);
        divi.className="head1";    
    }

  
    addItems(sNo,count);
    addItems(name,input1);
    addItems(qty,input2);
    addItems(rate,input3);
    count++;
}