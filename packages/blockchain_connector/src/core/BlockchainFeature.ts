import { ModuleFeature } from '@web3/common'
import { WalletBalance } from './entity/WalletBalance'
import { NetworkRepository } from './repository/BlockchainRepository'
import { EtheriumDataSource } from '../networks/etherium/EtheriumDataSource'
import { AvalancheDataSource } from '../networks/avalanche/AvalancheDataSource'
import { PolygonDataSource } from '../networks/polygon/PolygonDataSource'
import { ArbitrumDataSource } from '../networks/arbitrum/ArbitrumDataSource'
import { OptimismDataSource } from '../networks/optimism/OptimismDataSource'
import { BscDataSource } from '../networks/bsc/BscDataSource'

export class BlockchainFeature implements ModuleFeature {
  private repository: NetworkRepository

  constructor() {
    //TODO integrate networks: bsc, fantom
    this.repository = new NetworkRepository([
      new EtheriumDataSource(),
      new AvalancheDataSource(),
      new PolygonDataSource(),
      new ArbitrumDataSource(),
      new OptimismDataSource(),
      new BscDataSource(),
    ])

    this.getAssets('0x6FB820D84A221f837e38e1fDE30D15686666bfca')
      .then((balance) => {
        console.log(balance.balance)
        balance.balance.forEach((value, key, map) => {
          console.log(`balance in ${key}, ${value}`)
        })
      })
      .catch((error) => console.log(error.message))
  }

  async getAssets(address: string): Promise<WalletBalance> {
    return this.repository.getAssets(address)
  }
}
