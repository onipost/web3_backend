import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { eth, stargateUsdc, usdc, usdt } from './token_builder'

export class OptimismDataSource extends NetworkDataSource {
  protected network = Network.Optimism
  protected mainToken = eth()

  constructor() {
    super(`https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateUsdc()]
  }
}
