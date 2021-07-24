import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

const MONOGRAPH = `mongodb+srv://mno:077311778Mno@cluster0.b1ut5.mongodb.net/products?retryWrites=true&w=majority`;

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(MONOGRAPH)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
