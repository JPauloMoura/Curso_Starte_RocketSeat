/*
Todos os exercícios abaixo necessitam que você esteja 
com o plugin do Async/Await do Babel e o babel-polyfill
devidamente configurados. Em alguns exercícios é necessário
instalar o Axios.
*/
import axios from 'axios';

const buscaUsuario = async user =>{
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    }catch(erro){
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');