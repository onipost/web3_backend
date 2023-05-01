import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function eth(): Token {
  return createToken('ETH', '')
}

export function usdc(): Token {
  return createToken('USDC', '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', defaultAbi)
}

export function usdt(): Token {
  return createToken('USDT', '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', defaultAbi)
}

export function stargateUsdc(): Token {
  return createToken('stargate-USDC', '0x892785f33CdeE22A30AEF750F285E18c18040c3e', defaultAbi)
}

export function stargateUsdt(): Token {
  return createToken('stargate-USDT', '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641', defaultAbi)
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
