import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit, OnDestroy{
  dataSource = new MatTableDataSource();

  displayedColumns = [
    'id',
    'alumno',
    'fecha_inicio',
    'detalle',
    'editar',
    'eliminar',
  ];
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
