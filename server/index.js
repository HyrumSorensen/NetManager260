const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000

app.use(express())
app.use(cors())
app.use(express.json())


//endpoints


//
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})