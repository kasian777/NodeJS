
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));


const users = [
    {login: 'Dima', age:33, password:'fuga'},
    {login: 'Pima', age:15, password:'haha'},
    {login: 'pikima', age:51, password:'fasa'},
    {login: 'makima', age:5, password:'magasa'}
]

app.get('/login',(req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const userEmail = users.find(user => user.email === req.body.email)
    if (userEmail) {
        return res.redirect('/errorpage')
    }
    users.push(req.body)
    res.redirect('/users')
})


app.get('/users', (req, res) => {
    res.render('users', {users})
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.json(users[id])
})

app.use((req,res)=>{
    res.render('notFound')
})

app.listen(5500,()=>{
    console.log('Server hasstarted on Port 5500')
})
