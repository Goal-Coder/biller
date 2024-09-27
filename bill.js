var count = 1;

function notes(){
    
    var input1 = document.querySelector(".inpt1").value;
    var input2 = document.querySelector(".inpt2").value;
    var input3 = document.querySelector(".inpt3").value;
    var sNo= document.querySelector(".s-no");
    var name= document.querySelector(".name");
    var qty= document.querySelector(".qty");
    var rate= document.querySelector(".rate");

    function dieBitch(divides,inppt){
        var divi = document.createElement("div");
        divi.innerHTML=inppt;
        divides.append(divi);
        divi.className="head1";    
    }

  
    dieBitch(sNo,count);
    dieBitch(name,input1);
    dieBitch(qty,input2);
    dieBitch(rate,input3);
    count++;
}