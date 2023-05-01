import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { eth, stargateUsdc, stargateUsdt, usdc, usdt } from './token_builder'

export class ArbitrumDataSource extends NetworkDataSource {
  protected network = Network.Arbitrum
  protected mainToken = eth()

  constructor() {
    super(`https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateUsdc(), stargateUsdt()]
  }
}
