const addfn = () =>{
    const val1 = document.querySelector("#box1").value;
    const val2 = document.querySelector("#box2").value;
    document.querySelector("#addtotal").innerText =parseInt(val1) + parseInt(val2);

}
document.querySelector("#addbtn").addEventListener('click',addfn);
const subtractionfn = () =>{
    const val1 = document.querySelector("#box3").value;
    const val2 = document.querySelector("#box4").value;
    document.querySelector("#subtractiontotal").innerText =parseInt(val1) - parseInt(val2);

}
document.querySelector("#subtractionbtn").addEventListener('click',subtractionfn);

const multiplyfn = () =>{
    const val1 = document.querySelector("#box5").value;
    const val2 = document.querySelector("#box6").value;
    document.querySelector("#multiplytotal").innerText =parseInt(val1) * parseInt(val2);

}
document.querySelector("#multiplybtn").addEventListener('click',multiplyfn);

const dividefn = () =>{
    const val1 = document.querySelector("#box7").value;
    const val2 = document.querySelector("#box8").value;
    document.querySelector("#dividetotal").innerText =parseInt(val1) / parseInt(val2);

}
document.querySelector("#dividebtn").addEventListener('click',dividefn);



// Global scope and function scope 


var x = 20999;

function sum(){
    // var x = 30;
    console.log("x val", x);
}

sum();


console.dir(sum);
console.log(typeof sum);