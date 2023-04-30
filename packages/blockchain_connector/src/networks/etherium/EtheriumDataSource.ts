import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { etheriumEth, etheriumUsdc, etheriumUsdt } from './token_builder'

export class EtheriumDataSource extends NetworkDataSource {
  protected network = Network.Etherium
  protected mainToken = etheriumEth()

  constructor() {
    super('https://mainnet.infura.io/v3/')
  }

  protected async getCustomTokens(): Promise<Token[]> {
    return [await etheriumUsdc(), await etheriumUsdt()]
  }
}
