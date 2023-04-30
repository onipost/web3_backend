import { ModuleFeature } from '@web3/common'
import { WalletBalance } from './entity/WalletBalance'
import { NetworkRepository } from './repository/BlockchainRepository'
import { EtheriumDataSource } from './dataSource/EtheriumDataSource'
import { AvalancheDataSource } from './dataSource/AvalancheDataSource'

export class BlockchainFeature implements ModuleFeature {
  private repository: NetworkRepository

  constructor() {
    //TODO integrate networks: avalanche, polygon, bsc, arbitrum, optimism, fantom
    this.repository = new NetworkRepository([new EtheriumDataSource(), new AvalancheDataSource()])

    this.getAssets('0x6FB820D84A221f837e38e1fDE30D15686666bfca')
      .then((balance) => {
        console.log(balance.balance)
        balance.balance.forEach((value, key, map) => {
          console.log(`balance in ${key}, ${value}`)
        })
      })
      .catch((error) => console.log(error))
  }

  async getAssets(address: string): Promise<WalletBalance> {
    return this.repository.getAssets(address)
  }
}
