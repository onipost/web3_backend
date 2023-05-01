import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { avalancheAvax, avalancheUsdc, avalancheUsdt } from './token_builder'

export class AvalancheDataSource extends NetworkDataSource {
  protected network = Network.Avalanche
  protected mainToken = avalancheAvax()

  constructor() {
    super('https://avalanche-mainnet.infura.io/v3/')
  }

  protected getCustomTokens(): Token[] {
    return [avalancheUsdc(), avalancheUsdt()]
  }
}
