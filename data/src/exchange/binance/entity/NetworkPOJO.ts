export interface NetworkPOJO {
    addressRegex: string
    coin: string
    depositDesc: string
    depositEnable: boolean
    isDefault: boolean
    memoRegex: string
    minConfirm: number
    name: string
    network: string
    resetAddressStatus: boolean
    specialTips: string
    unLockConfirm: number
    withdrawDesc: string
    withdrawEnable: boolean
    withdrawFee: string
    withdrawIntegerMultiple: string
    withdrawMax: string
    withdrawMin: string
    sameAddress: boolean
}
