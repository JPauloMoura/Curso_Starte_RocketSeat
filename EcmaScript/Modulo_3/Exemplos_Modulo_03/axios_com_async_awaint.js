import axios from 'axios';

 class Api{
     static async getUserInfo(user){
         try{
             const response = await axios.get(`https://api.github.com/users/${user}`);
             console.log(response);
        } catch (erro){
             console.warn('ERRO ao buscar os dados.');
         }
     }
 }

 Api.getUserInfo('JPauloMoura');
 Api.getUserInfo('JPauloMour8u8uygghh');//Erro