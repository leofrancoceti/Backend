import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    extraerDatos(): Promise<void>;
    obtenerTodos(): Promise<import("./entities/transporte.entity").Transporte[]>;
}
