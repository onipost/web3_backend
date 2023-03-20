import { repeat, Subject } from "rxjs"
import { TokenCex } from "../../../../domain/src/entity/Token"
import { CexDataSource } from "../../../../domain/src/dataSource/TokenDataSource"
import { ApiConnector } from "./ApiConnector"

export class BinanceDataSource implements CexDataSource {

    private api: ApiConnector
    tokens: Subject<TokenCex[]> = new Subject()

    constructor() {
        this.api = new ApiConnector(
            process.env.BINANCE_API_KEY?.toString() ?? '',
            process.env.BINANCE_API_SECKET_KEY?.toString() ?? ''
        )
        this.api.getTokensList()
            .pipe(repeat({ delay: 3000 }))
            .subscribe({ next: (data) => console.log(data), error: console.error })
    }
}