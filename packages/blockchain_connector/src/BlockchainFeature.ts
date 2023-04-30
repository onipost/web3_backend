import { ModuleFeature } from '@web3/common'
import { WalletBalance } from './entity/WalletBalance'
import { NetworkRepository } from './repository/BlockchainRepository'
import { EtheriumDataSource } from './dataSource/EtheriumDataSource'

export class BlockchainFeature implements ModuleFeature {
  private repository: NetworkRepository

  constructor() {
    this.repository = new NetworkRepository([new EtheriumDataSource()])
  }

  async getAssets(address: string): Promise<WalletBalance> {
    return this.repository.getAssets(address)
  }
}
