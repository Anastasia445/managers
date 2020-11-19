import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { managers } from '../managers/managers.component';


const getmanagers = '/api/getmanagers';
const getmanagersByid = '/api/getmanagers';

@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  constructor(private http: HttpClient,
    private router: Router,
    private injector: Injector,) { }

    getManagers(): Observable<managers[]> {
      return this.http.get<managers[]>(getmanagers);
    }

    getManager(idManager:number): Observable<managers> {
      const url = `${getmanagersByid}/${idManager}`;
      return this.http.get<managers>(url);
    }

  }
    
