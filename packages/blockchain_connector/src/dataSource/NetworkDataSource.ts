import Web3 from 'web3'
import { Network } from '@web3/common'
import { Token, WalletToken } from '../entity/Token'

export abstract class NetworkDataSource {
  protected web3: Web3
  protected abstract mainToken: Token
  protected abstract customTokens: Token[]
  abstract network: Network

  constructor(rpcUrl: string) {
    this.web3 = new Web3(new Web3.providers.HttpProvider(`${rpcUrl}/${process.env.INFURA_API_KEY}`))
  }

  async getAssets(address: string): Promise<WalletToken[]> {
    let result: WalletToken[] = []
    result.push({
      count: await this.getMainTokenBalance(address),
      token: this.mainToken,
    })

    const customTokens = await this.getCustomTokensBalance(address)
    result = result.concat(customTokens)

    return result
  }

  protected async getCustomTokensBalance(address: string): Promise<WalletToken[]> {
    const result: WalletToken[] = []
    for (let index = 0; index < this.customTokens.length; index++) {
      const token = this.customTokens[index]
      result.push({
        count: await this.getCustomTokenBalance(address, token),
        token: token,
      })
    }
    return result
  }

  protected async getMainTokenBalance(address: string): Promise<number> {
    const result = await this.web3.eth.getBalance(address)
    return this.convert(result)
  }

  private async getCustomTokenBalance(address: string, token: Token): Promise<number> {
    const contract = new this.web3.eth.Contract(token.abi, token.contract)
    const result = await contract.methods.balanceOf(address).call()
    return this.convert(result)
  }

  private convert(value: string): number {
    return +this.web3.utils.fromWei(value, 'ether')
  }
}
