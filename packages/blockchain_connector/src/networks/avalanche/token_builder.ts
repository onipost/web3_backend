import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function avax(): Token {
  return createToken('AVAX', '')
}

export function usdc(): Token {
  return createToken('USDC', '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', defaultAbi)
}

export function usdt(): Token {
  return createToken('USDT', '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7', defaultAbi)
}

export function stargateUsdc(): Token {
  return createToken('stargate-USDC', '0x1205f31718499dbf1fca446663b532ef87481fe1', defaultAbi)
}

export function stargateUsdt(): Token {
  return createToken('stargate-USDT', '0x29e38769f23701a2e4a8ef0492e19da4604be62c', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Avalanche,
    address: address,
    title: title,
    abi: abi,
  }
}
