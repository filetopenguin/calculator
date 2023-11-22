let op1 =0;
let op2 =0;
let operator = "";


const btnNum = document.querySelectorAll('.num');
const btnOp = document.querySelectorAll('.op');

btnOp.forEach((op)=>{
    op.addEventListener('click', ()=>{
        console.log(op.textContent);
    });
    
});
btnNum.forEach((num)=>{
    num.addEventListener('click',() =>{
     console.log(num.textContent);
    });
   
});


//calculator functions
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function divide(num1,num2){
    return num1/num2;
}
function multiply(num1,num2){
    return num1*num2;
}

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;
        
        case '-':
            return subtract(num1,num2);
            break;
        
        case '*':
            return multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
        default:
            console.log("error");
    }
    
}
//---------------------------------------