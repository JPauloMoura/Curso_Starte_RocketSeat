/*
cada arquivo pode ter varios 'export' mas apenas 1 'export default' 
    export default function pessoa(nome, idade){
        return {nome, idade};
    }
*/

export function soma(a, b){
    return a + b;

}
export function sub(a, b){
    return a - b;
}

export default function pessoa(nome, idade){
    return {nome, idade};
}