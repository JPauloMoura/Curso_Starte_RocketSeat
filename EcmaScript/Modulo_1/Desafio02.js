const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];

//Utilizando o map
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idade = usuarios.map(user=> user.idade);
console.table(idade);




//Utilizando o filter
//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat
// e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const userRocketseat = usuarios.filter(user=> 
    user.idade >18 && user.empresa === 'Rocketseat'
);
console.table(userRocketseat);





//Utilizando o find
//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const userEmpresa = usuarios.find(user=> user.empresa === 'Google');
console.table(userEmpresa);





//Unindo operações
//Multiplique a idade de todos usuários por dois e depois realize um filtro
// nos usuários que possuem no máximo 50 anos:

const dobraIdade = usuarios.filter(user=>{
    user.idade *=2;
    return user.idade <= 50;
});
console.table(dobraIdade);