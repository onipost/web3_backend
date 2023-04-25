import { FullWallet, Network, Wallet } from 'packages/accounts_manager';
import { Pool } from 'pg';

export class AccountsRepository {
  async add(wallet: FullWallet): Promise<boolean> {
    return this.runOnDB(async (connection) => {
      const res = await connection.query(
        'INSERT INTO accounts.wallets(address, "privateKey") VALUES ($1, $2) RETURNING *',
        [wallet.address, wallet.privateKey]
      );
      return res.rowCount > 0;
    });
  }

  async delete(address: string): Promise<boolean> {
    return this.runOnDB(async (connection) => {
      const res = await connection.query('DELETE FROM accounts.wallets WHERE address = $1', [
        address,
      ]);
      return res.rows.length == 0;
    });
  }

  async getList(from: number, to: number): Promise<Wallet[]> {
    const addresses: string[] = await this.runOnDB(async (connection) => {
      const res = await connection.query('SELECT * FROM accounts.wallets OFFSET $1 LIMIT $2', [
        from,
        to,
      ]);
      return res.rows.map((element) => element.address);
    });

    const wallets: Wallet[] = [];
    for (let index = 0; index < addresses.length; index++) {
      const address = addresses[index];
      const networks: Network[] = await this.runOnDB(async (connection) => {
        const res = await connection.query(
          'SELECT * FROM accounts.wallet_networks WHERE address = $1',
          [address]
        );
        return res.rows.map((item) => Network[item.network]).filter((item) => item != undefined);
      });
      wallets.push({
        address: address,
        networks: networks,
      });
    }

    return wallets;
  }

  async attachNetwork(address: string, network: Network): Promise<boolean> {
    return this.runOnDB(async (connection) => {
      const res = await connection.query(
        'INSERT INTO accounts.wallet_networks(address, network) VALUES ($1, $2) RETURNING *',
        [address, network.toString()]
      );
      return res.rowCount > 0;
    });
  }

  async detachNetwork(address: string, network: Network): Promise<boolean> {
    return this.runOnDB(async (connection) => {
      const res = await connection.query(
        'DELETE FROM accounts.wallet_networks WHERE address = $1 AND network = $2',
        [address, network.toString()]
      );
      return res.rows.length == 0;
    });
  }

  private async runOnDB<T>(runnable: (connection: Pool) => T): Promise<T> {
    let connection: Pool | undefined;
    try {
      connection = new Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT ?? ''),
      });
      return Promise.resolve(runnable(connection));
    } catch (error) {
      return Promise.reject(error);
    } finally {
      await connection?.end();
    }
  }
}
