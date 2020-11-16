import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { departments } from '../main-page/main-page.component';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const getDepartments = '/api/getdepartments';

@Injectable({
  providedIn: 'root'
})
export class DepartmensService {

  constructor(private http: HttpClient,
    private router: Router,
    private injector: Injector,) { }

    getDepartments(): Observable<departments[]> {
      return this.http.get<departments[]>(getDepartments);
    }


}
