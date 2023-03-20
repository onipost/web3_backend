import { Observable } from "rxjs"
import { BaseToken, Token, TokenCex } from "../entity/Token"

export interface TokenDataSource {
    tokens: Observable<BaseToken[]>
}

export interface CexDataSource extends TokenDataSource {
    tokens: Observable<TokenCex[]>
}

export interface BlockchainDataSource extends TokenDataSource {
    tokens: Observable<Token[]>
}