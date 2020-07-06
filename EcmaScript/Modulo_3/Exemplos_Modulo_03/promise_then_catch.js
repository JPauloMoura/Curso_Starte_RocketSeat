const minhaPromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=> { resolve('ok') },2000);
});
const p = () => new Promise((resolve,reject)=>{
    setTimeout(()=> { resolve('rodando..')}, 3000 );
})

//padrao then/catch

minhaPromise()
    .then(response =>{
        console.log(response);
    })
p()
    .then(response=> {console.log(response)});

