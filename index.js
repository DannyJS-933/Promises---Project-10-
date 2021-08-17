const firstPromise = document.getElementById('firstPromise');
const secondPromise = document.getElementById('secondPromise');
const result = document.getElementById('result');



const getRandomNumber = (resolve, reject)=>{
    setTimeout(() => {
        let result = Math.floor(Math.random() * 100);
        if (result < 50) {
            resolve(result);
        } else {
            reject(result);
        }
    }, 3000);

};


firstPromise.onclick = () => {
    console.log('Creando Promesa');
    const randomPromise = new Promise (getRandomNumber);
    randomPromise.then((result) => {
        console.log(`El numero ${result} es menor a 50.`);
    },
        (result) => {
            console.log(`El numero ${result} es mayor a 50.`);
        } 
    );
};
 
secondPromise.onclick = () => {
    fetch('https://www.javascripttutorial.net/sample/promise/api.json').then(
        (obj)=>{
            obj.json().then((json)=>{
                result.innerHTML = json.message;
            });
    }, 
        (error)=>{
        console.error('Error', error);
    })
};