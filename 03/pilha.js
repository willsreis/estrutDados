const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;


// let daysOfWeek = [];
let diasDaSemana = ['Sun', 'Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log(diasDaSemana.length);

for (let i = 0; i < averageTemp.length; i++){
    console.log (`${diasDaSemana[i]}: ${averageTemp[i]}`)

}
const indice = diasDaSemana.indexOf(4);
if (indice > -1){
    diasDaSemana.splice(indice,1);
}
diasDaSemana.unshift('abacate')
console.log(diasDaSemana);