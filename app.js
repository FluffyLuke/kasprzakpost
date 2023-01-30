//const { Console } = require("console")
const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')



app.get('/', (request, response) => {
    console.log(request)
    response.status(200).render('index')
})

app.listen(8080)


//404 page
app.use((request, response) => {
    response.status(404).render("404")
})
