const router = require("express").Router();
const articleRoutes = require("./articles");
const axios = require('axios');

// Book routes
router.use("/article", articleRoutes);

router.get("/scrape/:searchTerm/:start?/:end?", (req, res) =>{
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const apiKey = process.env.NYT_APIKEY; 
    const query = `${url}?api-key=${apiKey}&q=${req.params.searchTerm}${req.params.start !== undefined ? `&begin_date=${req.params.start}`: ""}${req.params.end !==undefined ? `&end_date=${req.params.end}` : ""}`
    console.log(query);
    axios.get(query)
    .then(nytRes =>{
        console.log(nytRes.data.response.docs);
        res.json(nytRes.data.response.docs)
    })
    .catch(error => res.status(500).json('failed to make request to nyt'))
})

module.exports = router;
