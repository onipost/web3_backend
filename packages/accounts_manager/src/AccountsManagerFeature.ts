import { ModuleFeature } from '@web3/common'
import { AccountsRepository } from './repository/AccountsRepository'
import { FullWallet, Wallet } from './entity/Wallet'
import { Network } from './entity/Network'

export class AccountsManagerFeature implements ModuleFeature {
  private repository: AccountsRepository

  constructor() {
    this.repository = new AccountsRepository()
  }

  addWallet(address: string, privateKey: string): Promise<boolean> {
    const wallet: FullWallet = {
      privateKey: privateKey,
      address: address,
      networks: [],
    }
    return this.repository.add(wallet)
  }

  removeWallet(address: string): Promise<boolean> {
    return this.repository.delete(address)
  }

  getWallets(from: number, to: number): Promise<Wallet[]> {
    return this.repository.getList(from, to)
  }

  addNetworkToWallet(wallet: string, network: Network): Promise<boolean> {
    return this.repository.attachNetwork(wallet, network)
  }

  removeNetworkFromWallet(wallet: string, network: Network): Promise<boolean> {
    return this.repository.detachNetwork(wallet, network)
  }
}
