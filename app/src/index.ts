import { Scaner } from "./scaner"
import { Server } from "./server"

class Application {
    server = new Server()
    scaner = new Scaner()

    constructor() {
        this.server.start()
    }
}

new Application()