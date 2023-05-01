import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function bnb(): Token {
  return createToken('BNB', '')
}

export function usdc(): Token {
  return createToken('USDC', '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', defaultAbi)
}

export function usdt(): Token {
  return createToken('USDT', '0x55d398326f99059ff775485246999027b3197955', defaultAbi)
}

export function stargateBusd(): Token {
  return createToken('stargate-BUSD', '0x98a5737749490856b401DB5Dc27F522fC314A4e1', defaultAbi)
}

export function stargateUsdt(): Token {
  return createToken('stargate-USDT', '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.BSC,
    address: address,
    title: title,
    abi: abi,
  }
}
