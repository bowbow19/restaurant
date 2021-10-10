const express = require('express')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout : 'main'}))
app.set('view engine' , 'handlebars')

app.use(express.static('public'))

app.get('/',(req,res) =>{

    res.render('index' , {restaurant : restaurantList.results})
})

app.get('/search',(req,res) =>{
    console.log('search' , req.query)
    const keyword = req.query.keyword
    const pages = restaurantList.results.filter(item => {
        return  item.name.toLowerCase().includes(keyword.toLowerCase()) || item.category.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index' , {restaurant : pages, keyword : keyword})
})

app.get('/restaurants/:page_id',(req,res) =>{
    const restaurantOne = restaurantList.results.find(item => 
        item.id.toString() === req.params.page_id
    )
    res.render('show' , {restanrants : restaurantOne})
})
app.listen(port , () =>{
    console.log(`Express is listening in localhost:${port}`);
    
})