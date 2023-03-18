import WebSocket from "ws"
import { Spot } from "@binance/connector"

export default class BinanceConnect {
    initConnection() {

        const ws = new WebSocket('wss://stream.binance.com:9443')

        ws.on('open', function open() {
            ws.send('something')
        })

        ws.on('message', function message(data) {
            console.log('received: %s', data)
        })
    }
}

const apiKey = process.env.BINANCE_API_KEY?.toString() ?? ''
const apiSecret = process.env.BINANCE_API_SECKET_KEY?.toString() ?? ''
const client = new Spot(apiKey, apiSecret)
client.coinInfo()
    .then(response => console.log(response.data))
    .catch(error => console.error(error))
