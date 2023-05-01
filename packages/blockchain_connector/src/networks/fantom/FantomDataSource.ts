import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { ftm, stargateUsdc, usdc, usdt } from './token_builder'

export class FantomDataSource extends NetworkDataSource {
  protected network = Network.Fantom
  protected mainToken = ftm()

  constructor() {
    super('https://rpc.ankr.com/fantom')
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateUsdc()]
  }
}
