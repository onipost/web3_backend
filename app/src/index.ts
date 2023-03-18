import { BinanceDataSource } from "../../data/src/exchange/binance/BinanceDataSource"
import { Scaner } from "./Scaner"
import { Server } from "./Server"

class Application {
    server = new Server()
    scaner = new Scaner()

    constructor() {
        this.server.start()
        this.scaner.addSource(new BinanceDataSource())
    }
}

new Application()