//Converta as funções nos seguintes trechos de código em Arrow Functions:
/*
            const arr = [1, 2, 3, 4, 5];

            arr.map(function(item) {
            return item + 10;
            });
*/
const arr = [1,2,3,4,5];
console.log(arr.map(item=> item+10));







// Dica: Utilize uma constante pra function
/*
            const usuario = { nome: 'Diego', idade: 23 };

            function mostraIdade(usuario) {
            return usuario.idade;
            }

            mostraIdade(usuario);
 */
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = () => usuario.idade;

console.log(mostraIdade());








// Dica: Utilize uma constante pra function
/*
            const nome = "Diego";
            const idade = 23;

            function mostraUsuario(nome = 'Diego', idade = 18) {
            return { nome, idade };
            }

            mostraUsuario(nome, idade);
            mostraUsuario(nome);

*/
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade ='18') => {
    return {name: nome, idade: idade}
}
console.table(mostraUsuario(nome, idade));
console.table(mostraUsuario(nome));











/*

            const promise = function() {
                return new Promise(function(resolve, reject) {
                return resolve();
                })
            }

*/
const promise = ()=>{
    return new Promise((resolver, reject)=>{
        return resolver();
    });
}