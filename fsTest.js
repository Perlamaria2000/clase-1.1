
console.log('fin');

const fs=require('fs');

fs.writeFile('test.txt','test', (err)=>{
    if (err){
        console.log(err);
    }
    console.log('Archivo creado');
});


console.log('fin');