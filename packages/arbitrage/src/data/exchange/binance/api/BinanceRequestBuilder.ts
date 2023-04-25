import axios, { Axios } from 'axios'
import crypto from 'crypto'
import { RequestBuilder } from '../../../base/BaseCexApi'

export class BinanceRequestBuilder extends RequestBuilder {
  protected createApi(apiKey: string, _apiSecret: string, headers: object): Axios {
    return axios.create({
      baseURL: 'https://api.binance.com',
      timeout: 2000,
      headers: {
        ...headers,
        'X-MBX-APIKEY': apiKey,
      },
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createGetRequest(path: string, params: object | null): Promise<any> {
    const timestamp = Date.now() - 2000
    const paramsString = this.buildQueryString({ ...params, timestamp })
    const signature = this.getSignature(paramsString)
    return this.api.request({
      method: 'GET',
      url: `${path}?${paramsString}&signature=${signature}`,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  createPostRequest(path: string, params: object | null): Promise<any> {
    throw new Error('Method not implemented.')
  }

  private getSignature(query: string): string {
    return crypto.createHmac('sha256', this.apiSecret).update(query).digest('hex')
  }

  private buildQueryString(params: object): string {
    if (!params) return ''
    return Object.entries(params).map(this.stringifyKeyValuePair).join('&')
  }

  /**
   * NOTE: The array conversion logic is different from usual query string.
   * E.g. symbols=["BTCUSDT","BNBBTC"] instead of symbols[]=BTCUSDT&symbols[]=BNBBTC
   */
  stringifyKeyValuePair = ([key, value]) => {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value
    return `${key}=${encodeURIComponent(valueString)}`
  }
}
