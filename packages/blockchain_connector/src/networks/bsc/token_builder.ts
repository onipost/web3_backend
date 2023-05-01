import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function bscBnb(): Token {
  return createToken('BNB', '')
}

export function bscUsdc(): Token {
  return createToken('USDC', '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', defaultAbi)
}

export function bscUsdt(): Token {
  return createToken('USDT', '0x55d398326f99059ff775485246999027b3197955', defaultAbi)
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
