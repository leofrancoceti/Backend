import { Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';
export declare class AppService {
    private transporteRepository;
    constructor(transporteRepository: Repository<Transporte>);
    extraerYAlmacenarDatos(): Promise<"Datos extraídos y almacenados correctamente." | undefined>;
    obtenerTodos(): Promise<Transporte[]>;
}
