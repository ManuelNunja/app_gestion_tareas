import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://your-api-url/api'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  // Métodos para gestionar empresas
  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/Empresas`);
  }

  getEmpresa(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/Empresas/${id}`);
  }

  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(`${this.apiUrl}/Empresas`, empresa);
  }

  updateEmpresa(id: number, empresa: Empresa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Empresas/${id}`, empresa);
  }

  deleteEmpresa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Empresas/${id}`);
  }

  // Métodos para gestionar tareas
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/Tareas`);
  }

  getTarea(id: number): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.apiUrl}/Tareas/${id}`);
  }

  addTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.apiUrl}/Tareas`, tarea);
  }

  updateTarea(id: number, tarea: Tarea): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Tareas/${id}`, tarea);
  }

  deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Tareas/${id}`);
  }
}

