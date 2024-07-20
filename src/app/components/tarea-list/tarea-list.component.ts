import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }
}
