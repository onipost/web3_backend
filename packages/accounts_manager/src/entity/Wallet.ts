import { Network } from '@web3/common'

export interface Wallet {
  readonly address: string
  readonly networks: Network[]
}

export interface FullWallet extends Wallet {
  readonly privateKey: string
}
