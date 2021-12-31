// function old (name, year, now){
//     let name = prompt('введите свое имя');
//     let year = +prompt ('введите свой год рождения ');
//     let now =  +prompt ('введите нынешний год');
//     console.log(name, `${now - year}`);
// }
// old()

function random (min, max){
   return Math.floor(Math.random() * (max + 1 - min ) + min)
}
let primer = +prompt ('введите количество решаемых примеров')

for (let i = 0; i < primer ; i++) {
    let num1 = random (1, 30 )
    let num2 = random (1, 30 )
    let symbol = random (1, 2)
    let example = 0 
    if (symbol == 1 ) {
        example = num1 + num2
        symbol = '+'
    }else if (symbol === 2 ) {
        example = num1 - num2
        symbol = '-'
    }
    // }else if (symbol === 3 ) {
    //     example = num1 * num2
    //     symbol = '*'
    // }else if (symbol === 4 ) {
    //     example = num1 / num2
    //     symbol = '/'
    // }else if (symbol === 5 ) {
    //     example = num1 % num2
    //     symbol = '%'
    // }

    let answer = +prompt ( num1 + '' + symbol + " " + num2 )
    alert ( answer == example ? 'ваш ответ верный ' + answer : 'ваш ответ не верный ' + answer + ' правельный ответ' + example)
}