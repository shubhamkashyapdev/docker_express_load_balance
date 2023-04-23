import express from 'express'

const app = express()

const PORT = process.env.PORT || 5000
const ENV = process.env.NODE_ENV || 'development'

app.get("/", (req, res) => {
    console.log("API IS WORKING FINE")
    res.send("API is working fine!!")
})

app.get('/exit', (req, res) => {
    console.log("EXIT THE CONTAINER")
    process.exit(1)
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT} in ${ENV}:Environement`)
})