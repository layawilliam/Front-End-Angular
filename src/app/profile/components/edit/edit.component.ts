import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/core/services/ticket/ticket.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  item: any;
  value: number;
  form: FormGroup;
  hide = true;
  hideV = true;
  id: any;
  idTk: any;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): any {
    this.idTk = this.activeRoute.snapshot.paramMap.get('tk');
    this.getForm();
  }

  getForm(): any{
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
      this.ticketService.updateTk( this.idTk , value).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl(`profile/proyecto/${this.id}`);
      });
    }
  }

  private buildForm(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('tk');
    this.form = this.formBuilder.group({
      id_estado: ['', [Validators.required]],
      comentarios: ['', [Validators.required]],
    });
  }
}
