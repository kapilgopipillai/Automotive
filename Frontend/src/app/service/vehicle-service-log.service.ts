import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleServiceLog } from '../model/vehicleServiceLog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceLogService {

  constructor(private http: HttpClient) { }

  public GetVehicleServiceLogByVehicleId(vehicleId: number): Observable<VehicleServiceLog[]>{
    return this.http.get<VehicleServiceLog[]>(`https://localhost:7011/api/GetVehicleServiceLogByVehicleId/${vehicleId}`);
  }
}
