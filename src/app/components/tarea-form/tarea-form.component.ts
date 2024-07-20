import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Tarea } from '../../models/tarea.model';
import { Empresa } from '../../models/empresa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  tareaForm: FormGroup;
  empresas: Empresa[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      empresaId: ['', Validators.required],
      fechaVencimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getEmpresas().subscribe(empresas => {
      this.empresas = empresas;
    });
  }

  onSubmit(): void {
    if (this.tareaForm.valid) {
      this.apiService.addTarea(this.tareaForm.value).subscribe(() => {
        this.router.navigate(['/tareas']);
      });
    }
  }
}

