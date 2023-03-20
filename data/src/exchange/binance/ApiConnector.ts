import { Spot } from "@binance/connector"
import { Observable } from "rxjs"
import { TokenCex } from "../../../../domain/src/entity/Token"
import { toColdObservable } from "../../base/toColdObservable"
import { TokenPOJO } from "./entity/TokenPOJO"
import { BinanceTokenMapper } from "./mapper/BinanceTokenMapper"

export class ApiConnector {

    tokenMapper = new BinanceTokenMapper()
    apiKey: string
    apiSecret: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    api: any

    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey
        this.apiSecret = apiSecret
        this.api = new Spot(apiKey, apiSecret)
    }

    getTokensList(): Observable<TokenCex[]> {
        return toColdObservable<TokenCex[]>(
            this.api.coinInfo().then((response: { data: TokenPOJO[] }) => this.tokenMapper.map(response.data))
        )
    }
}