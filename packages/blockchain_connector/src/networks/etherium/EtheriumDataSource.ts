import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { eth, usdc, usdt } from './token_builder'

export class EtheriumDataSource extends NetworkDataSource {
  protected network = Network.Etherium
  protected mainToken = eth()

  constructor() {
    super(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt()]
  }
}
