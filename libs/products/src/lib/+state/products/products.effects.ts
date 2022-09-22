import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { ProductService } from './products.service';
import { initProducts, loadProductsFailure, loadProductsSuccess } from './products.actions';


@Injectable()
export class ProductEffects {
  loadPhotos$ = createEffect(() =>  this.actions$.pipe(
      ofType(initProducts),
      switchMap(() => this.productService.getAll().pipe(
        map(products  => {
          // console.log(products);
          return loadProductsSuccess({products : products.data})
        }),
        catchError((error) => of(loadProductsFailure(error)))
      ))
    )
    
  )

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}