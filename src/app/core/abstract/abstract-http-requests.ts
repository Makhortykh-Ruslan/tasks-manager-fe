import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Params } from '@angular/router';
import { LocalStorageKeys } from '@core/enums/localStorageKeys';
import { Observable } from 'rxjs';

export class AbstractHttpRequests {
  protected http = inject(HttpClient);

  public httpGetRequest<T>(url: string, params: Params = {}): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.get<T>(url, { headers, params });
  }

  public httpPostRequest<T, U>(
    url: string,
    body: T,
    isTracking = false,
    params: Params = {},
    options = {},
  ): Observable<U> {
    const headers = this.getHttpHeaders();

    if (isTracking) {
      return this.http.post<U>(url, body, {
        headers,
        params,
        reportProgress: true,
        observe: 'events',
        ...options,
      }) as unknown as Observable<U>;
    }

    return this.http.post<U>(url, body, {
      headers,
      params,
      ...options,
    }) as unknown as Observable<U>;
  }

  public getHttpHeaders(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) || ''}`,
    );
  }
}
