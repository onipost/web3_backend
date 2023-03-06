import WebSocket from "ws"

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