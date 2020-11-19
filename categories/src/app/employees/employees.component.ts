import { Component, OnInit, Inject } from '@angular/core';
import { ErrorStateMatcher, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../services/employees.service';
import {employees} from '../managers/managers.component'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: employees[];
  dialogConfig: { disableClose: boolean; data: {}; };
  days: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
   public dialogRef: MatDialogRef<EmployeesComponent>,
   private EmployeesService: EmployeesService,
   private route: ActivatedRoute,) {}

  ngOnInit(): void {
   //this.getEmployees();
  }

  getEmployees():void{
    const id = +this.route.snapshot.paramMap.get('idManager');
    //console.log(id);
    this.EmployeesService.getEmployee(id).subscribe(result => {
        this.employees = result;
      }); 
  }


  onConfirm() {
    this.dialogRef.close(true);
  }

  onSubmitChildren() {
/*  this.FormChildren.getRawValue();
    this.dialogRef.close({
      children: this.FormChildren.value,
    });*/
  }

}
