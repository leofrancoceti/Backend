import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            extraerYAlmacenarDatos: jest.fn().mockResolvedValue('Datos extraídos y almacenados correctamente.'),
            obtenerTodos: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('POST /extraer-datos', () => {
    it('should return a success message', async () => {
      const result = await controller.extraerDatos();
      expect(result).toEqual('Datos extraídos y almacenados correctamente.');
      expect(service.extraerYAlmacenarDatos).toHaveBeenCalled();
    });
  });

  describe('GET /transporte', () => {
    it('should return an array of transport data', async () => {
      const result = await controller.obtenerTodos();
      expect(result).toEqual([]);
      expect(service.obtenerTodos).toHaveBeenCalled();
    });
  });
});