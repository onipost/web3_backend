import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import usdcAbi from './abi/usdc_abi'
import usdtAbi from './abi/usdt_abi'

export function avalancheAvax(): Token {
  return {
    network: Network.Avalanche,
    address: '',
    title: 'AVAX',
    abi: [],
  }
}

export async function avalancheUsdc(): Promise<Token> {
  return {
    network: Network.Avalanche,
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    title: 'USDC',
    abi: usdcAbi,
  }
}

export async function avalancheUsdt(): Promise<Token> {
  return {
    network: Network.Avalanche,
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    title: 'USDT',
    abi: usdtAbi,
  }
}
