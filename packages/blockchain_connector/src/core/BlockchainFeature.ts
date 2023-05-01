import { ModuleFeature } from '@web3/common'
import { WalletBalance } from './entity/WalletBalance'
import { NetworkRepository } from './repository/BlockchainRepository'
import { EtheriumDataSource } from '../networks/etherium/EtheriumDataSource'
import { AvalancheDataSource } from '../networks/avalanche/AvalancheDataSource'
import { PolygonDataSource } from '../networks/polygon/PolygonDataSource'
import { ArbitrumDataSource } from '../networks/arbitrum/ArbitrumDataSource'
import { OptimismDataSource } from '../networks/optimism/OptimismDataSource'
import { BscDataSource } from '../networks/bsc/BscDataSource'
import { FantomDataSource } from '../networks/fantom/FantomDataSource'

export class BlockchainFeature implements ModuleFeature {
  private repository: NetworkRepository

  constructor() {
    this.repository = new NetworkRepository([
      new EtheriumDataSource(),
      new AvalancheDataSource(),
      new PolygonDataSource(),
      new ArbitrumDataSource(),
      new OptimismDataSource(),
      new BscDataSource(),
      new FantomDataSource(),
    ])
  }

  async getAssets(address: string): Promise<WalletBalance> {
    return this.repository.getAssets(address)
  }
}
