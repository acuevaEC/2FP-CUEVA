import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { InscripcionesService } from './services/inscripciones.service';
import { Inscripicion } from './models';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
//
export class InscripcionesComponent implements OnInit {
  dataSource = new MatTableDataSource();
  inscripciones: Inscripicion[] = [];

  displayedColumns = [
    'id',
    'curso',
    'nombreCompleto',
    //'fechaInscripcion',
    'detalle',
    'editar',
    'eliminar',
  ];

  constructor(
    private inscripcionesService: InscripcionesService,
    private matDialog: MatDialog
  ) {
    this.inscripcionesService
      .getInscripciones()
      .subscribe((res: Inscripicion[]) => {
        this.inscripciones = res;
      });
  }

  /*
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  */
  
  ngOnInit(): void {
    this.inscripcionesService.getInscripciones().subscribe({
      next: (inscripciones) => {
        this.dataSource.data = inscripciones;
      },
    });
  }

}
