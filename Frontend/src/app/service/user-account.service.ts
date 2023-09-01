import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserAccount } from '../model/userAccount';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  private isLogout = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  
  public getUserDetails(userId: any): Observable<UserAccount>{
    return this.http.get<UserAccount>(`https://localhost:7011/api/GetUserDetails/${userId}`);
  }

  public login(userName: string, password: string){
    return this.http.get(`https://localhost:7011/api/login/${userName}/${password}`);
  }

  setLogoutValue(value: boolean) {
    this.isLogout.next(value);
  }

  getLogoutValue() {
    return this.isLogout.asObservable();
  }

}
