import { Spot } from "@binance/connector"
import { Subject } from "rxjs"
import { TokenCex } from "../../../../domain/src/entity/Token"
import { CexDataSource } from "../../../../domain/src/dataSource/TokenDataSource"

export class BinanceDataSource implements CexDataSource {

    tokens: Subject<TokenCex[]> = new Subject()

    openConnection() {
        const apiKey = process.env.BINANCE_API_KEY?.toString() ?? ''
        const apiSecret = process.env.BINANCE_API_SECKET_KEY?.toString() ?? ''
        const client = new Spot(apiKey, apiSecret)
        client.coinInfo()
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.error(error))

    }
}