const newfunction = require('./newfunction')

newfunction.greeting('DIMA')


const fs = require('fs')
const path = require("path");

// fs.writeFileSync(path.join(__dirname,  'file.txt'), 'SOME DATA')
//
//
// for (let i=0; i<5 ; i++){
//     fs.appendFile(path.join(__dirname, 'file.txt'), '\nNewdata', ()=>{})
// }
// fs.writeFileSync(path.join(__dirname, 'main ','online', 'file.txt'), 'onlineUsers');

const onlineUsers = [{name: 'Putin', age: 69, sity: 'Lviv'}]
const inPersonUsers = [{name: 'Dima', age: 23, sity: 'Sumy'}]


fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        console.log(err)
    }
});

for (const i of onlineUsers){
fs.writeFile(path.join(__dirname,  'main','online', 'online.txt'), ` name ${i.name}\n age ${i.age}\n sity ${i.sity}\n`, (err)=>{
    if (err){
        console.log(err)
        throw err
    }
});}

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if (err) {
        console.log(err)
    }
});
for (const i of inPersonUsers){
    fs.writeFile(path.join(__dirname,  'main','inPerson', 'inPersonUsers.txt'), ` name ${i.name}\n age ${i.age}\n sity ${i.sity}\n`, (err)=>{
        if (err){
            console.log(err)
            throw err
        }
    })}

fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'), path.join(__dirname,'main', 'online', 'inPersonUsers.txt'),(err)=>{
    if (err){
        console.log(err)
    }
});
fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), path.join(__dirname,'main', 'inPerson', 'online.txt'),(err)=>{
    if (err){
        console.log(err)
    }
});