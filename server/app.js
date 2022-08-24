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

app.get('/results', (req, res) => res.json(phResults))

app.get('/results/:id', (req, res) => {
    try {
        if (phResults[req.params.id-1]) {
          res.send(phResults[req.params.id-1])
        } else {
          throw new Error('No result found')
        }
        
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
  })

const port = 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
