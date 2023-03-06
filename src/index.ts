import express from 'express'
import { ArbitragePairCexDex } from './domain/entity/ArbitragePair'
const app = express()
const { PORT = 8081 } = process.env
app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ message: 'hello world' })
})
app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT)
})

console.log("it`s alive!")

const a: ArbitragePairCexDex = {
    token1: { ticker: "btc", title: "BTC", price: 0, dailyChange: 0, exchangeTitle: "abc" },
    token2: { ticker: "btc", title: "BTC", price: 0, contract: "aaaa", network: "asb", dailyChange: 0 },
    arbitrage: 0
}

console.log(a)