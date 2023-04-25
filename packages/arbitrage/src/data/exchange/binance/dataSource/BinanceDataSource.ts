import { repeat, Subject } from 'rxjs';
import { BinanceApi } from '../api/BinanceApi';
import { TokenCex } from '../../../../domain/entity/Token';
import { CexDataSource } from '../../../../domain/dataSource/TokenDataSource';

export class BinanceDataSource implements CexDataSource {
  private api: BinanceApi;

  tokens: Subject<TokenCex[]> = new Subject();

  constructor(apiKey: string, apiSecret: string) {
    this.api = new BinanceApi(apiKey, apiSecret);
    this.api
      .getTokensList()
      .pipe(repeat({ delay: 3000 }))
      .subscribe({
        next: (data) => console.log(data),
        error: (error) => {
          console.error(error);
          console.log('fuck');
        },
      });
  }
}
