import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transporte } from './entities/transporte.entity';
import axios from 'axios'; // Usa axios para hacer solicitudes HTTP.

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Transporte)
    private transporteRepository: Repository<Transporte>,
  ) {}

  async extraerYAlmacenarDatos() {
    const apiUrl = 'http://apiiieg.jalisco.gob.mx/api/etup'; // Usa la URL correcta.
    try {
      const response = await axios.get(apiUrl);
      const datos = response.data;

      // Verifica que los datos sean un array.
      if (!Array.isArray(datos)) {
        throw new Error('La respuesta de la API no es un array.');
      }

      // Procesa y almacena los datos en la base de datos.
      for (const dato of datos) {
        const transporte = new Transporte();
        transporte.año = dato.año;
        transporte.mes = dato.mes;
        transporte.transporte = dato.transporte;
        transporte.ingresos_pasaje = dato.ingresos_pasaje;
        transporte.kilometros_recorridos = dato.kilometros_recorridos;
        transporte.pasajeros_transportados = dato.pasajeros_transportados;
        transporte.unidades_operacion = dato.unidades_operacion;

        await this.transporteRepository.save(transporte);
      }

      return 'Datos extraídos y almacenados correctamente.';
    } catch (error) {
      console.error('Error al obtener o almacenar datos:', error);
      throw new Error('No se pudieron obtener o almacenar los datos.');
    }
  }

  async obtenerTodos() {
    return await this.transporteRepository.find();
  }
}