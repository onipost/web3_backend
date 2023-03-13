export interface BaseToken {
    readonly ticker: string,
    readonly title: string,
    dailyChange: number
}

export interface Token extends BaseToken {
    readonly contract: string,
    readonly network: string
}

export interface TokenCex extends BaseToken {
    readonly exchangeTitle: string //TODO maybe delete this and aggregate all tokens into Exchange model
}