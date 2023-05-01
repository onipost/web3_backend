import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function arbitrumEth(): Token {
  return createToken('ETH', '')
}

export function arbitrumUsdc(): Token {
  return createToken('USDC', '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', defaultAbi)
}

export function arbitrumUsdt(): Token {
  return createToken('USDT', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Arbitrum,
    address: address,
    title: title,
    abi: abi,
  }
}
