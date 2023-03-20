import { repeat, Subject } from "rxjs"
import { TokenCex } from "../../../../domain/src/entity/Token"
import { CexDataSource } from "../../../../domain/src/dataSource/TokenDataSource"
import { ApiConnector } from "./ApiConnector"

export class BinanceDataSource implements CexDataSource {

    private api: ApiConnector
    tokens: Subject<TokenCex[]> = new Subject()

    constructor(apiKey: string, apiSecret: string) {
        this.api = new ApiConnector(apiKey, apiSecret)
        this.api.getTokensList()
            .pipe(repeat({ delay: 3000 }))
            .subscribe({ next: (data) => console.log(data), error: console.error })
    }
}