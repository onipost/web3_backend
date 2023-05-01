import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { optimismEth, optimismUsdc, optimismUsdt } from './token_builder'

export class OptimismDataSource extends NetworkDataSource {
  protected network = Network.Optimism
  protected mainToken = optimismEth()

  constructor() {
    super(`https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [optimismUsdc(), optimismUsdt()]
  }
}
