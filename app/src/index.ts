import { BinanceDataSource } from "../../data/src/exchange/binance/BinanceDataSource"
import { Scaner } from "./Scaner"
import { Server } from "./Server"

class Application {
    server = new Server()
    scaner = new Scaner()

    constructor() {
        this.server.start()
        this.scaner.addSource(
            new BinanceDataSource(process.env.BINANCE_API_KEY?.toString() ?? '', process.env.BINANCE_API_SECKET_KEY?.toString() ?? '')
        )
    }
}

new Application()