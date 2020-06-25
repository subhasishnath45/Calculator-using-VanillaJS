var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');
var multiply = document.querySelector('.multiply');
var divide = document.querySelector('.divide');

operators = [plus,minus,multiply,divide];
var nums = [];
var operator = '';
var operatorPressed = false;

var calculate = document.querySelector('.submit');
var clearButton = document.querySelector('.clear');

var output = document.querySelector('.output');

var value1 = '',
    value2 = '';

for(var i = 0; i < 10; i++){
    // nums[0], nums[1] etc
    nums[i] = document.querySelector('.num' + i);
    
    nums[i].addEventListener('click',function(){
        if(operatorPressed == false){
            value1 = value1 + this.innerHTML;
            output.innerHTML = value1; 
        }else if(operatorPressed){
            value2 = value2 + this.innerHTML;
            output.innerHTML = value1 + operator +value2; 
        }
    });
}

for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener('click',function(){
        if(value1 == ''){
            alert("Please input a Number first");
            return false;
        }else{
            // if(this.innerHTML = '*'){
            //     operator = '*';
            // }else if(this.innerHTML = '/'){
            //     operator = '/';
            // }else if(this.innerHTML = '+'){
            //     operator = '+';
            // }else if(this.innerHTML = '-'){
            //     operator = '-';
            // }
            operator = this.innerHTML;
            operatorPressed = true;
            output.innerHTML = output.innerHTML + operator;
        }
    });
}


calculate.addEventListener('click',function(){
    if(value2 == ''){
        alert('Please provide the second number');
        return false;
    }else{
        // eval(3 + 5);
        output.innerHTML = eval(parseInt(value1) + operator + parseInt(value2));
        // console.log(value1,operator, value2);
        value1 = output.innerHTML;
        value2 = '';
        operator = '';
        operatorPressed = false;
    }
});

clearButton.addEventListener('click',function(){
    value1 = '';
    value2 = '';
    operator = '';
    operatorPressed = false;
    output.innerHTML = '';
});

