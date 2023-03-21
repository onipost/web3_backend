import { Axios, AxiosResponse } from "axios"
import packageJson from '../../../package.json'

export abstract class BaseCexApi {

    protected requestBuilder: RequestBuilder

    constructor(apiKey: string, apiSecret: string) {
        this.requestBuilder = this.createRequestBuilder(apiKey, apiSecret)
    }

    protected abstract createRequestBuilder(apiKey: string, apiSecret: string): RequestBuilder
}


export abstract class RequestBuilder {

    private headers = {
        'Content-Type': 'application/json',
        'User-Agent': `${packageJson.name}/${packageJson.version}`
    }
    
    protected api: Axios
    protected apiSecret: string

    constructor(apiKey: string, apiSecret: string) {
        this.apiSecret = apiSecret
        this.api = this.createApi(apiKey, apiSecret, this.headers)
    }

    protected abstract createApi(apiKey: string, apiSecret: string, headers: object): Axios

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract createGetRequest<T = any, R = AxiosResponse<T>>(path: string, params: object | null): Promise<R>

    abstract createPostRequest<Result>(path: string, params: object | null): Promise<Result>
}