
const myTag = document.getElementsByTagName('p');

let aNagyIgazság = "Fuhhh gyerekek...";

const elsoaldozas = function(){
    if(myTag[3].innerHTML === aNagyIgazság){
        myTag[3].innerHTML = "A gyász a picsátokat kieszi";
    } else{
        myTag[3].innerHTML = aNagyIgazság;
    }
    
}

Array.prototype.forEach.call(myTag, function(element){
    console.log(element.innerHTML);
});

