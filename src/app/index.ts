import { Scaner } from "./Scaner"
import { Server } from "./Server"

class Application {
    server = new Server()
    scaner = new Scaner()

    constructor() {
        this.server.start()
    }
}

new Application()