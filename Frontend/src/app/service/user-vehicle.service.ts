import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserVehicle } from '../model/userVehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserVehicleService {

  constructor(private http: HttpClient) { }

  public getUserVehicleByUserId(userId: number): Observable<UserVehicle[]>{
    return this.http.get<UserVehicle[]>(`https://localhost:7011/api/GetUserVehicleByUserId/${userId}`);
  }

}
