import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmensService } from '../services/departmens.service';

export interface departments {
  idDepartment: number;
  nameDepartment: string;
}

/*const departments: departments[] = [
  {idDepartment: 1, nameDepartment: 'Финансовый отдел'},
  {idDepartment: 2, nameDepartment: 'Юридический отдел'},
  {idDepartment: 3, nameDepartment: 'Корпоративный отдел'},
];*/

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['idDepartment', 'nameDepartment'];
 // dataSource = departments;
 dataSource: any;
 records: departments[];
 mode: ProgressSpinnerMode = 'indeterminate';
 isLoading = true;
  constructor(private DepartmentsService: DepartmensService,) { }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords(): void {
    this.DepartmentsService.getDepartments().subscribe(results=>{
      this.isLoading = false;
      this.records = results;
      this.dataSource = new MatTableDataSource(this.records);
  }
    );
  }

}
