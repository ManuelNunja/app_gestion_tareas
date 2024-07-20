export interface Empresa {
    empresaId: number;
    nombre: string;
    direccion?: string;
    telefono?: string;
    correoElectronico?: string;
    fechaRegistro?: Date;
    activo: boolean;
  }
  