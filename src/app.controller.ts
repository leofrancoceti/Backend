import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('extraer-datos')
  async extraerDatos() {
    return await this.appService.extraerYAlmacenarDatos();
  }

  @Get('transporte')
  async obtenerTodos() {
    return await this.appService.obtenerTodos();
  }
}