import express from 'express'
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.json(req.headers)
})

app.get('/data', (req, res) => {
    res.json({ nom: "KOFFI", prenoms: "KOUASSI EDY", age: 23 })
})

app.listen(port, () => {
    console.log("listen on", port);
})