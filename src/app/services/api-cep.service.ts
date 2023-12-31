import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCepService {

  constructor(private http: HttpClient) { }

  searchCep(value: String): Observable<any> {
    return this.http.get(`${environment.apiCep}${value}`)
  }
}
