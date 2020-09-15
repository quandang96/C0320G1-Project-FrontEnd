import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API_URL = 'http://localhost:8080/api/v1/cart';
  private readonly API = 'http://localhost:8080/api/v1/employees';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // Hung: Lấy danh sách airport,
  getAllAirports(): Observable<any> {
    return this.http.get(this.API_URL, this.httpOptions);
  }

  // Duc: lấy danh sách nhân viên
  getAllEmployee(page, size): Observable<any> {
    const link = this.API + '?page=' + page + '&size=' + size;
    return this.http.get(link);
  }

  // Duc: tìm kiếm và trả về có phân trang
  searchEmployees(key, value, page, size): Observable<any> {
    const link = this.API + '/search?key=' + key + '&value=' + value + '&page=' + page + '&size=' + size;
    return this.http.get(link);
  }

  // Duc: thêm mới nhân viên
  addNewEmployees(employees): Observable<any> {
    const link = this.API;
    return this.http.post(link, employees);
  }

}
