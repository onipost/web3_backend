import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function optimismEth(): Token {
  return createToken('ETH', '')
}

export function optimismUsdc(): Token {
  return createToken('USDC', '0x7f5c764cbc14f9669b88837ca1490cca17c31607', defaultAbi)
}

export function optimismUsdt(): Token {
  return createToken('USDT', '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Optimism,
    address: address,
    title: title,
    abi: abi,
  }
}
