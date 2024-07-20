import { Empresa } from './empresa.model';

export interface Archivo {
  archivoId: number;
  tareaId: number;
  nombreArchivo: string;
  tipoArchivo: string;
  rutaArchivo: string;
  fechaSubida: Date;
}

export interface Tarea {
  tareaId: number;
  titulo: string;
  descripcion?: string;
  empresaId: number;
  empresa?: Empresa;
  fechaVencimiento: Date;
  estadoId: number;
  estado?: { nombre: string };
  fechaInicio?: Date;
  fechaFin?: Date;
  tiempoTranscurrido?: string;
  activo: boolean;
  archivos?: Archivo[];
}
