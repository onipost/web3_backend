import { NetworkPOJO } from './NetworkPOJO';

export interface TokenPOJO {
  coin: string;
  depositAllEnable: boolean;
  free: string;
  freeze: string;
  ipoable: string;
  ipoing: string;
  isLegalMoney: boolean;
  locked: string;
  name: string;
  networkList: NetworkPOJO[];
  storage: string;
  trading: boolean;
  withdrawAllEnable: boolean;
  withdrawing: string;
}
