import { BaseToken, Token, TokenCex } from './Token';

interface BaseArbitragePair<Token1 extends BaseToken, Token2 extends BaseToken> {
  token1: Token1;
  token2: Token2;
  arbitrage: number;
}

export type ArbitragePairCexDex = BaseArbitragePair<TokenCex, Token>;

export type ArbitragePairCexCex = BaseArbitragePair<TokenCex, TokenCex>;

export type ArbitragePairDexDex = BaseArbitragePair<Token, Token>;
