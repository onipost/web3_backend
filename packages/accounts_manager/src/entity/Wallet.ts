import { Network } from 'packages/accounts_manager';

export interface Wallet {
  readonly address: string;
  readonly networks: Network[];
}

export interface FullWallet extends Wallet {
  readonly privateKey: string;
}
