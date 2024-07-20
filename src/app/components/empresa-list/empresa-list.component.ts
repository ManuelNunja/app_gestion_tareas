import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Empresa } from '../../models/empresa.model';


@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {
  empresas: Empresa[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEmpresas().subscribe(empresas => {
      this.empresas = empresas;
    });
  }
}


