import { TokenCex } from "../../../../../domain/src/entity/Token"
import { BaseListMapper } from "../../../base/BaseMapper"
import { TokenPOJO } from "../api/entity/TokenPOJO"

export class BinanceTokenMapper extends BaseListMapper<TokenPOJO, TokenCex> {

    protected mapItem(data: TokenPOJO): TokenCex {
        return { ticker: data.coin, title: data.name, exchange: { title: "Binance", link: "binance.com" } }
    }
}