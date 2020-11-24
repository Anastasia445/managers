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

export interface newObj {
  [counts:number]: number;
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
  '25','26','27','28','29', '30','w','lastCount'];
  
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
      data1: this.pair,
      data2: this.pair2
      }, 
    }); console.log(this.pair)
    dialogRef.afterClosed().subscribe((result) => {
    //  if (result)
      //  console.log(2+2*2); 
     // }
    });   
  }

  count: number = 0;
  count2: number = 0;
  check: boolean = false;
  check2: boolean = false;
  obj: newObj[];
  ex: {}
  pair = {};
  pair2 = {};
  
  radioChange3(completed: boolean,element:any){  
   // console.log(element); 
    if(this.pair[element.idEmployees] === undefined){
    this.pair[element.idEmployees] = 0;}
      if(completed == true){
      // this.count=0;
      this.count++;
      this.pair[element.idEmployees]+=1;
    
      } else if(completed == false)
      {
        this.count--;
        this.pair[element.idEmployees]-=1;
      }
     // console.log('count=',this.count);
      console.log(this.pair); 
  }
  
  radioChange4(completed2: boolean,element:any){
    if(this.pair2[element.idEmployees] === undefined){
      this.pair2[element.idEmployees] = 0;}
    if(completed2 == true){
      // this.count=0;
     this.count2++;
     this.pair2[element.idEmployees]+=1;
     
     } else if(completed2 == false)
       {
         this.count2--;
         this.pair2[element.idEmployees]-=1;
 
       }
     //  console.log('count2=',this.count2);
       console.log(this.pair2);
  }

  goBack(): void {
    this.location.back();
  }

}
/*this.pair[element.idEmployees] = 0;

    if(completed == true){
     this.count++;
      this.pair[element.idEmployees] += 1;

    } else if(completed == false)
      {
        this.count--;
        this.pair[element.idEmployees] -=1;

      }*/

     // this.days.forEach(n =>{