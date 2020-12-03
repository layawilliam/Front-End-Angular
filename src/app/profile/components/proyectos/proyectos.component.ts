import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Proyectos } from '../../../core/models/proyecto.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from './../../../core/services/ticket/ticket.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { HistoryService } from '../../../core/services/history/history.service';


import {
  FormBuilder,
  FormGroup,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  /* id: Proyectos; */

  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  @ViewChild('confirmationDialog') confirmationDialog: TemplateRef<any>;
  @ViewChild('historDialog') historDialog: TemplateRef<any>;

  displayedColumns: string[] = [
    'id',
    'comentarios',
    'estado',
    'creado',
    'acciones'

  ];
  historyColumns: string[] = [
    'id',
    'usuario',
    'Fecha Modificación',

  ];
  data: any;
  form: FormGroup;
  deleteRow: string;
  userProfile: any;
  id: any;
  array: any;
  tk: string;
  hisTk: any;
  tableh: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private ticketService: TicketService,
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private historyService: HistoryService
  ) {}

  ngOnInit(): void {

    this.fetchTk();
    this.fetchHistory();
  }
  fetchTk(): any {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.ticketService.getAll(this.id).subscribe((data) => {
        console.log(data);
        this.data = data;

      });

    });
  }
  fetchHistory(): any {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.historyService.getAll(this.id).subscribe((data) => {
        console.log(data);
        this.tableh = data;

      });

    });
  }

  newTk(): any {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.userProfile = JSON.parse(this.userService.getUser());

    this.form = this.formBuilder.group({
      id_ticket: [this.tk],
      id_proyecto: [this.id],
      id_company: [this.userProfile.company]
    });
    const value = this.form.value;

    this.ticketService.newTk(value).subscribe((data) => {
      console.log(data);
      this.fetchTk();

    });

  }

  deleteTk(id: string): any {

    this.ticketService.deleteTk(id).subscribe((rta) => {
      this.fetchTk();
    });

  }
  getHistory(): any{

  }

  openOtherDialog(): void {
    this.dialog.open(this.secondDialog);
  }
  openConfirmation(tk: string): void {
    this.deleteRow = tk;
    this.dialog.open(this.confirmationDialog);
  }
  openHistorDialog(idTk: string): void{
    this.hisTk = idTk;
    this.dialog.open(this.historDialog);
  }
}
