const express = require('express')
const exphbs = require('express-handlebars')
const exhbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('handlebars', exhbs({defaultLayout : 'main'}))
app.set('view engine' , 'handlebars')

app.use(express.static('public'))

app.get('/',(req,res) =>{

    res.render('index' , {restaurant : restaurantList})
})

app.get('/show',(req,res) =>{
    res.render('show')
})
app.listen(port , () =>{
    console.log(`Express is listening in localhost:${port}`);
    
})