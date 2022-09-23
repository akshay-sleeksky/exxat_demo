import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsEntity } from './products.models';

export interface ResponseGetAll {
  data: ProductsEntity[];
  status: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<ResponseGetAll>(
      'https://krishiapp-be.herokuapp.com/api/test'
    );
  }
}
