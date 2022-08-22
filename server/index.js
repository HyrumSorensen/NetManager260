const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000

const {seed, createNewUser, authUser, createNewPerson} = require('./dbcontroller.js')

app.use(express())
app.use(cors())
app.use(express.json())


//endpoints

app.post('/seed', seed)
app.post('/newUser', createNewUser)
app.post('/newPerson', createNewPerson)
app.get('/authenticate', authUser)

//
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})