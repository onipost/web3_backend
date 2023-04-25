import { Exchange } from './Exchange'

export interface BaseToken {
  readonly ticker: string
  readonly title: string
}

export interface Token extends BaseToken {
  readonly contract: string
  readonly network: string
}

export interface TokenCex extends BaseToken {
  readonly exchange: Exchange
}
