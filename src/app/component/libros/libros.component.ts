import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditorialesProviderService } from 'src/app/provider/editoriales-provider.service';
import { AutoresProviderService } from 'src/app/provider/autores-provider.service';
import { LibrosProviderService } from 'src/app/provider/libros-provider.service';
import { AlertService } from 'src/app/utils/alert/alert.service';
import DataSource from 'devextreme/data/data_source';
import { LibroForm } from 'src/app/Forms/Libros-Form';
import {  IEditorial, IAuthor } from 'src/app/Models';
import { ILibros, ILibrosCommand } from 'src/app/Models/Ilibros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {

  libroForm = LibroForm;
  tableData!: DataSource;
  autorList!: Array<IAuthor>;
  editorialList!:Array<IEditorial>;

  constructor(
    private modalService: NgbModal,
    private alert: AlertService,
    private EditorialService: EditorialesProviderService,
    private AutoresService: AutoresProviderService,
    private Provider: LibrosProviderService
  ) {}

  ngOnInit(): void {
    this.loadGrib();
    this.EditorialService.GetAllSubribe().subscribe((res: any) => {
      this.editorialList = res.data;
    });
    this.AutoresService.GetAllSubribe().subscribe((res: any) => {
      console.log(res.data);
      this.autorList = res.data;
    });
  }

  openModal = (content: TemplateRef<any>): NgbModalRef =>
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });

  loadGrib = () => {
    this.tableData = new DataSource({
      key: 'isbn',
      load: () => this.Provider.GetAll(),
    });
  };

  save = async () => {


    if (!this.libroForm.valid) {
      this.alert.warning(
        'Porfavor rellenar todo los campos del formulario',
        'Formulario incompleto'
      );
      return;
    }

  const {Titulo, Sinopsi,NumeroPagina,IdAutor,IdEditorial} =  this.libroForm.value;
  const payload = {
    n_paginas : `${NumeroPagina}`,
    sinopsis:Sinopsi,
    titulo: Titulo,
    autorId:Number(IdAutor),
    editorialId: Number(IdEditorial)
} as ILibrosCommand;
    await this.Provider.Create(payload).subscribe(
      async (res) => {
        const { message } = res;
       
        this.loadGrib();
        if (message !== 'Solicitud Ok') {
          this.pushMessage(message);
        }else{
          this.alert.info(
            'La informacion de registro a sido creada con exito',
            'Registro de Libro'
          );
        }
        
      },
      (err) => {
        const message = typeof err == "object" ? err.join("\n"): err;
        this.alert.warning(
          message,
          'Se registro un error'
        );
      }
    );
    this.modalService.dismissAll();
    this.libroForm.reset();
  };

  fullNameAuthorCellValue (data:ILibros) {
    const { autores:[autor]} = data;

    if(autor === undefined){
      return "";
    }

    return `${autor.nombre} ${autor.apellidos}`;
   
  }
  async pushMessage(messages: string) {
    await this.alert.confir(messages, 'Algo a ocurrido');
  }
}
