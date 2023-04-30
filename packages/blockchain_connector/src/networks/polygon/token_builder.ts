import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function polygonMatic(): Token {
  return createToken('MATIC', '')
}

export function polygonUsdc(): Token {
  return createToken('USDC', '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', defaultAbi)
}

export function polygonUsdt(): Token {
  return createToken('USDT', '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Polygon,
    address: address,
    title: title,
    abi: abi,
  }
}