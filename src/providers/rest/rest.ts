import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../Model/Product'
import { Observable } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';

//https://blog.angular-university.io/angular-http/

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:3000";

  constructor(public httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


//Sending a GET request to /products
public getProducts() : Observable<Product[]>{
  return this.httpClient
   .get<Product[]>(this.baseUrl+'/products')
   .pipe(
    tap(products => console.log(`fetched products`)),
    catchError(this.handleError('getProducts', []))
  );
 };

   // Sending a POST request to /products
   public createProduct(product: Product) {
     console.log('Create product')
     return this.httpClient.post(this.baseUrl+'/products',product, httpOptions);

    //  //.pipe(
    //    tap(products => console.log("creating productid")),
    //    catchError(this.handleError('createProduct', []))
    //  );
  }

  public editProduct(product: Product) {
    console.log('Create product')
    return this.httpClient.put(this.baseUrl+'/products/'+product.id,product, httpOptions);
 }

  public deleteProduct(product: Product){
    return this.httpClient.delete(this.baseUrl+'/products/'+product.id);
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log("API Error Occurred");
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
