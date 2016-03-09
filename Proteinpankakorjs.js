var person = 1;
var one = 1;
var two = 0.5;
var three = 1;
var four = 1;
var five = 1;
var six = 2;
var seven = 0.5;
var eight = 10;
var nine = 3;
var ten = 100;
var eleven = 0.5;
var twelve = 0.5;
var thirteen = 30;
var fourteen = 50;

function plusClick() {
if(person<10){
    person = person + 1;
    
  
    one = one + 1; 
    two = two + 0.5; 
    three = three + 1;
    four = four + 1;
    five = five + 1;
    six = six + 2;
    seven = seven + 0.5;
    eight = eight + 10;
    nine = nine + 3;
    ten = ten + 100;
    eleven = eleven + 0.5;
    twelve = twelve + 0.5;
    thirteen = thirteen + 30;
    fourteen = fourteen + 50;
		

    var p = document.getElementById("ing");
    var o = document.getElementById("1");
    var to = document.getElementById("2");
    var th = document.getElementById("3");
    var fo = document.getElementById("4");
    var fi = document.getElementById("5");
    var si = document.getElementById("6");  
    var se = document.getElementById("7");  
    var ei = document.getElementById("8");  
    var n = document.getElementById("9");  
	var te = document.getElementById("10");
    var el = document.getElementById("11");
    var tw = document.getElementById("12");
    var ti = document.getElementById("13");
    var fou = document.getElementById("14");
    
    p.innerHTML = person;
    o.innerHTML = one;
    to.innerHTML = two;
    th.innerHTML = three;
    fo.innerHTML = four;
    fi.innerHTML = five;
    si.innerHTML = six;
    se.innerHTML = seven;
    ei.innerHTML = eight;
    n.innerHTML = nine;
    te.innerHTML = ten;
    el.innerHTML = eleven;
    tw.innerHTML = twelve;
    ti.innerHTML = thirteen;
    fou.innerHTML = fourteen;
		   
    }

}

function minusClick() {
    if(person>1){
    person = person - 1;

    
        
        
    one = one - 1; 
    two = two - 0.5; 
    three = three - 1;
    four = four - 1;
    five = five - 1;
    six = six - 2;
    seven = seven - 0.5;
    eight = eight - 10;
    nine = nine - 3;
    ten = ten - 100;
    eleven = eleven - 0.5;
    twelve = twelve - 0.5;
    thirteen = thirteen - 30;
    fourteen = fourteen - 50;
        

    var p = document.getElementById("ing");
    var o = document.getElementById("1");
    var to = document.getElementById("2");
    var th = document.getElementById("3");
    var fo = document.getElementById("4");
    var fi = document.getElementById("5");
    var si = document.getElementById("6");  
    var se = document.getElementById("7");  
    var ei = document.getElementById("8");  
    var n = document.getElementById("9");  
	var te = document.getElementById("10");
    var el = document.getElementById("11");
    var tw = document.getElementById("12");
    var ti = document.getElementById("13");
    var fou = document.getElementById("14");


    p.innerHTML = person;
    o.innerHTML = one;
    to.innerHTML = two;
    th.innerHTML = three;
    fo.innerHTML = four;
    fi.innerHTML = five;
    si.innerHTML = six;
    se.innerHTML = seven;
    ei.innerHTML = eight;
    n.innerHTML = nine;
    te.innerHTML = ten;
    el.innerHTML = eleven;
    tw.innerHTML = twelve;
    ti.innerHTML = thirteen;
    fou.innerHTML = fourteen;

     }
}