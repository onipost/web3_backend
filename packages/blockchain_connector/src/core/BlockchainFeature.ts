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

    this.test()
  }

  private async test() {
    const wallets = [
      '0x6FB820D84A221f837e38e1fDE30D15686666bfca',
      '0x1987EF1a41Bff989D724Db5457EC54B8150aC2d5',
      '0x19461FBdf2361E0f615361d73F625Ca0543804dC',
      '0xbdcd8EaAAa1B493f3F8F03778CD95a4Ac6ACf0Cf',
      '0x9f261144190cc2DD57B6081bbB622f7564d59071',
      '0x412166294A34e3537286f6C4De3e77C83dC2F649',
      '0x223BC1D7b9540AA51a54e7DF92602131e190CCfe',
      '0x91c72A01d435976A84a2ED5A7Ef3E438E9F005A6',
      '0xDe1f14cd8Dbc04467423A76f579789b98814B0dc',
      '0x672CEFDaACf5FC6d3d72a3E9eD08b4aB0E199A23',
      '0x18DCe4a8864FABD24f4dA96320cA77481c585208',
    ]

    for (let i = 0; i < wallets.length; i++) {
      await this.getAssets(wallets[i])
    }
  }

  async getAssets(address: string): Promise<WalletBalance> {
    return this.repository.getAssets(address)
  }
}
