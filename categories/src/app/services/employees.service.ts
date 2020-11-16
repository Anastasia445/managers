import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { employees } from '../managers/managers.component';

const getemployees = '/api/getemployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient,
    private router: Router,
    private injector: Injector,) { }

    getEmployees(): Observable<employees[]> {
      return this.http.get<employees[]>(getemployees);
    }
    
}
