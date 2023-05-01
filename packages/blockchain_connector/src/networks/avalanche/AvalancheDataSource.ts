import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { avax, stargateUsdc, stargateUsdt, usdc, usdt } from './token_builder'

export class AvalancheDataSource extends NetworkDataSource {
  protected network = Network.Avalanche
  protected mainToken = avax()

  constructor() {
    super(`https://avalanche-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateUsdc(), stargateUsdt()]
  }
}
