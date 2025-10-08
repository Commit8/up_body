import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_up_body',
      entities: [Produtos, Categorias, Usuario],
      synchronize: true,
    }),
    ProdutoModule,
    CategoriaModule,
    UsaurioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
