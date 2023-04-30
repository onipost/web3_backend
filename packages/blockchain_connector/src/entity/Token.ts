import { Network } from '@web3/common'

export interface Token {
  contract: string
  title: string
  network: Network
  abi: any[]
}

export interface WalletToken {
  token: Token
  count: number
}
