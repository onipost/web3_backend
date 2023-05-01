import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { arbitrumEth, arbitrumUsdc, arbitrumUsdt } from './token_builder'

export class ArbitrumDataSource extends NetworkDataSource {
  protected network = Network.Arbitrum
  protected mainToken = arbitrumEth()

  constructor() {
    super(`https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [arbitrumUsdc(), arbitrumUsdt()]
  }
}
