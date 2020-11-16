import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ManagersService } from '../services/managers.service';
import { EmployeesService } from '../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatRadioChange } from '@angular/material/radio';


export interface managers  {
  idManager: number;
  idDepartment: number;
  nameManager: string;
}

export interface employees {
  idEmployee: number;
  idManager: number;
  fname: string;  
  lname: string;
  patronymic: string;  
}


@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  displayedColumns: string[] = ['idEmployee', 'fname', 'lname', 'patronymic', '1', '2','3','4','5',
  '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24',
  '25','26','27','28','29','30'];
  dataSource: any;
  records: employees[];
  mode: ProgressSpinnerMode = 'indeterminate';
  isLoading = true;
  days: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  absent: string[] = ['good', 'bad'];
  causeAbsent: string;
  
  count: number = 0;
  g($event : MatRadioChange):void{
  if($event){
   this.count++;}
 }

  constructor(private location: Location,
    private EmployeesService: EmployeesService,
    private ManagersService: ManagersService) { }

  ngOnInit(): void {
    this.getTable();
  }

  getTable(): void {
    this.EmployeesService.getEmployees().subscribe(results=>{
      this.isLoading = false;
      this.records = results;
   //   for (let i = 0; i <= 30; i++) {
   //     this.days.push(i);
    //  }
      this.dataSource = new MatTableDataSource(this.records);
  }
    );
  }


  goBack(): void {
    this.location.back();
  }

}
