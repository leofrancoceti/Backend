import { Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';
export declare class AppService {
    private transporteRepository;
    constructor(transporteRepository: Repository<Transporte>);
    extraerYAlmacenarDatos(): Promise<void>;
    obtenerTodos(): Promise<Transporte[]>;
}
