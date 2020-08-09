import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginData } from '../models/login-data.model';
import { RESTEndpoints } from '../enums/rest-endpoints.enum';

@Injectable({
  providedIn: 'root'
})
export class PucFormService {

  constructor(private httpClient: HttpClient) { }

  public login(credentials: LoginData, options?: any) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options = { headers: headers };
    return this.httpClient.post(RESTEndpoints.BASE_URL + RESTEndpoints.LOGIN, credentials, options);
  }
}
