const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const db = require('./app/models/index.js')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(() => {
        console.log('connect woi')
    }).catch((err) => {
        console.log('gak bisa, err')
        process.exit
    });


app.get('/', (req,res) => {
    res.json({
        message: 'Welcome reza'
    })
})

require('./app/routes/post.routes.js')(app)

const PORT = 8000
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})