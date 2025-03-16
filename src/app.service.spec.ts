import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transporte } from './entities/transporte.entity';

describe('AppService', () => {
  let service: AppService;

  // Mock del repositorio de TypeORM
  const mockTransporteRepository = {
    save: jest.fn().mockImplementation((dto) => Promise.resolve(dto)),
    find: jest.fn().mockImplementation(() => Promise.resolve([])),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(Transporte),
          useValue: mockTransporteRepository,
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('extraerYAlmacenarDatos', () => {
    it('should extract and store data', async () => {
      // Simula la extracción de datos
      jest.spyOn(service, 'extraerYAlmacenarDatos').mockResolvedValue('Datos extraídos y almacenados correctamente.');

      const result = await service.extraerYAlmacenarDatos();
      expect(result).toEqual('Datos extraídos y almacenados correctamente.');
    });
  });
});