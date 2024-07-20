import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Empresa } from '../../models/empresa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {
  empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.empresaForm = this.fb.group({
      nombre: ['', Validators.required],
      direccion: [''],
      telefono: [''],
      correoElectronico: ['', [Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.empresaForm.valid) {
      this.apiService.addEmpresa(this.empresaForm.value).subscribe(() => {
        this.router.navigate(['/empresas']);
      });
    }
  }
}
