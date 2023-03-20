import { TokenCex } from "../../../../../domain/src/entity/Token"
import { BaseListMapper } from "../../BaseMapper"
import { TokenPOJO } from "../entity/TokenPOJO"

export class BinanceTokenMapper extends BaseListMapper<TokenPOJO, TokenCex> {

    protected mapItem(data: TokenPOJO): TokenCex {
        return { ticker: data.coin, title: data.name, exchange: { title: "Binance", link: "binance.com" } }
    }
}