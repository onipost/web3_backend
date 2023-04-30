import * as dotenv from 'dotenv'
import { AccountsManagerFeature } from '@web3/accounts_manager'
import { BlockchainFeature } from '@web3/blockchain_connector'
import { ModuleFeature } from '@web3/common'
import { Server } from './Server'

export class Application {
  modules: ModuleFeature[] = []
  server = new Server()

  constructor() {
    dotenv.config({ path: '../../.env' })
    this.server.start()
    this.modules.push(new AccountsManagerFeature())
    this.modules.push(new BlockchainFeature())

    /*this.scaner.addSource(
            new BinanceDataSource(process.env.BINANCE_API_KEY?.toString() ?? '', process.env.BINANCE_API_SECKET_KEY?.toString() ?? '')
        )*/
  }
}
