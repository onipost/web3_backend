
import { ModuleFeature } from "../../common/src/ModuleFeature"
import { AccountsRepository } from "./AccountsRepository"
import { Network } from "./entity/Network"
import { FullWallet, Wallet } from "./entity/Wallet"

export class AccountsManagerFeature implements ModuleFeature {
    private repository: AccountsRepository

    constructor() {
        this.repository = new AccountsRepository()
    }

    addWallet(address: string, privateKey: string): Promise<boolean> {
        const wallet: FullWallet = {
            privateKey: privateKey,
            address: address,
            networks: []
        }
        return Promise.resolve(false)//this.repository.add(wallet)
    }

    removeWallet(address: string): Promise<boolean> {
        return Promise.resolve(false)//this.repository.delete(address)
    }

    getWallets(from: number, to: number): Promise<Wallet[]> {
        return Promise.resolve([])//this.repository.getList(from, to)
    }

    addNetworkToWallet(wallet: string, network: Network): Promise<boolean> {
        return Promise.resolve(false)//this.repository.attachNetwork(wallet, network)
    }

    removeNetworkFromWallet(wallet: string, network: Network): Promise<boolean> {
        return Promise.resolve(false)//this.repository.detachNetwork(wallet, network)
    }
}