import { Network } from '@web3/common'

export interface Token {
  network: Network
  address: string
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abi: any[]
}

export interface WalletToken {
  token: Token
  count: number
}
