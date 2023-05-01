import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function matic(): Token {
  return createToken('MATIC', '')
}

export function usdc(): Token {
  return createToken('USDC', '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', defaultAbi)
}

export function usdt(): Token {
  return createToken('USDT', '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', defaultAbi)
}

export function stargateUsdc(): Token {
  return createToken('stargate-USDC', '0x1205f31718499dBf1fCa446663B532Ef87481fe1', defaultAbi)
}

export function stargateUsdt(): Token {
  return createToken('stargate-USDT', '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c', defaultAbi)
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
