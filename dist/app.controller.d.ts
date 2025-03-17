import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    extraerDatos(): Promise<"Datos extraídos y almacenados correctamente." | undefined>;
    obtenerTodos(): Promise<import("./entities/transporte.entity").Transporte[]>;
}
