import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import usdcAbi from './abi/usdc_abi'
import usdtAbi from './abi/usdt_abi'

export function etheriumEth(): Token {
  return {
    network: Network.Etherium,
    address: '',
    title: 'ETH',
    abi: [],
  }
}

export async function etheriumUsdc(): Promise<Token> {
  return {
    network: Network.Etherium,
    address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    title: 'USDC',
    abi: usdcAbi,
  }
}

export async function etheriumUsdt(): Promise<Token> {
  return {
    network: Network.Etherium,
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    title: 'USDT',
    abi: usdtAbi,
  }
}
