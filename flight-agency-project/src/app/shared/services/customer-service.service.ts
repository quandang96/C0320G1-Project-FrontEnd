import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {listCustomerDto} from '../models/dto/listCustomerDto';
import {Page} from '../models/dto/page';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private readonly API_URL_CUSTOMER = 'http://localhost:8080/api/v1/customer/';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  //creator: Mậu
  getCustomerHttpOptions(page: number): Object {
    const customer = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        page
      }
    };
    return customer;
  }

  //creator: Mậu
  getAllCustomer(): Observable<listCustomerDto[]> {
    return this.http.get<listCustomerDto[]>(this.API_URL_CUSTOMER + 'management', this.httpOptions);
  }

  //creator: Mậu
  getPage(page: number): Observable<Page<listCustomerDto[]>> {
    return this.http.get<Page<listCustomerDto[]>>(this.API_URL_CUSTOMER + 'management', this.getCustomerHttpOptions(page));
  }

  //creator: Mậu
  search(page: number, pageSize: number, search: string): Observable<any> {
    return this.http.get(this.API_URL_CUSTOMER + '/search' + `?`);
  }
}
