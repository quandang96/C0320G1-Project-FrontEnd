import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Account} from '../models/Account';
import {Observable} from 'rxjs';
import {AbstractControl} from '@angular/forms';
import {AdminPasswordDTO} from '../models/dto/AdminPasswordDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly API_URL_ACCOUNT = 'http://localhost:8080/api/v1/account';
  constructor(private http: HttpClient) {}

  createUser(account): Observable<any> {
    return this.http.post(this.API_URL_ACCOUNT + '/register', account);
  }

  updatePassword(passwordDTO: AdminPasswordDTO, id): Observable<any> {
    return this.http.put(this.API_URL_ACCOUNT + '/password/' + id, passwordDTO);
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.newPassword !== v.confirmPassword) ? {
      passwordnotmatch: true} : null ; }
}
