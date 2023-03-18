import express from 'express'

const app = express()
const { PORT = 8081 } = process.env

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ message: 'hello world' })
})
app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
})