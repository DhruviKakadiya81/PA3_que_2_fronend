import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:4000/product';

  constructor(private http: HttpClient) { }

  addBook(name :string, price :number, desc :string) {
    const obj = {
      name: name,
      price: price,
      desc: desc
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getBooks() :Observable<Product[]> {    
    return this.http.get<Product[]>(`${this.uri}`);
  }

  editBook(id :any) {
    return this
            .http
            .get(`${this.uri}/${id}`);
    }

    updateBook(id :any,name :string, price :number, desc :string) {

      const obj = {         
          name: name,
          price: price,
          desc: desc
        };
      this
        .http
        .put(`${this.uri}/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }


  deleteBook(id :any) {
    return this
              .http
              .delete(`${this.uri}/${id}`);
  }

}
