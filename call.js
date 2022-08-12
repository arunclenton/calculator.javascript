
var output = document.getElementById('output-screen');

function display(num){

output.value += num;

console.log(num);

}
// function multi(){
//     var a = document.getElementById('multi').innerText;
    
//      output.value += a;
// }

// function add(){
//     var a = document.getElementById('add').innerText;
    
//      output.value += a;
// }

// function sub(){
//     var a = document.getElementById('sub').innerText;
    
//      output.value += a;
// // }
// function calculate(){
//     var a = document.getElementById('calculate').innerText;
    
//     output.value += a;
// }
function clr(num){
    var x = document.getElementById("output-screen").value='';
    x.value = num;
    console.log(x);
}
function del(num){
    var x = document.getElementById("output-screen");
    x.value = x.value.slice(0,-1);
    console.log(x);
}
function calculate(){
    var x = document.getElementById("output-screen");
    try{
        x.value = eval(x.value)
    } 
      catch(error){
    
        alert("invaild");
    }
    
}
