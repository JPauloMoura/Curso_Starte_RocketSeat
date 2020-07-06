//==============ASYNC/AWAIT

const promise1 = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=> { resolve('Promise 1 ...')}, 5000);
});
const promise2 = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=> { resolve('Promise 2 ...')}, 1000);
});
const promise3 = ()=> new Promise((resolve, reject)=>{
    setTimeout(()=> { resolve('Promise 3 ...')}, 500);
});

async function executaPromise(){
    //executa de forma sicrona
    console.log('1°chamada: ' + await promise1());
    console.log('1°chamada: ' + await promise2());
    console.log('1°chamada: ' + await promise3());
}

//usando arrow function
const executaPromise2 = async() => {
    console.log('2°chamada: ' + await promise2());
}

//executa de forma Assincrona
executaPromise();
executaPromise2();