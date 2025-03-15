import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  año: number;

  @Column()
  mes: number;

  @Column()
  transporte: string;

  @Column('float')
  ingresos_pasaje: number;

  @Column('float')
  kilometros_recorridos: number;

  @Column('int')
  pasajeros_transportados: number;

  @Column('int')
  unidades_operacion: number;
}