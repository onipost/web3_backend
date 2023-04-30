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
    this.logCount(address, this.mainToken, count)
    const result = [
      {
        count: count,
        token: this.mainToken,
      },
      ...(await this.getCustomTokensBalance(address)),
    ]

    return new Map<Network, WalletToken[]>([[this.network, result]])
  }

  protected getCustomTokens(): Token[] {
    return []
  }

  private async getMainTokenBalance(address: string): Promise<number> {
    const balance = await this.web3.eth.getBalance(address)
    return +this.web3.utils.fromWei(balance, 'ether')
  }

  private async getCustomTokensBalance(address: string): Promise<WalletToken[]> {
    const result: WalletToken[] = []
    const tokens = this.getCustomTokens()
    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index]
      console.log(`${this.network}/${address}: Try fetch count of ${token.title}`)
      const contract = new this.web3.eth.Contract(token.abi, token.address)
      const count = await this.getTokenBalance(contract, address)
      this.logCount(address, token, count)

      result.push({
        count: count,
        token: token,
      })
    }
    return result
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async getTokenBalance(contract: any, address: string): Promise<number> {
    const rawCount = await contract.methods.balanceOf(address).call()
    const decimals = parseInt(await contract.methods.decimals().call())
    const result = rawCount.slice(0, -decimals) + '.' + rawCount.slice(-decimals)
    return parseFloat(result)
  }

  private logCount(address: string, token: Token, count: number) {
    console.log(`${this.network}/${address}: Count of ${token.title} is ${count}`)
  }
}
