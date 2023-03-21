import { BinanceDataSource } from "../../data/src/exchange/binance/dataSource/BinanceDataSource"
import { Server } from "../../data/src/Server"
import { Scaner } from "../../domain/src/dataSource/Scaner"

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