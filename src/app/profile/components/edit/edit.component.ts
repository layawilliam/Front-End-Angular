import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/core/services/ticket/ticket.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { HistoryService } from '../../../core/services/history/history.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  item: any;
  value: number;
  form: FormGroup;
  hide = true;
  hideV = true;
  id: any;
  idTk: any;
  formH: FormGroup;
  userProfile: any;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router,
    private userService: UserService,
    private historyService: HistoryService
  ) {
    this.buildForm();
    this.buildFormH();
  }

  ngOnInit(): any {
    this.idTk = this.activeRoute.snapshot.paramMap.get('tk');
    this.getForm();
  }

  getForm(): any {
    this.idTk = this.activeRoute.snapshot.paramMap.get('tk');

    this.ticketService.getByTk(this.idTk).subscribe((dataform) => {
      this.form.patchValue(dataform);
    });
  }

  update(event: Event): void {
    event.preventDefault();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.form.value);

    if (this.form.valid) {

      this.idTk = this.activeRoute.snapshot.paramMap.get('tk');
      const value = this.form.value;

      this.ticketService.updateTk(this.idTk, value).subscribe((data) => {
        console.log(data);

        if (this.formH.valid){
          const values = this.formH.value;
          console.log(values);
          this.historyService.newItem(values).subscribe((dat) => {
            console.log(dat);
          });
        }

        this.router.navigateByUrl(`profile/proyecto/${this.id}`);
      });
    }
  }

  private buildFormH(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.userProfile = JSON.parse(this.userService.getUser());
    this.idTk = this.activeRoute.snapshot.paramMap.get('tk');

    this.formH = this.formBuilder.group({
      ticket_num: [this.idTk],
      proyecto: [this.id],
      correo: [this.userProfile.correo],
      accion: ['Editar']
    });

  }

  private buildForm(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('tk');
    this.form = this.formBuilder.group({
      id_estado: ['', [Validators.required]],
      comentarios: ['', [Validators.required]],
    });
  }
}
