import { AccountsManagerFeature } from "../../modules/accounts_manager/src/AccountsManagerFeature"
import { ModuleFeature } from "../../modules/common/src/ModuleFeature"
import { Server } from "./Server"

class Application {
    modules: ModuleFeature[] = []
    server = new Server()

    constructor() {
        this.server.start()
        this.modules.push(new AccountsManagerFeature())

        /*this.scaner.addSource(
            new BinanceDataSource(process.env.BINANCE_API_KEY?.toString() ?? '', process.env.BINANCE_API_SECKET_KEY?.toString() ?? '')
        )*/
    }
}

new Application()