import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private url = "https://monitor.unich.it/ws/angular.php";

  constructor(private http: HttpClient) { }

  getTimbrate(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
