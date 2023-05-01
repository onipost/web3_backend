import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { fantomFtm, fantomUsdc, fantomUsdt } from './token_builder'

export class FantomDataSource extends NetworkDataSource {
  protected network = Network.Fantom
  protected mainToken = fantomFtm()

  constructor() {
    super('https://rpc.ankr.com/fantom')
  }

  protected getCustomTokens(): Token[] {
    return [fantomUsdc(), fantomUsdt()]
  }
}
