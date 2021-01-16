const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const app = express()

app.use('/', (req, res) => {
    res.json('Hello')
})

console.log(process.env.DBNAME)
console.log(process.env.DBUSER)
console.log(process.env.DBPASS)


const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))