const express = require('express')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors());

const foodResults = [
    {id: 1, url: "https://www.just-eat.co.uk", title: "Just Eat: Order takeaway online from 30000+ food delivery ...", description: "Order from local restaurants and takeaways online with Just Eat, the UK's leader in food delivery with over 30000+ restaurant menus offering Pizza, Chinese, ...", tags: ["food", "delivery", "service"],},
    {id: 2, url: "https://en.wikipedia.org/wiki/Food", title: "Food - Wikipedia", description: "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential ...", tags: ["food", "information", "wikipedia"],},
    {id: 3, url: "https://www.food.gov.uk/", title: "Food Standards Agency: Homepage", description: "Food Standards Agency makes sure food is safe and what it says it is.", tags: ["food", "information", "safety", "government"]}
]

const sportResults = [
  {id: 1, url: "https://www.bbc.co.uk/sport", title: "Scores, Fixtures, News - Live Sport - BBC Sport", description: "Sports news and live sports coverage including scores, results, video, audio and analysis on Football, F1, Cricket, Rugby Union and all other UK sports.", tags: ["sport", "watch", "live", "bbc"],},
  {id: 2, url: "https://en.wikipedia.org/wiki/Sport", title: "Sport - Wikipedia", description: "Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment ...", tags: ["sport", "information", "wikipedia"],},
  {id: 3, url: "https://www.skysports.com/", title: "Sky Sports - Sports News, Transfers, Scores | Watch Live Sport", description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, transfers & scores.", tags: ["sport", "watch", "live", "sky"]}
]

const filmResults = [
    {id: 1, url: "https://www.bfi.org.uk/", title: "BFI homepage | BFI", description: "The BFI National Archive has one of the most important film and TV collections in the world. Choose from a selection of 11,000 titles that cover 120 years ...", tags: ["film", "festival", "BFI"],},
    {id: 2, url: "https://en.wikipedia.org/wiki/Film", title: "Film - Wikipedia", description: "A film – also called a movie, motion picture, moving picture, picture or photoplay – is a work of visual art that simulates experiences and otherwise ...", tags: ["film", "information", "wikipedia"],},
    {id: 3, url: "Netflix - Watch TV Shows Online, Watch Movies Online", title: "https://www.netflix.com/", description: "What is Netflix? Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, ...", tags: ["film", "watch", "netflix"]}
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
