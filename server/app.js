const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());

const foodResults = [
    {id: 1, url: "https://www.just-eat.co.uk", title: "Just Eat: Order takeaway online from 30000+ food delivery ...", description: "Order from local restaurants and takeaways online with Just Eat, the UK's leader in food delivery with over 30000+ restaurant menus offering Pizza, Chinese, ...", tags: "",},
    {id: 2, url: "https://en.wikipedia.org/wiki/Food", title: "Food - Wikipedia", description: "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential ...", tags: "",},
    {id: 3, url: "https://www.food.gov.uk/", title: "Food Standards Agency: Homepage", description: "Food Standards Agency makes sure food is safe and what it says it is.", tags: "",}
]

const sportResults = [
  {id: 1, url: "https://www.bbc.co.uk/sport", title: "Scores, Fixtures, News - Live Sport - BBC Sport", description: "Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports.", tags: "",},
  {id: 2, url: "https://en.wikipedia.org/wiki/Sport", title: "Sport - Wikipedia", description: "Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment ...", tags: "",},
  {id: 3, url: "https://www.skysports.com/", title: "Sky Sports - Sports News, Transfers, Scores | Watch Live Sport", description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, transfers & scores.", tags: "",}
]

const filmResults = [
    {id: 1, url: "", title: "result1", description: "", tags: "",},
    {id: 2, url: "", title: "result2", description: "", tags: "",},
    {id: 3, url: "", title: "result3", description: "", tags: "",}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/food', (req, res) => res.json(foodResults))

app.get('/sport', (req, res) => res.json(sportResults))

app.get('/film', (req, res) => res.json(filmResults))


// app.get('/results/:id', (req, res) => {
//     try {
//         if (phResults[req.params.id-1]) {
//           res.send(phResults[req.params.id-1])
//         } else {
//           throw new Error('No result found')
//         }
        
//     } catch (error) {
//         res.status(404).send({ message: error.message })
//     }
//   })

const port = 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
