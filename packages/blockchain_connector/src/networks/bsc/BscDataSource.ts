import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { bnb, stargateBusd, stargateUsdt, usdc, usdt } from './token_builder'

export class BscDataSource extends NetworkDataSource {
  protected network = Network.BSC
  protected mainToken = bnb()

  constructor() {
    super('https://rpc.ankr.com/bsc')
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateBusd(), stargateUsdt()]
  }
}
