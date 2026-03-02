import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json([
        {
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        },
        {
            name: 'Louis Marc',
            email: 'louis.marc@hotmail.com'
        },
        {
            name: 'Barik Tenesse',
            email: 'barik.tenesse@yahoo.com'
        }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
