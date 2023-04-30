import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { polygonMatic, polygonUsdc, polygonUsdt } from './token_builder'

export class PolygonDataSource extends NetworkDataSource {
  protected network = Network.Polygon
  protected mainToken = polygonMatic()

  constructor() {
    super('https://polygon-mainnet.infura.io/v3/')
  }

  protected async getCustomTokens(): Promise<Token[]> {
    return [polygonUsdc(), polygonUsdt()]
  }
}
