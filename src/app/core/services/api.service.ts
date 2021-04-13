import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  get = <T>(endpoint: string, params = {}): Promise<T> => {
    const url = [
      env.API_URL,
      endpoint
    ];
    return this.http.get<T>(url.join('/'), { params }).toPromise();
  }
}
