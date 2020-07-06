/*
Todos os exercícios abaixo necessitam que você esteja 
com o plugin do Async/Await do Babel e o babel-polyfill
devidamente configurados. Em alguns exercícios é necessário
instalar o Axios.
*/
import axios from 'axios';

class Github{
     static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        } catch(erro){
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('Rocketseat/bootcamp-launchbase-desafios-01');//try
Github.getRepositories('rocketseat/dslkvmskv');//catch
