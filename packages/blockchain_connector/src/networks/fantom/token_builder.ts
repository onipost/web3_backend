import { Network } from '@web3/common'
import { Token } from '../../core/entity/Token'
import defaultAbi from '../../core/abi/default_abi'

export function fantomFtm(): Token {
  return createToken('FTM', '')
}

export function fantomUsdc(): Token {
  return createToken('USDC', '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', defaultAbi)
}

export function fantomUsdt(): Token {
  return createToken('USDT', '0x049d68029688eabf473097a2fc38ef61633a3c7a', defaultAbi)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createToken(title: string, address: string, abi: any[] = []): Token {
  return {
    network: Network.Fantom,
    address: address,
    title: title,
    abi: abi,
  }
}
