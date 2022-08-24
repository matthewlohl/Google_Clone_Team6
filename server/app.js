const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());

const phResults = [
    ["result1"],
    ["result2"],
    ["result3"]
]

app.get('/', (req, res) => res.send('Hello World!'))




const port = 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
