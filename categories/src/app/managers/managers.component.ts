import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ManagersService } from '../services/managers.service';
import { EmployeesService } from '../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatRadioChange } from '@angular/material/radio';
import { EmployeesComponent } from '../employees/employees.component';
import { MatDialog } from '@angular/material/dialog';


export interface managers  {
  idManager: number;
  idDepartment: number;
  fname: string;  
  lname: string;
  patronymic: string; 
}

export interface employees {
  idEmployees: number;
  idManager: number;
  fname: string;  
  lname: string;
  patronymic: string;  
}


@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
    providers:[ManagersService, EmployeesService]
})
export class ManagersComponent implements OnInit {

  displayedColumns: string[] = ['lname', 'fname', 'patronymic', '1', '2','3','4','5',
  '6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24',
  '25','26','27','28','29','30'];
  displayedColumns2: string[] = ['lname']
  dataSource: any;
  dataSource2: any;
  //records: employees[];
  mode: ProgressSpinnerMode = 'indeterminate';
  isLoading = true;
  days: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  absent: string[] = ['good', 'bad'];
  causeAbsent: string;
  employees: employees[];
  manager: any;
  [x: string]: any;
    selected=-1;


  constructor(private location: Location,
    private EmployeesService: EmployeesService,
    private ManagersService: ManagersService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getManager();
    this.getEmployees();
  }

  getEmployees():void{
    const id = +this.route.snapshot.paramMap.get('idDepartment');
    //console.log(id);
    this.EmployeesService.getEmployee(id).subscribe(result => {
      this.isLoading = false;
        this.employees = result;
        this.dataSource = new MatTableDataSource(this.employees);
      });
  }

  getManager():void{
    const id = +this.route.snapshot.paramMap.get('idDepartment');
    //console.log(id);
    this.ManagersService.getManager(id).subscribe(data => {
        this.manager = data,
        //console.log(this.manager)
        this.dataSource2 = new MatTableDataSource(this.manager);
     } );
  }

  openDialogCountMissed() {
 
    const dialogRef = this.dialog.open(EmployeesComponent, {
      disableClose: true,  
      data: {
      countt: this.count,
      countt2: this.count2,
      }, 
    });
    dialogRef.afterClosed().subscribe((result) => {
    //  if (result)
        console.log(2+2*2); 

     // }
    });   
  }
  
  n: number = 0;
  count: number = 0;
 radioChange1($event : MatRadioChange):void{
  if($event){
    this.count++;
   }
}
check: boolean = false;
check2: boolean = false;
radioChange3(completed: boolean){
  if(completed == true){
this.count++;
  } else if(completed == false){this.count--;}
}
radioChange4(completed2: boolean){
  if(completed2 == true){
    this.count2++;
      } else if(completed2 == false){this.count2--;}
}

count2: number = 0;

radioChange2($event : MatRadioChange):void{
  if($event){
   this.count2++;
  }
 }

  mark = ["больничный","прогул"];
  mark2 = ["больничный","прогул"];
  mark3 = ["больничный","прогул"];
  mark4 = ["больничный","прогул"];
  mark5 = ["больничный","прогул"];
  mark6 = ["больничный","прогул"];
  mark7 = ["больничный","прогул"];
  mark8 = ["больничный","прогул"];
  mark9 = ["больничный","прогул"];
  mark10 = ["больничный","прогул"];
  mark11 = ["больничный","прогул"];
  mark12 = ["больничный","прогул"];
  mark13 = ["больничный","прогул"];
  mark14 = ["больничный","прогул"];
  mark15 = ["больничный","прогул"];
  mark16 = ["больничный","прогул"];
  mark17 = ["больничный","прогул"];
  mark18 = ["больничный","прогул"];
  mark19 = ["больничный","прогул"];
  mark20 = ["больничный","прогул"];
  mark21 = ["больничный","прогул"];
  mark22 = ["больничный","прогул"];
  mark23 = ["больничный","прогул"];
  mark24 = ["больничный","прогул"];
  mark25 = ["больничный","прогул"];
  mark26 = ["больничный","прогул"];
  mark27 = ["больничный","прогул"];
  mark28 = ["больничный","прогул"];
  mark29 = ["больничный","прогул"];
  mark30 = ["больничный","прогул"];

  setValue(element){
    console.log(element.mark);
     element = element.mark;
  }

  setValue2(element){
    console.log(element.mark2);
   // let v = element.mark;
  }
  setValue3(element){
    console.log(element.mark3);
   // let v = element.mark;
  }

  goBack(): void {
    this.location.back();
  }

}
