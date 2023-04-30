import { Network } from '@web3/common'
import { WalletToken } from './Token'

export interface WalletBalance {
  balance: Map<Network, WalletToken[]>
}
