import { Token } from './Token'

export interface LiquidityPool {
  readonly contract: string
  readonly network: string
  readonly token1: Token
  readonly token2: Token
  token1Quantity: number
  token2Quantity: number
}
