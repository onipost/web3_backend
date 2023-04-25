import express from 'express';

export class Server {
  app = express();
  port = 8081;

  start() {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send({ message: 'hello world' });
    });
    this.app.listen(this.port, () => {
      console.log('server started at http://localhost:' + this.port);
    });
  }
}
