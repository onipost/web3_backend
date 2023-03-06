import { TokenCex } from "../entity/Token"

interface CexFeature {

    openConnection(): void

    closeConnection(): void
    
    getTokens(): TokenCex[]

    getToken(ticker: string): TokenCex

    getWindrawNetworks(ticker: string): string[]

    getDepositNetworks(ticker: string): string[] 
}