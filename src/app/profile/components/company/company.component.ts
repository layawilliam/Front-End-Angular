import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../../core/services/companies/companies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: any;
  company1: any;
  company2: any;
  company3: any;
  company4: any;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();
  }
  getCompanies(): void {
    this.companiesService.getAll().subscribe((data) => {
      this.companies = data;
      this.company1 = this.companies.company1;
      this.company2 = this.companies.company2;
      this.company3 = this.companies.company3;
      this.company4 = this.companies.company4;
    });
  }

}
