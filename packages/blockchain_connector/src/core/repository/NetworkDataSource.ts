import Web3 from 'web3'
import { Network } from '@web3/common'
import { Token, WalletToken } from '../entity/Token'

export abstract class NetworkDataSource {
  protected web3: Web3
  protected abstract network: Network
  protected abstract mainToken: Token

  constructor(rpcUrl: string) {
    if (rpcUrl.endsWith('/')) rpcUrl = rpcUrl.substring(0, rpcUrl.length - 1)
    this.web3 = new Web3(new Web3.providers.HttpProvider(`${rpcUrl}/${process.env.INFURA_API_KEY}`))
  }

  async getTokens(address: string): Promise<Map<Network, WalletToken[]>> {
    const count = await this.getMainTokenBalance(address)
    this.logCount(address, this.mainToken, count.toString())
    const result = [
      {
        count: count,
        token: this.mainToken,
      },
      ...(await this.getCustomTokensBalance(address)),
    ]

    return new Map<Network, WalletToken[]>([[this.network, result]])
  }

  protected async getCustomTokens(): Promise<Token[]> {
    return Promise.resolve([])
  }

  private async getMainTokenBalance(address: string): Promise<number> {
    const result = await this.web3.eth.getBalance(address)
    return this.convert(result)
  }

  private async getCustomTokensBalance(address: string): Promise<WalletToken[]> {
    const result: WalletToken[] = []
    const tokens = await this.getCustomTokens()
    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index]
      console.log(`${this.network}/${address}: Try fetch count of ${token.title}`)
      const contract = new this.web3.eth.Contract(token.abi, token.address)
      const count = await contract.methods.balanceOf(address).call()
      this.logCount(address, token, count)
      result.push({
        count: this.convert(count),
        token: token,
      })
    }
    return result
  }

  private convert(value: string): number {
    return +this.web3.utils.fromWei(value, 'ether')
  }

  private logCount(address: string, token: Token, count: string) {
    console.log(`${this.network}/${address}: Count of ${token.title} is ${count}`)
  }
}
