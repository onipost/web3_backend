import { NetworkDataSource } from './NetworkDataSource'
import { WalletBalance } from '../entity/WalletBalance'

export class NetworkRepository {
  private dataSources: NetworkDataSource[]

  constructor(dataSources: NetworkDataSource[]) {
    this.dataSources = dataSources
  }

  async getAssets(address: string): Promise<WalletBalance> {
    const result: WalletBalance = {
      balance: new Map(),
    }

    for (let index = 0; index < this.dataSources.length; index++) {
      const source = this.dataSources[index]
      const tokens = await source.getTokens(address)
      result.balance = new Map([...Array.from(tokens.entries())])
    }

    return result
  }
}
