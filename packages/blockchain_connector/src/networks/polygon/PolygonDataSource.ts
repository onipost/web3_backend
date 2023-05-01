import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { matic, stargateUsdc, stargateUsdt, usdc, usdt } from './token_builder'

export class PolygonDataSource extends NetworkDataSource {
  protected network = Network.Polygon
  protected mainToken = matic()

  constructor() {
    super(`https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`)
  }

  protected getCustomTokens(): Token[] {
    return [usdc(), usdt(), stargateUsdc(), stargateUsdt()]
  }
}
