import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import usdcAbi from './abi/usdc_abi'
import usdtAbi from './abi/usdt_abi'

export function eth(): Token {
  return createToken('ETH', '')
}

export function usdc(): Token {
  return createToken('USDC', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', usdcAbi)
}

export function usdt(): Token {
  return createToken('USDT', '0xdac17f958d2ee523a2206206994597c13d831ec7', usdtAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Etherium,
    address: address,
    title: title,
    abi: abi,
  }
}
