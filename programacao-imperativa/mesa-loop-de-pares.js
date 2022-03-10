// function loopDePares(i){
//     let x;
//     for(x = i; i < 100; i++){
//         if(i % 2 === 0){
//             console.log(`o número ${i} é par`)
//         }
//          else {
//              console.log(i)
//          }
//     }
// }

// loopDePares(12)

//exe 2

function loopImpares(numero = Number, palavra = String){
    
    for(i = numero; i < 100; i ++){
        console.log(i)
        let soma = numero[i] + numero;
        if(soma == numero % 2 == 0){
            console.log(palavra)
        }
    }
}

loopImpares(15,'arroz')
