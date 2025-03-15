import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transporte } from './entities/transporte.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // el host de AWS O la dirección de la instancia de RDS en AWS
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'iieg_transporte',
      entities: [Transporte],
      synchronize: true, // Solo para desarrollo
    }),
    TypeOrmModule.forFeature([Transporte]),
  ],
  controllers: [AppController],
  providers: [AppService],

  
})
export class AppModule {}
