console.log(`
INFORME O NÚMERO DO PRATO E O TEMPO QUE DESEJA PREPARA-LO:
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); `
);
function microondas(prato, tempo) {
    switch(prato){
        case 1:
            console.log(`você escolheu: ${prato}, e adicionou um tempo de preparo de: ${tempo}`)

            tempo > 20 ? console.log('Comida queimou') : tempo < 10 ? console.log('Tempo insuficiente') 
            : tempo >= 30 ? console.log('KABUMM') : console.log('Prato pronto! Bom apetite')
            break;

        case 2:
            console.log(`você escolheu: ${prato}, e adicionou um tempo de preparo de: ${tempo}`)

            tempo > 16 ? console.log('Comida queimou') : tempo < 8 ? console.log('Tempo insuficiente') 
            : tempo >= 24 ? console.log('KABUMM') : console.log('Prato pronto! Bom apetite')
            break;

        case 3:
            console.log(`você escolheu: ${prato}, e adicionou um tempo de preparo de: ${tempo}`)

            tempo > 30 ? console.log('Comida queimou') : tempo < 15 ? console.log('Tempo insuficiente') 
            : tempo >= 45 ? console.log('KABUMM') : console.log('Prato pronto! Bom apetite')
            break;

        case 4:
            console.log(`você escolheu: ${prato}, e adicionou um tempo de preparo de: ${tempo}`)

            tempo > 24 ? console.log('Comida queimou') : tempo < 12 ? console.log('Tempo insuficiente') 
            : tempo >= 36 ? console.log('KABUMM') : console.log('Prato pronto! Bom apetite')
            break;

        case 5:
            console.log(`você escolheu: ${prato}, e adicionou um tempo de preparo de: ${tempo}`)

            tempo > 16 ? console.log('Comida queimou') : tempo < 8 ? console.log('Tempo insuficiente') 
            : tempo >= 24 ? console.log('KABUMM') : console.log('Prato pronto! Bom apetite')
            break;

        default:
            console.log('Prato inexistente')
            break;      
    } 
}
//passe os parametros de escolha abaixo:
//microondas(1,10)



