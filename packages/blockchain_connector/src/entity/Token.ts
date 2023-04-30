export interface Token {
  contract: string
  title: string
  abi: any[]
}

export interface WalletToken {
  token: Token
  count: number
}
