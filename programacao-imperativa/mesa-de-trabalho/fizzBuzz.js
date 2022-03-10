function multiplo(num1, num2) {
    for(var i = 0; i <= 100; i++){
        if(i  % num1 == 0){
            console.log('FIZZ');
        }else if(i % num2 == 0){
            console.log('BUZZ');
        }else if(i % num1 == 0 && i % num2 ==0){
            console.log('FIZZBUZZ')
        }
        else{
        console.log(i)
    }
    } 
}
multiplo(3,5)