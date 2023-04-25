import { Observable } from 'rxjs'
import { toColdObservable } from '../../../../../../common/src/toColdObservable'
import { TokenPOJO } from './entity/TokenPOJO'
import { BinanceTokenMapper } from '../mapper/BinanceTokenMapper'
import { BaseCexApi, RequestBuilder } from '../../../base/BaseCexApi'
import { BinanceRequestBuilder } from './BinanceRequestBuilder'
import { TokenCex } from '../../../../domain/entity/Token'

export class BinanceApi extends BaseCexApi {

    tokenMapper = new BinanceTokenMapper()

    protected createRequestBuilder(apiKey: string, apiSecret: string): RequestBuilder {
        return new BinanceRequestBuilder(apiKey, apiSecret)
    }

    getTokensList(): Observable<TokenCex[]> {
        const request = this.requestBuilder.createGetRequest('/sapi/v1/capital/config/getall', null)
        return toColdObservable<TokenCex[]>(
            request.then((response: { data: TokenPOJO[] }) => this.tokenMapper.map(response.data))
        )
    }
}