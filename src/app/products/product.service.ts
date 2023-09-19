import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products/products';
import { Observable, Subject, catchError, filter, shareReplay, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'https://dummyjson.com/products';


  constructor(private http: HttpClient) { }

  private productDetailSubject = new Subject<Product>();
  productDetailAction$ = this.productDetailSubject.asObservable();


  products$ = this.http.get<Product[]>(this.productUrl)
    .pipe(
      tap(data => console.log('products', JSON.stringify(data))),
      catchError(this.HandleError),
      shareReplay(1),
    );

  product$ = this.productDetailAction$.pipe(
    filter(id => !!id),
    switchMap(
      productId => this.http.get<Product>(`${this.productUrl}/${productId}`)
    )
  )

  private HandleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err instanceof ErrorEvent) {
      let errorMessage = `an error occured ${err.error} : ${err.error.message}`
    } else {
      let errorMessage = `Backend returned code ${err.body.message}`
    }
    return throwError(() => errorMessage)
  }
}
