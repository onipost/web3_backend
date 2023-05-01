import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import { NetworkDataSource } from '../../core/repository/NetworkDataSource'
import { bscBnb, bscUsdc, bscUsdt } from './token_builder'

export class BscDataSource extends NetworkDataSource {
  protected network = Network.BSC
  protected mainToken = bscBnb()

  constructor() {
    super('https://rpc.ankr.com/bsc')
  }

  protected getCustomTokens(): Token[] {
    return [bscUsdc(), bscUsdt()]
  }
}
