let op1 ="";
let op2 ="";
let operator = "";


const btnNum = document.querySelectorAll('.num');
const btnOp = document.querySelectorAll('.op');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const solve = document.querySelector('.solve');

solve.addEventListener('click', ()=>{
    switch(operator){
        case "+":
           screen.textContent = add(op1,op2);
           clearAll();
            break;
        case "-":
            screen.textContent = subtract(op1,op2);
            clearAll();
            break;
        case "/":
            screen.textContent = divide(op1,op2);
            clearAll();
            break;
        case "*":
            screen.textContent = multiply(op1,op2);
            clearAll();
            break;
        default:
            clearAll();
    }
    
})

function clearAll(){
    operator="";
    op1 ="";
    op2="";
}
clear.addEventListener('click',()=>{
   clearAll();
   screen.textContent="";
});

btnOp.forEach((op)=>{
    op.addEventListener('click', ()=>{
        operator = op.textContent;
   //     screen.textContent += " "+ operator + " ";
    });
    
});

btnNum.forEach((num)=>{
    num.addEventListener('click',() =>{
        if(operator!=""){
            op2 += num.textContent;
            screen.textContent = op1 + " "+ operator + " " + op2;
        }else{
        op1 += num.textContent;
        screen.textContent = op1;
        }
    });
   
});


//calculator functions
function add(num1,num2){
    return parseInt(num1)+parseInt(num2);
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