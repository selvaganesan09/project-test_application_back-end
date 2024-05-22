import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
//  constructor(){
// super({
//  datasources:{
//   db:{
//    url:'"postgresql://postgres:123@localhost:5434/nest?schema=public"'  
//   }
//  }
// })
//  }

async onModuleInit() {
 try {
     console.log(`trying to connect to db...`);

     await this.$connect();

     console.log(`connected to db...`);
 } catch (err) {
     console.log(`connecting to db failed. \n ${err}`);
 }
}

// async enableShutdownHooks(app: INestApplication) {
//  this.$on('beforeExit', async () => {
//      await app.close();
//  });
// }
}
// https://stackoverflow.com/questions/71251937/error-p1001-cant-reach-database-server-at-localhost5200